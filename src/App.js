import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AppRoutes from './routes/AppRoutes';
// Components

const App = () => {

  const { i18n } = useTranslation();

  useEffect(() => {
    /**
     * On page load, verify user language and change it from english to spanish
     * if user browser is set to spanish
     */
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.includes('es')) {
      setTimeout(() => {
        i18n.changeLanguage('es');
      }, 700);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-fluid">
      <AppRoutes />
    </div>
  );
}

export default App;
