import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer.scss';
import {flexboxgrid} from '../../';
import Logo from '../Logo/Logo';
import {Col, Row, Container } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <Container>
                    <Row>

                        <div className="footer__navigation">
                            <div className="footer__logo">
                                <div className="footer__logo">
                                    <a href="index.html">
                                        <Logo />
                                    </a>
                                </div>
                            </div>
                            <nav className="footer__navigationList navigation navigation--secondary">
                                <ul className="list">
                                    <li>
                                        <a href="#">Schedule</a>
                                    </li>
                                    <li className="list__item--active">
                                        <a href="#">Drive</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="footer__legal">
                            <div>
                                <p className="footer__copyright">
                                    &copy; 2017 SnowMiner. All rights reserved.
                                </p>
                            </div>
                            <div className="footer__socialMedia">
                                <ul className="socialMediaLinks">
                                    <li className="socialMediaLinks__link--twitter">
                                        <a href="#"><i className="mdi mdi-twitter"></i></a>
                                    </li>
                                    <li className="socialMediaLinks__link--facebook">
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
