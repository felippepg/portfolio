// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enHomeTranslation from '../_translate/home/en.json'; // Importe suas traduções em inglês
import ptHomeTranslation from '../_translate/home/pt.json';
import enProjectsTranslation from '../_translate/projects/en.json';
import ptProjectsTranslation from '../_translate/projects/pt.json';

const resources = {
  en: {
    home: enHomeTranslation,
    projects: enProjectsTranslation,
  },
  pt: {
    home: ptHomeTranslation,
    projects: ptProjectsTranslation,
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
