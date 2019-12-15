import React, {Component} from 'react';
import style from './Services.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class Services extends Component {
    render() {
        return(
            <div>
                <Section size="normal">
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vReATMWm-44HwGIC7JQpvNk_g0ABMXmWfuH2kz7rhUftaPDPQVjpLjhhHYaMHpibRncUE-CX5XcqSqo/pubhtml?widget=true&amp;headers=false"></iframe>
                    <a href="#">Download Chart</a>
                </Section>
            </div>
        );
    }
}
