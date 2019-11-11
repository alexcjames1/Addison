import React, { Component } from 'react';
import {Heading, Header, AppWrapper, UserHero, FirstChoice, WhoWeAre, PurchaseForm, Team, Footer} from '../../components';

export default class Home extends Component {
    render() {
        return (
          <AppWrapper>
            <UserHero />
            <FirstChoice />
            <PurchaseForm />
            <Team />
          </AppWrapper>
        );
    }
}
