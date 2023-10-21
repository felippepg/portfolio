import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enAboutMeTranslation from '../_translate/aboutMe/en.json';
import ptAboutMeTranslation from '../_translate/aboutMe/pt.json';
import enHomeTranslation from '../_translate/home/en.json';
import ptHomeTranslation from '../_translate/home/pt.json';
import enProjectsTranslation from '../_translate/projects/en.json';
import ptProjectsTranslation from '../_translate/projects/pt.json';

const resources = {
  en: {
    home: enHomeTranslation,
    projects: enProjectsTranslation,
    about: enAboutMeTranslation,
  },
  pt: {
    home: ptHomeTranslation,
    projects: ptProjectsTranslation,
    about: ptAboutMeTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
