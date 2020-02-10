import React, { Component } from 'react';
import DrawerNavigator from './DrawerNavigation';
import { Provider } from "react-redux";
import createStore from "./Store";
export default class App extends Component {
  render() {
    const store = createStore();
    return (
      <Provider store={store}>
        <DrawerNavigator />
      </Provider>

    );
  }
}