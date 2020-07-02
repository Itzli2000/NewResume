import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AppRoutes from './routes/AppRoutes';
// Components

const App = () => {

  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(true);
  const [canupdatenav, setCanUpdateNav] = useState(false);

  const validateScroll = () => {
    const isTop = window.scrollY < (window.screen.availHeight - (window.screen.availHeight * 0.3));
    if (!canupdatenav)
      setCanUpdateNav(true);
    if (!isTop) {
      setVisible(false);
    }
    else {
      setVisible(true);
    }
  }
  window.addEventListener("scroll", validateScroll);

  useEffect(() => {
    let navBar = document.getElementById('main-nav');
    if (canupdatenav && navBar) {
      if (visible) {
        navBar.classList.remove('navbar-light');
        navBar.classList.remove('bg-light');
        navBar.classList.add('navbar-dark');
        navBar.classList.add('bg-dark');
      } else {
        navBar.classList.remove('navbar-dark');
        navBar.classList.remove('bg-dark');
        navBar.classList.add('navbar-light');
        navBar.classList.add('bg-light');
      }
    }
    // eslint-disable-next-line
  }, [visible]);

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
      <div onClick={() => window.scrollTo(0, 0)} className={"scroll-top" + (!visible ? ' show ' : '')}>
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default App;
