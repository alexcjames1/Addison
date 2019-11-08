import React, {Component} from 'react';
import style from './ConvenienceIsPriority.scss';
import userConvenience from './images/user-convenience.jpg';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class ConvenienceIsPriority extends Component {
    render() {
        return(
            <div className="convenienceIsPriority">
                <Section className="section__convenienceIsPriority" kind="primary" size="normal">
                    <Row>
                        <Col xs="12" sm="6">
                            <div className="media">
                                <div className="media__figure">
                                    <img src={userConvenience} alt="#" />
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="6">
                            <div className="media__content">
                                <div className="media__header">
                                    <h4 className="media__subTitle">
                                        Time for what you want
                                    </h4>
                                    <div className="media__title">
                                        <h2 className="h2 heading">
                                            Convenience is priority
                                        </h2>
                                    </div>
                                </div>
                                <div className="media__body">
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
