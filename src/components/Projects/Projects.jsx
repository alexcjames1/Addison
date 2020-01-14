import React, {Component} from 'react';
import style from './Projects.module.scss';
import {MediaComponent} from '../';
import project1 from './images/project1.JPG';
import project2 from './images/project2.JPG';
import project3 from './images/project3.PNG';
import project4 from './images/project4.PNG';
import project5 from './images/project5.PNG';
import project6 from './images/project6.JPG';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import {Link} from 'react-router-dom';

export default class Projects extends Component {
    render() {
        return(
            <div className={style.products}>
                <div className={style.products__content}>

                    <Section className={style.section} kind="primary" size="small">
                        <Row>
                            <Col xs="12" sm="4">
                                <Link to={"/piping"} className={style.pipeChart}>
                                    <MediaComponent column textAlign="center" image={project1} />
                                </Link>
                            </Col>
                            <Col xs="12" sm="4">
                                <Link to={"/tubing"} className={style.tubeChart}>
                                    <MediaComponent column textAlign="center" image={project2} />
                                </Link>
                            </Col>
                            <Col xs="12" sm="4">
                                <Link to={"/structural"} className={style.tubeChart}>
                                    <MediaComponent column textAlign="center" image={project3} />
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="4">
                                <Link to={"/aluminum"} className={style.tubeChart}>
                                    <MediaComponent column textAlign="center" image={project4} />
                                </Link>
                            </Col>
                            <Col xs="12" sm="4">
                                <Link to={"/stainless"} className={style.tubeChart}>
                                    <MediaComponent column textAlign="center" image={project5} />
                                </Link>
                            </Col>
                            <Col xs="12" sm="4">
                                <Link to={"/fabrication"} className={style.tubeChart}>
                                    <MediaComponent column textAlign="center" image={project6} />
                                </Link>
                            </Col>
                        </Row>
                    </Section>

                </div>
            </div>
        );
    }
}
