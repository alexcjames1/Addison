import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer.module.scss';
import {flexboxgrid} from '../../';
import Logo from '../Logo/Logo';
import {Col, Row, Container } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return(
            <footer className={style.footer}>
                <Container>
                    <Row>

                        <div className={style.footer__navigation}>
                            <div className={style.footer__logo}>
                                <div className={style.footer__logo}>
                                    <a href="index.html">
                                        <Logo />
                                    </a>
                                </div>
                            </div>
                            <nav className={classy(style.footer__navigationList, style.navigation, style.navigationSecondary)}>
                                <ul className={style.list}>
                                    <li>
                                        <a href="#">Schedule</a>
                                    </li>
                                    <li className={style.list__itemActive}>
                                        <a href="#">Drive</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className={style.footer__legal}>
                            <div>
                                <p className={style.footer__copyright}>
                                    &copy; 2017 SnowMiner. All rights reserved.
                                </p>
                            </div>
                            <div className={style.footer__socialMedia}>
                                <ul className={style.socialMediaLinks}>
                                    <li className={style.twitter}>
                                        <a href="#"><i className="mdi mdi-twitter"></i></a>
                                    </li>
                                    <li className={style.facebook}>
                                        <a href="#"><i className="mdi mdi-facebook"></i></a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </Row>
                </Container>
            </footer>
        );
    }
}
