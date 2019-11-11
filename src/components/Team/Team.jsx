import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Team.module.scss';
import houseTeams from './images/house-teams.png';
import {MediaComponent} from '../';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class TeamsOrIndividuals extends Component {
    render() {
        return(
            <Section className={style.section} kind="dark" size="normal">
                <div className={style.team}>
                    <img src={houseTeams} alt="" />
                </div>
            </Section>
        );
    }
}
