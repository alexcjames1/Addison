import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './FirstChoice.module.scss';
import team from './images/team.jpg';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class FirstChoice extends Component {
    render() {
        return(
            <div className={style.FirstChoice}>
                <Section className={style.section} kind="primary" size="normal">
                    <Row>
                        <Col xs="12" sm="6">
                            <div className={style.media}>
                                <div className={style.media__figure}>
                                    <img src={team} alt="#" />
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6">
                            <div className={style.media__content}>
                                <div className={style.media__header}>
                                    <div className={style.media__title}>
                                        <h2 className={classy(style.h2, style.heading)}>
                                            Make Addison Steel Your First Choice
                                        </h2>
                                    </div>
                                </div>
                                <div className={style.media__body}>
                                    <p>
                                        Are you having trouble finding what you need? Ask us, we either have it or will
                                        get it for you. Addison Pipe & Tube Co. has been serving the Chicagoland area
                                        and the Midwest for over fifty years.
                                        Customer service is our number one priority. There is a reason why we list this
                                        first. Our most valued asset is you, the customer. We cut to size, including miter
                                        and production cutting. We offer threading, bending and priming of material. Mill
                                        test reports and/or certification of material are also available, if requested.
                                        We offer same day service.
                                        We offer local delivery to you or to your job site with our fleet
                                        of delivery trucks. Out of town deliveries are arranged by our dispatch.
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
