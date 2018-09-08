import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import ComicItem from './ComicItem';
import ComicListScreen from './ComicListScreen';

import Orientation from 'react-native-orientation';

class App extends Component {
  state = {}

  render() {
    Orientation.lockToPortrait()

    return (
      <View style={{ backgroundColor: 'rgb(230, 230, 230)', flex: 1 }}>
        <ComicListScreen />
      </View>
    );
  }
}

export default App;