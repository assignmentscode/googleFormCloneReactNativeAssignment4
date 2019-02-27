import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingPage from './src/components/landingPage/landingPage';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: LandingPage,
  },
});

const AppContainer = createAppContainer(AppNavigator);
