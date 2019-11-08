import React, { Component } from 'react';
import {Heading, Header, AppWrapper, UserHero, FirstChoice, UserFeatures, WhoWeAre, Team,  HowSnowminerWorks, EasyBeautifulInterface__User, FinalThingsToClick, Footer} from '../../components';

export default class Home extends Component {
    render() {
        return (
          <AppWrapper>
            <UserHero />
            <FirstChoice />
          </AppWrapper>
        );
    }
}
