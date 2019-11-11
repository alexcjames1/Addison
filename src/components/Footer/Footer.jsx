import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer.module.scss';
import { ContactForm } from '../';
import Logo from './images/addison-wordmark.png';
import {Col, Row, Container } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return(
            <footer className={style.footer}>
                <Container>
                    <Row className={style.finalThingsToClick}>
                        <Col xs="12" sm="4">
                            <div className={style.formFiller}>
                                <ContactForm />
                            </div>
                        </Col>
                        <Col xs="12" sm="4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.615735133035!2d-87.68354928456085!3d41.81503767922713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e333a729b9f55%3A0xdfbf93f690306318!2sAddison%20Pipe%20LLC!5e0!3m2!1sen!2sus!4v1573499195727!5m2!1sen!2sus" className={style.map}></iframe>
                        </Col>
                        <Col xs="12" sm="4">
                            <div className={style.businessInformation}>
                                <img src={Logo} alt="" className={style.logo}/>
                                <a className={style.address} href="https://www.google.com/maps/place/Addison+Pipe+LLC/@41.8150377,-87.6835493,17z/data=!4m5!3m4!1s0x880e333a729b9f55:0xdfbf93f690306318!8m2!3d41.8150377!4d-87.6813606" target="_blank">4343 S. Oakley Avenue Chicago, IL 60609</a>
                                <a className={style.telephone} href="tel:1-800-767-7473">1-800-SOS-PIPE</a>
                                <a className={style.email} href="mailto:sales@addisonpipe.com">sales@addisonpipe.com</a>
                            </div>
                        </Col>
                    </Row>
                    <Row className={style.legal}>
                        <Col xs="12" sm="4">
                            <div>
                                <p className={style.copyright}>
                                     &copy; 2019 Addison Stl. All rights reserved.
                                </p>
                            </div>
                        </Col>
                        <Col xs="12" sm="4" className={style.media}>
                            <div className={style.socialMedia}>
                                <ul className={style.socialMediaLinks}>
                                     <li className={style.twitter}>
                                         <a href="#"><i className="mdi mdi-twitter"></i></a>
                                     </li>
                                     <li className={style.facebook}>
                                         <a href="https://www.facebook.com/addisonpipeandtube/" target="_blank"><i className="mdi mdi-facebook"></i></a>
                                     </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}
