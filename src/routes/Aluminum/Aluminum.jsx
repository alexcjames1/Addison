import React, { Component } from 'react';
import {AppWrapper, PipeChart, PurchaseForm} from '../../components';

export default class Aluminum extends Component {
    render() {
        return (
          <AppWrapper>
              <PipeChart />
              <PurchaseForm />
          </AppWrapper>
        );
    }
}
