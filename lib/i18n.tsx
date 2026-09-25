"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Lang = "ko" | "en";

export type Localized = { ko: string; en: string };

const STORAGE_KEY = "portfolio-lang";
const LANG_EVENT = "portfolio-lang-change";

function readStoredLang(): Lang | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "ko" || stored === "en" ? stored : null;
  } catch {
    return null;
  }
}

function detectBrowserLang(): Lang {
  return window.navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en";
}

// useSyncExternalStore is the right tool here: localStorage (and the browser's
// language setting) is an external store, so we subscribe to it rather than
// mirroring it into useState inside an effect.
function getSnapshot(): Lang {
  return readStoredLang() ?? detectBrowserLang();
}

function getServerSnapshot(): Lang {
  return "ko";
}

function subscribe(callback: () => void) {
  window.addEventListener(LANG_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(LANG_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function writeLang(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // localStorage unavailable (private mode, etc.) — in-memory only for this tab
  }
  window.dispatchEvent(new Event(LANG_EVENT));
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (value: Localized) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((next: Lang) => writeLang(next), []);
  const toggle = useCallback(
    () => setLang(lang === "ko" ? "en" : "ko"),
    [lang, setLang],
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggle,
      t: (value: Localized) => value[lang],
    }),
    [lang, setLang, toggle],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
