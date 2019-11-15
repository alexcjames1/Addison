import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './WhoWeAre.module.scss';
import userConvenience from './images/user-convenience.jpg';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class WhoWeAre extends Component {
    render() {
        return(
            <div className={style.WhoWeAre}>
                <Section className={style.section} kind="primary" size="normal">
                    <Row>
                        <Col xs="12" sm="6">
                            <div className={style.media}>
                                <div className={style.media__figure}>
                                    <img src={userConvenience} alt="#" />
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6">
                            <div className={style.media__content}>
                                <div className={style.media__header}>
                                    <div className={style.media__title}>
                                        <h2 className={classy(style.h2, style.heading)}>
                                            We are Addison Stl
                                        </h2>
                                    </div>
                                </div>
                                <div className={style.media__body}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat ornare sapien dictum iaculis. Class aptent taciti sociosqu ad litora torquent Class aptent taciti sociosqu ad litora
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Section>
            </div>
        );
    }
}
