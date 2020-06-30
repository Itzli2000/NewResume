import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
// Components
import LanguageSelector from './../../components/layout/LanguageSelector';

const NavBar = (props) => {

    const { t } = useTranslation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark row">
            <NavLink className="navbar-brand" activeClassName='active' to={`/home`}>{t('STR_00')}<span>.</span> </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav align-items-center w-100">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' to={`/home`}> {t('STR_3')}</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link" activeClassName='active' to={`/about`}> {t('STR_4')}</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link" activeClassName='active' to={`/work`}> {t('STR_5')}</NavLink>
                    </li>
                    <li className="nav-item ml-auto mr-3">
                        <div >
                            <LanguageSelector />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;