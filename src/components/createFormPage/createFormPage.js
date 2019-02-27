import React, { Component } from 'react';
import {
  SafeAreaView, TextInput, ScrollView, View, Text, TouchableOpacity,
} from 'react-native';
import styles from './createFormPage.style';

export default class CreateFormPage extends Component {
    static navigationOptions = {
      title: 'Create Form',
      headerStyle: { backgroundColor: '#3f51b5' },
      headerTitleStyle: { color: 'white', fontWeight: '400' },
    };

    render() {
      return (
        <View style={styles.createFormContainer}>
          <View style={styles.formNameContainer}>
            <Text>FORM NAME</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.addFieldContainer}>
              <Text style={styles.addFieldText}>ADD FIELD</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.saveButtonContainer}>
              <Text>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
}
