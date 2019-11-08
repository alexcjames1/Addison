import React, {Component} from 'react';
import style from './DriverFeatures.scss';
import {MediaComponent} from '../';
import grid from '../Grid';
import earnings from './images/track-earnings-icon.png';
import snow from './images/snowflake-icon.png';
import management from './images/order-management-icon.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class DriverFeatures extends Component {
    render() {
        return(
            <div>
                <Section className="section__driverFeatures" kind="primary" size="small">
                    <div className="driverFeatures__content">
                        <Row>
                            <Col xs="12" sm="4">
                                <MediaComponent column textAlign="center" image={snow} title="Know the next snowfall" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" />
                            </Col>
                            <Col xs="12" sm="4">
                                <MediaComponent column textAlign="center" image={management} title="Easy order management" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" />
                            </Col>
                            <Col xs="12" sm="4">
                                <MediaComponent column textAlign="center" image={earnings} title="Track your earnings" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" />
                            </Col>
                        </Row>
                    </div>
                </Section>
            </div>

        );
    }
}
