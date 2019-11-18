import React, { Component } from 'react';
import {AppWrapper, WhoWeAre, UserHero} from '../../components';

export default class About extends Component {
    render() {
        return (
          <AppWrapper>
            <UserHero />
            <WhoWeAre />
          </AppWrapper>
        );
    }
}
