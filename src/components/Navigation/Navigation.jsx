import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Navigation.module.scss';
import {Link} from 'react-router-dom';


export default class Header__nav extends Component {
    render() {
        return(
            <div className={style.header__navigation}>

                <nav className={classy(style.navigation, style.navigationMain, style.nav)}>
                    <ul className={classy(style.navigation__menuList, style.nav__menuList)}>
                        <li className={style.nav__menuItem}>
                            <Link to={"/"} className={style.nav__link}>Home</Link>
                        </li>
                        <li className={classy(style.nav__menuItem, style.nav__menuItemActive)}>
                            <Link to={"/products"} className={style.nav__link}>Products</Link>
                        </li>
                        <li className={classy(style.nav__menuItem, style.nav__menuItemActive)}>
                            <Link to={"/services"} className={style.nav__link}>Services</Link>
                        </li>
                        <li className={classy(style.nav__menuItem, style.nav__menuItemActive)}>
                            <Link to={"/projects"} className={style.nav__link}>Projects</Link>
                        </li>
                        <li className={classy(style.nav__menuItem, style.nav__menuItemActive)}>
                            <Link to={"/about"} className={style.nav__link}>About Us</Link>
                        </li>
                        <li className={classy(style.nav__menuItem, style.nav__menuItemActive)}>
                            <a href="mailto:sales@addisonstl.com" className={classy(style.nav__link, style.contactButton)}>Contact</a>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}
