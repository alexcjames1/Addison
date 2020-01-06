import React, {Component} from 'react';
import style from './Services.module.scss';
import {MediaComponent} from '../';
import products from './images/products.png';
import saw from './images/services-saw.JPG';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import {Link} from 'react-router-dom';

export default class Services extends Component {
    render() {
        return(
            <div className={style.products}>
                <div className={style.products__content}>

                    <Section className={style.section} kind="primary" size="small">
                        <Row>
                            <Col xs="12" sm="4">
                                <Link to={"/piping"} className={style.pipeChart}>
                                    <MediaComponent column textAlign="center" image={saw} title="Saw Cutting"/>
                                </Link>
                            </Col>
                            <Col xs="12" sm="4">
                                <Link to={"/tubing"} className={style.tubeChart}>
                                    <MediaComponent column textAlign="center" image={saw} title="Services Example"/>
                                </Link>
                            </Col>
                            <Col xs="12" sm="4">
                                <Link to={"/tubing"} className={style.tubeChart}>
                                    <MediaComponent column textAlign="center" image={saw} title="Services Example"/>
                                </Link>
                            </Col>
                        </Row>
                    </Section>

                </div>
            </div>
        );
    }
}
