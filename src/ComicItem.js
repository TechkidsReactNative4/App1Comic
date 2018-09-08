import React, { Component } from 'react';
import {
  Text, StyleSheet, Dimensions,
  View, Image
} from 'react-native';

class ComicItem extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: this.props.comic.photos[0] }} />
        <Text style={styles.text}
          numberOfLines={2}>{this.props.comic.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 210,
    width: Dimensions.get('window').width / 2,
    padding: 10
  },
  image: {
    height: 150
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  }
})

export default ComicItem;