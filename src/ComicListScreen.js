import React, { Component } from 'react';
import {
  Text, FlatList,
  View,
} from 'react-native';
import ComicItem from './ComicItem';

import { data } from './database.json'

class ComicListScreen extends Component {
  state = {}

  renderItem = ({ item }) => <ComicItem comic={item} />

  render() {
    return (
      <View>
        <FlatList
          //1. data?
          data={data}
          //2. item?
          renderItem={this.renderItem}
          numColumns={2}
        />
      </View>
    );
  }
}

export default ComicListScreen;