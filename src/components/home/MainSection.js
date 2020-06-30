import React, { useEffect, useState } from 'react';
import Typed from 'react-typed';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';
// Images
// import HILLS from './../../assets/images/hills.svg';
// import TREES from './../../assets/images/trees.svg';
// import CLOUD1 from './../../assets/images/cloud-1.svg';
// import CLOUD2 from './../../assets/images/cloud-2.svg';
import AVATAR from './../../assets/images/avatar.svg';

const MainSection = () => {

    const { t } = useTranslation();
    const [visible, setVisible] = useState(true);
    const [canupdatenav, setCanUpdateNav] = useState(false);

    let strings = [
        t('STR_6'),
        t('STR_7'),
        t('STR_0')
    ];

    const validateScroll = () => {
        const isTop = window.scrollY < 100;
        if (!canupdatenav)
            setCanUpdateNav(true);
        if (!isTop) {
            setVisible(false);
        }
        else {
            setVisible(true);
        }
    }
    // window.addEventListener("scroll", validateScroll);

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

    return (
        <div
            id="first"
            className="row full-section first"
        >
            <div className="back-container">
                {/* <ReactSVG className="cloud1" src={CLOUD1} />
                <ReactSVG className="cloud2" src={CLOUD2} />
                <ReactSVG className="trees" src={TREES} />
                <ReactSVG className="hills" src={HILLS} /> */}
            </div>
            <div className="main-section container">
                <ReactSVG className="avatar" src={AVATAR} />
                <div className="badge badge-light">{t('STR_8')}</div>
                <p className="typer">
                    {t('STR_9')} &nbsp;
                    <Typed
                        strings={strings}
                        typeSpeed={50}
                        backSpeed={70}
                        loop
                    />
                </p>
                <p className="description">{t('STR_10')}</p>
            </div>
        </div>
    );
};

export default MainSection;