import React, {Component} from 'react';
import style from './DriverHero.scss';
import appStore from './images/app-store.png';
import googlePlay from './images/google-play.png';
import {Col, Row, Container } from 'react-bootstrap';

export default class DriverHero extends Component {
    render() {
        return(
            <div className="driverHero">
                <section className="section section--huge section--dark section--driverHero">

                    <Container>
                        <Row>
                            <Col xs="12" sm="5" className="driverHero__CTA">
                                <div className="section__header">
                                    <h1 className="section__title h1">
                                        Earn money on your own schedule
                                    </h1>
                                </div>
                                <div className="section__content">
                                    <p className="lead">Expert snowplow Miners to your driveway or sidewalk in minutes. Download the app to start your order!</p>
                                </div>
                                <div className="section__footer">
                                    <a className="appStoreButton appStoreButton--apple" href="#">
                                        <img src={appStore} alt="" />
                                    </a>
                                    <a className="appStoreButton appStoreButton--google" href="#">
                                        <img src={googlePlay} alt="" />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </section>
            </div>
        );
    }
}
