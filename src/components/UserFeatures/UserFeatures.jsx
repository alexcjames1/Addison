import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './UserFeatures.scss';
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
                                <MediaComponent column textAlign="center" image={snowflake} title="No longer brave the cold" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" />
                            </Col>
                            <Col xs="12" sm="4">
                                <MediaComponent column textAlign="center" image={onTheGo} title="Order on the go" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" />
                            </Col>
                            <Col xs="12" sm="4">
                                <MediaComponent column textAlign="center" image={priceTag} title="Simple process, Simple pricing" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" />
                            </Col>
                        </Row>
                    </Section>

                </div>
            </div>
        );
    }
}
