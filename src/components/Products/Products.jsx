import React, {Component} from 'react';
import style from './Products.scss';
import {MediaComponent} from '../';
import onTheGo from './images/on-the-go-icon.png';
import priceTag from './images/price-tag-icon.png';
import snowflake from './images/snowflake-icon.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class UserFeatures extends Component {
    render() {
        return(
            <div className="driverFeatures">
                <div className="driverFeatures__content">

                    <Section className="section__userFeatures" kind="primary" size="small">
                        <Row>
                            <Col xs="12" sm="4">
                                <MediaComponent column textAlign="center" image={snowflake} />
                            </Col>
                            <Col xs="12" sm="4">
                                <MediaComponent column textAlign="center" image={onTheGo}  />
                            </Col>
                            <Col xs="12" sm="4">
                                <MediaComponent column textAlign="center" image={priceTag}  />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="4">
                                <MediaComponent column textAlign="center" image={snowflake} />
                            </Col>
                            <Col xs="12" sm="4">
                                <MediaComponent column textAlign="center" image={onTheGo}  />
                            </Col>
                            <Col xs="12" sm="4">
                                <MediaComponent column textAlign="center" image={priceTag}  />
                            </Col>
                        </Row>
                    </Section>

                </div>
            </div>
        );
    }
}
