import React from 'react';
import {
  Text,
  View
} from 'react-native';
import axios from 'axios';
import Animation from './Animation'

export default class SettingsScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Lottie',
  };

  fetchSetting(){

  }

  render() {
    return (
        <Animation />
    )
  }
}
