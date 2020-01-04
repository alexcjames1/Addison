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
                            <div className={style.media__content}>
                                <div className={style.media__header}>
                                    <div className={style.media__title}>
                                        <h2 className={classy(style.h2, style.heading)}>
                                            Addison Stl is your BEST choice for all your steel needs
                                        </h2>
                                    </div>
                                </div>
                                <div className={style.media__body}>
                                    <p>
                                        Addison Stl is a family owned company that has been servicing the Chicagoland area and Midwest
                                        for the past 60 years. Customer service is our number one priority. There is a reason why we list
                                        this first.  Our most valued asset is You, the Customer. We partner with you to guarantee your steel
                                        needs are met. We offer stock material as well as saw and torch cutting to size, including miter and
                                        production cutting. We pride ourselves in our value-added services of primer painting, galvanizing,
                                        blasting and final finish coating of all materials, threading, bending, mid-welding and plate attachments.
                                        Mill test reports and/or certification of materials are available at your request. We offer same day
                                        service as well as JIT stocking of your company’s specific products. Our company is located in the heart of
                                        Chicago, providing for the fastest and most cost-effective delivery services. Whether it is from our fleet
                                        of trucks locally to your shop or job site or nationwide delivery by our partners of outside trucking
                                        companies, Addison Stl has you covered.
                                    </p>
                                    <p>
                                        Our extensive inventory includes over 6,000 tons of steel pipe and tubing, plates, beams, channels,
                                        angles, flats as well as aluminum, hot and cold rolled steel, and stainless steel. This inventory
                                        guarantees that you will receive what you need in the fastest time possible.
                                    </p>
                                    <p>
                                        Our staff at Addison Stl is committed to supplying all your steel requirements. 
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6">
                            <div className={style.media}>
                                <div className={style.media__figure}>
                                    <img src={team} alt="#" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Section>
            </div>
        );
    }
}
