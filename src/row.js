import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Block from './block';

export default class Row extends Component {
  render() {
    return (
        <View style={styles.container}>
          {this.props.data.map((block,index) => <Block
				row={block.row}
				col={block.col}
                key={index}
				type={block.type}
				count={block.count}
                contentRenderer={this.props.contentRenderer}
                onPress={this.props.onPress}
            />)}
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'stretch',
  },
});
