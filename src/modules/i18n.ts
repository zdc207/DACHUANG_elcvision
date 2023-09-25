/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 20:22:55
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-25 11:26:04
 * @FilePath: \power-system-visualization\src\modules\i18n.ts
 * @Description:
 */
import type { Locale } from 'vue-i18n'
import { createI18n } from 'vue-i18n'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
const i18n = createI18n({
  legacy: false,
  locale: '',
  messages: {},
})

const localesMap = Object.fromEntries(
  Object.entries(import.meta.glob('../../locales/*.yml'))
    .map(([path, loadLocale]) => [path.match(/([\w-]*)\.yml$/)?.[1], loadLocale]),
) as Record<Locale, () => Promise<{ default: Record<string, string> }>>

export const availableLocales = Object.keys(localesMap)

const loadedLanguages: string[] = []

function setI18nLanguage(lang: Locale) {
  i18n.global.locale.value = lang as any
  if (typeof document !== 'undefined')
    document.querySelector('html')?.setAttribute('lang', lang)
  return lang
}

export async function loadLanguageAsync(lang: string): Promise<Locale> {
  // If the same language
  if (i18n.global.locale.value === lang)
    return setI18nLanguage(lang)

  // If the language was already loaded
  if (loadedLanguages.includes(lang))
    return setI18nLanguage(lang)

  // If the language hasn't been loaded yet
  const messages = await localesMap[lang]()
  i18n.global.setLocaleMessage(lang, messages.default)
  loadedLanguages.push(lang)
  return setI18nLanguage(lang)
}

export const languages = [
  { value: 'zh-CN', label: '简体中文' }, // 简体中文 (Simplified Chinese)
  { value: 'en', label: 'English' }, // 英语 (English)
  { value: 'es', label: 'Español' }, // 西班牙语 (Spanish)
  { value: 'fr', label: 'Français' }, // 法语 (French)
  { value: 'ja', label: '日本語' }, // 日语 (Japanese)
  { value: 'ko', label: '한국어' }, // 韩语 (Korean)
  { value: 'ru', label: 'Русский' }, // 俄语 (Russian)
  { value: 'de', label: 'Deutsch' }, // 德语 (German)
  { value: 'it', label: 'Italiano' }, // 意大利语 (Italian)
  { value: 'ar', label: 'العربية' }, // 阿拉伯语 (Arabic)
  { value: 'id', label: 'Bahasa Indonesia' }, // 印度尼西亚语 (Indonesian)
  { value: 'pl', label: 'Polski' }, // 波兰语 (Polish)
  { value: 'pt-BR', label: 'Português (Brasil)' }, // 巴西葡萄牙语 (Brazilian Portuguese)
  { value: 'tr', label: 'Türkçe' }, // 土耳其语 (Turkish)
  { value: 'uk', label: 'Українська' }, // 乌克兰语 (Ukrainian)
]

loadLanguageAsync('zh-CN')
export default i18n
