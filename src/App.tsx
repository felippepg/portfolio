import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation('home');
  return (
    <>
      <h1>{t('occupation')}</h1>
      <p>{t('presentation')}</p>
    </>
  );
}

export default App;
