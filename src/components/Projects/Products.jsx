import React, {Component} from 'react';
import style from './Products.module.scss';
import {MediaComponent} from '../';
import products from './images/products.png';
import pipe from './images/pipe.JPG';
import tube from './images/tube.jpg';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import {Link} from 'react-router-dom';

export default class Products extends Component {
    render() {
        return(
            <div className={style.products}>
                <div className={style.products__content}>

                    <Section className={style.section} kind="primary" size="small">
                        <Row>
                            <Col xs="12" sm="4">
                                <Link to={"/piping"} className={style.pipeChart}>
                                    <MediaComponent column textAlign="center" image={pipe} title="Piping"/>
                                </Link>
                            </Col>
                            <Col xs="12" sm="4">
                                <Link to={"/tubing"} className={style.tubeChart}>
                                    <MediaComponent column textAlign="center" image={tube} title="Tubing"/>
                                </Link>
                            </Col>
                            <Col xs="12" sm="4">
                                <Link to={"/structural"} className={style.tubeChart}>
                                    <MediaComponent column textAlign="center" image={products} title="Structurals"/>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="4">
                                <Link to={"/aluminum"} className={style.tubeChart}>
                                    <MediaComponent column textAlign="center" image={products} title="Aluminum"/>
                                </Link>
                            </Col>
                            <Col xs="12" sm="4">
                                <Link to={"/stainless"} className={style.tubeChart}>
                                    <MediaComponent column textAlign="center" image={products} title="Stainless"/>
                                </Link>
                            </Col>
                            <Col xs="12" sm="4">
                                <Link to={"/fabrication"} className={style.tubeChart}>
                                    <MediaComponent column textAlign="center" image={products} title="Fabrication"/>
                                </Link>
                            </Col>
                        </Row>
                    </Section>

                </div>
            </div>
        );
    }
}
