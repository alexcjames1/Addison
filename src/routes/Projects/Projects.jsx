import React, { Component } from 'react';
import {AppWrapper, PurchaseForm, UserHero, Projects} from '../../components';

export default class Project extends Component {
    render() {
        return (
          <AppWrapper>
            <UserHero />
            <Projects />
            <PurchaseForm />
          </AppWrapper>
        );
    }
}
