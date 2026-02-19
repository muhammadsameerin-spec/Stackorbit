"use client"

import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

// Import all message files
import en from '@/messages/en.json'
import de from '@/messages/de.json'
import es from '@/messages/es.json'
import fr from '@/messages/fr.json'
import it from '@/messages/it.json'
import ja from '@/messages/ja.json'
import ko from '@/messages/ko.json'
import ptBr from '@/messages/pt-br.json'
import esLatam from '@/messages/es-latam.json'
import zhTw from '@/messages/zh-tw.json'

export type Locale = 'en' | 'de' | 'es' | 'fr' | 'it' | 'ja' | 'ko' | 'pt-br' | 'es-latam' | 'zh-tw'

export const locales: Locale[] = ['en', 'de', 'es', 'fr', 'it', 'ja', 'ko', 'pt-br', 'es-latam', 'zh-tw']

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'de': 'Deutschland (Deutsch)',
  'es': 'España (Español)',
  'fr': 'France (Français)',
  'it': 'Italia (Italiano)',
  'ja': '日本 (日本語)',
  'ko': '대한민국(KR)',
  'pt-br': 'Brasil (Português)',
  'es-latam': 'Latinoamérica (Español)',
  'zh-tw': '台灣 (繁體中文)',
}

const messages: Record<Locale, typeof en> = {
  en,
  de,
  es,
  fr,
  it,
  ja,
  ko,
  'pt-br': ptBr,
  'es-latam': esLatam,
  'zh-tw': zhTw,
}

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  locales: Locale[]
  localeNames: Record<Locale, string>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.')
  let current: unknown = obj
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return path // Return the key if not found
    }
  }
  
  return typeof current === 'string' ? current : path
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    // Optionally persist to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', newLocale)
    }
  }, [])

  const t = useCallback((key: string): string => {
    return getNestedValue(messages[locale] as Record<string, unknown>, key)
  }, [locale])

  // Load saved locale on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferred-locale') as Locale | null
      if (saved && locales.includes(saved)) {
        setLocaleState(saved)
      }
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, locales, localeNames }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
