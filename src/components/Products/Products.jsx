import React, {Component} from 'react';
import style from './Products.module.scss';
import {MediaComponent} from '../';
import onTheGo from './images/on-the-go-icon.png';
import priceTag from './images/price-tag-icon.png';
import snowflake from './images/snowflake-icon.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class Products extends Component {
    render() {
        return(
            <div className={style.products}>
                <div className={style.products__content}>

                    <Section className={style.section} kind="primary" size="small">
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
