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

    state = {
      formName: 'Form Name',
    }


    render() {
      const { formName } = this.state;
      return (
        <View style={styles.createFormContainer}>
          <View style={styles.formNameContainer}>
            <TextInput
              style={styles.formNameInput}
              onChangeText={text => this.setState({ formName: text })}
              value={formName}
            />
          </View>
          <TouchableOpacity>
            <View style={styles.addFieldContainer}>
              <Text style={styles.addFieldText}>ADD FIELD</Text>
            </View>
          </TouchableOpacity>
          <TextInput
            style={styles.formNameInput}
            onChangeText={text => this.setState({ formName: text })}
            value="FIELD NAME"
          />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <View style={styles.saveButtonContainer}>
              <Text>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
}
