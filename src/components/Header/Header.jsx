import React, {Component} from 'react';
import classy from '../../utils/classy';

import style from './Header.module.scss';
import { Logo, Navigation } from '../../components';

var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}


//CODE FOR THE HAMBURGER MENU

var toggleCanvas = function() {

    // when a click is made, close menus
    window.addEventListener('click', function(e) {
        menu.closeMenu(e);
    });


    // menu
    var menu = {
        nav: document.querySelector('.nav'),
        navTrigger: document.querySelector('.nav__trigger'),
        navList: document.querySelector('.nav__menuList'),

        doToggle: function(e) {
            e.preventDefault();
            e.stopPropagation();

            this.nav.classList.toggle('nav--expanded');
        },
        closeMenu: function(e) {
            this.nav.classList.remove('nav--expanded');
        }
    };

    // when menu trigger is clicked, toggle its state
    menu.navTrigger.addEventListener('click', function(e) {
        menu.doToggle(e); });

    // when clicking inside of menuList, dont close the menu
    menu.navList.addEventListener('click', function(e) {
        e.stopPropagation();
    });


    var navigationMain = document.querySelector('.navigation--main');
    window.addEventListener("resize", function(e) {
        if (window.outerWidth > 768) {
            navigationMain.classList.remove('nav--expanded');
        }
    });

};





export default class Header extends Component {
    render() {
        return(
            <header className={classy(style.header, style.headerTransparent)}>
                <div className={style.container}>
                    <div className={style.header__container}>
                        <div className={style.header__logo}>
                            <div className={style.logo}>
                                <a href="#">
                                    <Logo />
                                </a>
                            </div>
                        </div>

                        <div className={style.navigation}>
                            <Navigation />
                        </div>
                    </div>

                </div>
            </header>
        );
    }
}
