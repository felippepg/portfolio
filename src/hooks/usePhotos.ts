import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const usePhotos = () => {
  const { t } = useTranslation('projects');
  const [photos, setPhotos] = useState([
    {
      id: 1,
      name: 'Auth Service',
      images: ['/img/auth-service.svg', '/img/auth-1.svg', '/img/auth-2.svg'],
      description: t('auth'),
      url: 'https://github.com/felippepg/authentication-service',
    },
    {
      id: 2,
      name: 'Sorteador de Amigos',
      images: [
        '/img/sorteador.svg',
        '/img/sorteador-2.svg',
        '/img/sorteador-3.svg',
      ],
      description: t('sorteador'),
      url: 'https://github.com/felippepg/sorteador-amigos',
    },
    {
      id: 3,
      name: 'Voll Med - API',
      images: ['/img/vol-med.svg', '/img/vol-med-2.svg', '/img/vol-med-3.svg'],
      description: t('voll'),
      url: 'https://github.com/felippepg/med-vol',
    },
    {
      id: 4,
      name: 'Piresfood',
      images: [
        '/img/piresfood.svg',
        '/img/piresfood-2.svg',
        '/img/piresfood-3.svg',
        '/img/piresfood-4.svg',
        '/img/piresfood-5.svg',
        '/img/piresfood-6.svg',
      ],
      description: t('piresfood'),
      url: 'https://github.com/felippepg/piresfood',
    },
  ]);

  return {
    photos,
    setPhotos,
  };
};

export default usePhotos;
