import React, { Component } from 'react';
import {Heading, Header, AppWrapper, UserHero, Products, FirstChoice, WhoWeAre, Team, Footer} from '../../components';

export default class Landing extends Component {
    render() {
        return (
          <AppWrapper>
            <UserHero />
            <Products />
          </AppWrapper>
        );
    }
}
