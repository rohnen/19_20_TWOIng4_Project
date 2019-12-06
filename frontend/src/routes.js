import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Widget from './Widget';
import Widget1 from './Widget1';
import Dashwidget from './Dashwidget';
import Form from './formulaire';

export default class routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/Dashwidget" exact component={Dashwidget} />
        <Route path="/form" exact component={Form} />
      </Switch>
    );
  }
}