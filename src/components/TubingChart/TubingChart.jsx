import React, {Component} from 'react';
import style from './TubingChart.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class TubingChart extends Component {
    render() {
        return(
            <div className={style.products}>
                <Section className={style.chartContainer} size="normal">
                    <h2 className={style.chartTitle}>Tubing Chart</h2>
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vReATMWm-44HwGIC7JQpvNk_g0ABMXmWfuH2kz7rhUftaPDPQVjpLjhhHYaMHpibRncUE-CX5XcqSqo/pubhtml?widget=true&amp;headers=false" className={style.tubeChart}></iframe>
                    <a className={style.downloadButton} href="https://docs.google.com/spreadsheets/d/e/2PACX-1vReATMWm-44HwGIC7JQpvNk_g0ABMXmWfuH2kz7rhUftaPDPQVjpLjhhHYaMHpibRncUE-CX5XcqSqo/pubhtml?widget=true&amp;headers=false" download="Tubing Chart" target="_blank">Download Chart</a>
                </Section>
            </div>
        );
    }
}
