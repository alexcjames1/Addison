import React, { Component } from 'react';
import {Heading, Header, AppWrapper, WhoWeAre, Team, UserHero, Footer} from '../../components';

export default class About extends Component {
    render() {
        return (
          <AppWrapper>
            <UserHero />
            <WhoWeAre />
            <Team />
          </AppWrapper>
        );
    }
}
