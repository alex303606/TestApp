import { resources } from '@assets/locales';
import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback: any) => {
    callback('es_US');
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

/**
 * Config localization for app
 */
i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en_EN',
    resources,
    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  })
  .then(() => '');

export default i18n;
