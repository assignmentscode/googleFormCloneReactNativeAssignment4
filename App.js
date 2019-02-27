import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingPage from './src/components/landingPage/landingPage';
import CreateFormPage from './src/components/createFormPage/createFormPage';
import PersonalDetailsPage from './src/components/personalDetails/personalDetailsPage';

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
  PersonalDetails: {
    screen: PersonalDetailsPage,
  },
});

const AppContainer = createAppContainer(AppNavigator);
