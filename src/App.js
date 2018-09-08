import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Orientation from 'react-native-orientation';

import ComicListScreen from './ComicListScreen';
import ComicDetailScreen from './ComicDetailScreen';

const Navigation = createStackNavigator({
  ComicList: {
    screen: ComicListScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Comics',
      }
    }
  },
  ComicDetail: {
    screen: ComicDetailScreen
  }
})

class App extends Component {
  state = {}

  render() {
    Orientation.lockToPortrait()

    return (
      <View style={{ backgroundColor: 'rgb(230, 230, 230)', flex: 1 }}>
        <Navigation />
      </View>
    );
  }
}

export default App;