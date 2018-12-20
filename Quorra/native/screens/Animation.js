import React, { Component } from 'react'
import LottieView from 'lottie-react-native';

export default class Animation extends Component {
  render() {
    return (
        <LottieView
        source={require('./../assets/lotte/logo.json')}
        autoPlay
        loop
      />
    )
  }
}
