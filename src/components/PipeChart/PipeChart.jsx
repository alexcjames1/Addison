import React, {Component} from 'react';
import style from './PipeChart.module.scss';
import {MediaComponent} from '../';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class PipeChart extends Component {
    render() {
        return(
            <div className={style.products}>
                <Section className={style.chartContainer} size="normal">
                    <iframe className={style.pipeChart} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vReATMWm-44HwGIC7JQpvNk_g0ABMXmWfuH2kz7rhUftaPDPQVjpLjhhHYaMHpibRncUE-CX5XcqSqo/pubhtml?widget=true&amp;headers=false"></iframe>
                    <a className={style.downloadButton} href="#">Download Chart</a>
                </Section>
            </div>
        );
    }
}
