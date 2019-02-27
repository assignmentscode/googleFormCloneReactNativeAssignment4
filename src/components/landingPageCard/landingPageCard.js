import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './landingPageCard.style';

export default class LandingPageCard extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.formName}>
          <Text style={styles.formNameText}>Code Academy FeedBack 2019</Text>
        </View>
        <View style={styles.creationDetail}>
          <Text style={styles.creationText}>Created On: 27/02/2019</Text>
        </View>
      </View>
    );
  }
}
