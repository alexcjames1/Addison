import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './HowSnowminerWorks.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class HowSnowminerWorks extends Component {
    render() {
        return(
            <div className="HowSnowminerWorks">
                <Section className="section section--large section--secondary section__HowSnowminerWorks" kind="secondary" size="xsmall">

                    <Col xs="12" sm="12" className="section__header section__header--centered">
                        <div className="section__title">
                            <h2 className="h2">
                                How SnowMiner Works
                            </h2>
                        </div>
                    </Col>


                    <Row>

                        <Col xs="12" sm="4">
                            <div className="icon__number icon__number--blue">1</div>
                            <h3 className="h3">Schedule a snowplow</h3>
                            <p>
                                Schedule a snowplow in a few easy steps by choosing your property type, services that you need and the time you need it done. Payment is required before job completion.
                            </p>
                        </Col>

                        <Col xs="12" sm="4">
                            <div className="icon__number icon__number--purple">2</div>
                            <h3 className="h3">Snow removal</h3>
                            <p>
                                Your driver is now on their way to complete the services needed. You’ll be able to see your driver’s information and vehicle details.
                            </p>
                        </Col>

                        <Col xs="12" sm="4">
                            <div className="icon__number icon__number--green">3</div>
                            <h3 className="h3">Leave a review</h3>
                            <p>
                                If you’re satisfied with the job, help out your driver by rating them and leave a review for us as well. We hope you schedule with us again soon!
                            </p>
                        </Col>

                    </Row>

                </Section>
            </div>
        );
    }
}
