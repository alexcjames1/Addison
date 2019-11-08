import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './UserHero.scss';
import appStore from './images/app-store.png';
import googlePlay from './images/google-play.png';
import {Col, Row, Container } from 'react-bootstrap';

export default class UserHero extends Component {
    render() {
        return(
            <div className="userHero">
                <div className="brand-scenery">
                    <div className="brand-scenery__background">

                        <div className="brand-scenery__stage">

                            <section className="section section--huge section--dark section--userHero section--onTransparentHeader">
                                <div className="brand-scenery__foreground">
                                    <div className="brand-scenery__snow"></div>
                                    <div className="brand-scenery__container">
                                        <div className="brand-scenery__subject">

                                            <div className="brand-scenery--truckMask">
                                                <div className="bran-scenery__truckMask--truckContainer">
                                                    <div className="brand-scenery__truckContainer--truckPath">
                                                        <div className="brand-scenery__truckPath--trail"></div>
                                                        <div className="brand-scenery__truckPath--truck"></div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>



                                    <Container>
                                        <Row>
                                            <Col xs="12" sm="5" className="userHero__CTA">
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
                                                        <img src={appStore} />
                                                    </a>
                                                    <a className="appStoreButton appStoreButton--google" href="#">
                                                        <img src={googlePlay} />
                                                    </a>
                                                </div>
                                            </Col>

                                            <Col xs="12" sm="7">
                                                <div className="brand-scenery__focus">
                                                    <div className="brand-scenery__focus--phone">
                                                    </div>

                                                    <div className="brand-scenery__focusChildren">
                                                        <div className="brand-scenery__object brand-scenery__object--house-orange">
                                                            <div className="brand-scenery__object brand-scenery__object__sidewalk"></div>
                                                        </div>

                                                        <div className="brand-scenery__object brand-scenery__object--tree-oval"></div>

                                                        <div className="brand-scenery__object brand-scenery__object--igloo"></div>

                                                        <div className="brand-scenery__object brand-scenery__object--tree-round"></div>

                                                        <div className="brand-scenery__object brand-scenery__object--house-purple">
                                                            <div className="brand-scenery__object brand-scenery__object__driveway"></div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </Col>

                                        </Row>
                                    </Container>

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
