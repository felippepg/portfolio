// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enHomeTranslation from '../_translate/home/en.json'; // Importe suas traduções em inglês
import ptHomeTranslation from '../_translate/home/pt.json';

const resources = {
  en: {
    home: enHomeTranslation,
  },
  pt: {
    home: ptHomeTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt', // Idioma padrão
  fallbackLng: 'en', // Idioma de fallback
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
