import React from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {

  const { t, i18n } = useTranslation();

  const changeLan = lang => {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="container-fluid">
      <h1>{t('STR_1')}</h1>
      <button
      onClick={()=>changeLan('es')}
      >Español</button>
      <button
      onClick={()=>changeLan('en')}
      >Ingles</button>
    </div>
  );
}

export default App;
