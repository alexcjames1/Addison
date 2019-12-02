import React, { Component } from 'react';
import {Heading, Header, AppWrapper, UserHero, Products, FirstChoice, WhoWeAre, Team, PurchaseForm, Footer} from '../../components';

export default class Product extends Component {
    render() {
        return (
          <AppWrapper>
            <UserHero />
            <Products />
            <PurchaseForm />
          </AppWrapper>
        );
    }
}
