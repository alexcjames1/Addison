import React, { Component } from 'react';
import {Heading, Header, AppWrapper, UserHero, Products, FirstChoice, UserFeatures, WhoWeAre, Team,  HowSnowminerWorks, EasyBeautifulInterface__User, FinalThingsToClick, Footer} from '../../components';

export default class Product extends Component {
    render() {
        return (
          <AppWrapper>
            <UserHero />
            <Products />
          </AppWrapper>
        );
    }
}
