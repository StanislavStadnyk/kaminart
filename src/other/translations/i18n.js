import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_en from './en/common.json';
import common_ru from './ru/common.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: common_en, // 'common' is our custom namespace
  },
  ru: {
    translation: common_ru,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ru',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
