import React, { Component } from 'react';
import {Heading, Header, AppWrapper, DriverHero, DriverFeatures, MarketEase, LowRiskHighReturn, EasyBeautifulInterface, FinalThingsToClick, Footer} from '../../components';

export default class Driver extends Component {
    render() {
        return (
          <AppWrapper>
            <DriverHero />
            <DriverFeatures />
            <LowRiskHighReturn />
            <MarketEase />
            <EasyBeautifulInterface />
            <FinalThingsToClick />
          </AppWrapper>
        );
    }
}