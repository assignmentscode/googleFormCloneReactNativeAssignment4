import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './landingPageCard.style';

export default class LandingPageCard extends Component {
  render() {
    const { data } = this.props;
    const { formName = 'Feedback', createdAt = '10/02/2017' } = data;
    return (
      <View style={styles.card}>
        <View style={styles.formName}>
          <Text style={styles.formNameText}>{formName}</Text>
        </View>
        <View style={styles.creationDetail}>
          <Text style={styles.creationText}>
Created On:
            {' '}
            {createdAt}
          </Text>
        </View>
      </View>
    );
  }
}
LandingPageCard.propTypes = {
  data: PropTypes.object.isRequired,
};
