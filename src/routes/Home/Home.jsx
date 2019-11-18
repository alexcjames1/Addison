import React, { Component } from 'react';
import {AppWrapper, UserHero, FirstChoice, PurchaseForm} from '../../components';

export default class Home extends Component {
    render() {
        return (
          <AppWrapper>
            <UserHero />
            <FirstChoice />
            <PurchaseForm />
          </AppWrapper>
        );
    }
}
