import React, { Component } from 'react';
import {
  View, ScrollView, Image, SafeAreaView,
} from 'react-native';
import styles from './landingPage.style';
import LandingPageCard from '../landingPageCard/landingPageCard';
import plusIcon from '../../assets/plusIcon.png';

const getData = require('../../utilityFunction/getData');

export default class LandingPage extends Component {
  static navigationOptions = {
    title: 'Awesome Forms',
    headerStyle: { backgroundColor: '#3f51b5' },
    headerTitleStyle: { color: 'white', fontWeight: '400' },
  };

  state = {
    formNames: [],
  }

  componentDidMount() {
    getData('http://10.0.2.2:8080/formNames').then(result => this.storeData(result.data));
  }

  storeData = responseObject => this.setState({ formNames: responseObject });

  render() {
    const { formNames } = this.state;
    const formNameCards = formNames.map(formName => (
      <LandingPageCard
        data={formName}
        key={formName.id}
      />
    ));
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.landingPageContainer}>
            <View style={styles.landingPageCards}>
              {formNameCards}
            </View>
            <View style={styles.createFormIconContainer}>
              <Image
                source={plusIcon}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
