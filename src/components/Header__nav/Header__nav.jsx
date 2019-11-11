import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header__nav.module.scss';
import {Link} from 'react-router-dom';
// import script from './script.js';



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





export default class Header__nav extends Component {
    render() {
        return(
            <div className={style.header__navigation}>

                <nav className={classy(style.navigation, style.navigationMain, style.nav)}>
                    <div className={classy(style.navigation__menuTrigger, style.nav__trigger)}>
                        <a onClick={toggleCanvas} className={style.nav__link} href="#">
                            <i className={classy(style.icon, style.iconMenuToggle)}>&#9776;</i>
                        </a>
                    </div>
                    <ul className={classy(style.navigation__menuList, style.nav__menuList)}>
                        <li className={style.nav__menuItem}>
                            <Link to={"/"} className={style.nav__link}>Schedule</Link>
                        </li>
                        <li className={classy(style.nav__menuItem, style.nav__menuItemActive)}>
                            <Link to={"/driver"} className={style.nav__link}>Drive</Link>
                        </li>
                        <li className={style.nav__menuItem}>
                            <Link to={"#"} className={style.nav__link}>Help</Link>
                        </li>
                        <li>
                            <a className={classy(style.button, style.buttonCTA, style.buttonLG)} href="#">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}
