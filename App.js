import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingPage from './src/components/landingPage/landingPage';
import CreateFormPage from './src/components/createFormPage/createFormPage';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: LandingPage,
  },
  CreateForm: {
    screen: CreateFormPage,
  },
});

const AppContainer = createAppContainer(AppNavigator);
