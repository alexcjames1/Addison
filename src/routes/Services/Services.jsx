import React, { Component } from 'react';
import { AppWrapper, UserHero, Services, PurchaseForm } from '../../components';

export default class Service extends Component {
    render() {
        return (
          <AppWrapper>
             <UserHero />
             <Services />
             <PurchaseForm />
          </AppWrapper>
        );
    }
}
