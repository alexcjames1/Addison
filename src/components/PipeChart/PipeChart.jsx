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
                    <h2 className={style.chartTitle}>Pipe Chart</h2>
                    <iframe className={style.pipeChart} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQlt9LlfRYfU8lrvTb3X64nsvI7nCSgh1SZ_j7okECQknRMEGbGZIyUFvszJJoc-2Mh_1fxGuSh9B7c/pubhtml?widget=true&amp;headers=false"></iframe>
                    <a className={style.downloadButton} href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQlt9LlfRYfU8lrvTb3X64nsvI7nCSgh1SZ_j7okECQknRMEGbGZIyUFvszJJoc-2Mh_1fxGuSh9B7c/pubhtml?widget=true&amp;headers=false" download="Pipe Chart" target="_blank">Download Chart</a>
                </Section>
            </div>
        );
    }
}
