import React, { Component } from 'react';
import {AppWrapper, TubingChart, PurchaseForm} from '../../components';

export default class Tubing extends Component {
    render() {
        return (
          <AppWrapper>
              <TubingChart />
              <PurchaseForm />
          </AppWrapper>
        );
    }
}
