import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header__nav.module.scss';
import {Link} from 'react-router-dom';
// import script from './script.js';

export default class Footer extends Component {
    render() {
        return(
            <div className="header__navigation">

                <nav className="navigation navigation--main nav">
                    <div className="navigation__menuTrigger nav__trigger">
                        <a className="nav__link" href="#">
                            <i className="icon icon--menu-toggle">&#9776;</i>
                        </a>
                    </div>
                    <ul className="navigation__menuList nav__menuList">
                        <li className="nav__menuItem">
                            <Link to={"/"} className="nav__link">Home</Link>
                        </li>
                        <li className="nav__menuItem nav__menuItem--active">
                            <Link to={"/driver"} className="nav__link">Products &amp; Services</Link>
                        </li>
                        <li className="nav__menuItem">
                            <Link to={"#"} className="nav__link">Pipe Chart</Link>
                        </li>
                        <li className="nav__menuItem">
                            <Link to={"#"} className="nav__link">Tubing Chart</Link>
                        </li>
                        <li className="nav__menuItem">
                            <Link to={"#"} className="nav__link">About Us</Link>
                        </li>
                        <li>
                            <a className="button button--cta button--lg" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}
