import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class PersonalDetailsPage extends Component {
    static navigationOptions = {
      title: 'Personal Details',
      headerStyle: { backgroundColor: '#3f51b5' },
      headerTitleStyle: { color: 'white', fontWeight: '400' },
    };

    render() {
      return (
        <View>
          <Text> PersonalDetailsPage </Text>
        </View>
      );
    }
}
