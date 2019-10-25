import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Block from './block';

export default class Row extends Component {
  render() {
    return (
        <View style={styles.container}>
          {this.props.data.map((block,index) => <Block
                index={block.index}
                key={index}
                type={block.type}
                contentTypeList={this.props.contentTypeList}
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
