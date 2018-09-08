import React, { Component } from 'react';
import {
  Text, Image, Dimensions,
  View,
} from 'react-native';

class AutoScaleImage extends Component {
  state = {
    fixedW: Dimensions.get('window').width,
    fixedH: 0,
  }

  render() {
    Image.getSize(this.props.uriImage,
      (realW, realH) => this.setState(
        { fixedH: this.state.fixedW * realH / realW }
      ))

    return (
      <Image style={{
        width: this.state.fixedW,
        height: this.state.fixedH
      }}
        source={{ uri: this.props.uriImage }} />
    );
  }
}

export default AutoScaleImage;