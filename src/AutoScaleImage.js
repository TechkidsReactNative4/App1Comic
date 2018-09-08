import React, { Component } from 'react';
import {
  Text, Image,
  View,
} from 'react-native';

class AutoScaleImage extends Component {
  state = {}
  render() {
    Image.getSize(this.props.uriImage,
      (realW, realH) => console.log(`realW: ${realW}, realH: ${realH}`))

    return (
      <View></View>
    );
  }
}

export default AutoScaleImage;