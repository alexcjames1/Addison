import React, { Component } from 'react';
import {Heading, Header, AppWrapper, UserHero, UserFeatures, ConvenienceIsPriority, HowSnowminerWorks, EasyBeautifulInterface__User, FinalThingsToClick, Footer} from '../../components';

export default class Landing extends Component {
    render() {
        return (
          <AppWrapper>
            <UserHero />
            <ConvenienceIsPriority />
            <UserFeatures />
            <HowSnowminerWorks />
            <EasyBeautifulInterface__User />
            <FinalThingsToClick />
          </AppWrapper>
        );
    }
}
