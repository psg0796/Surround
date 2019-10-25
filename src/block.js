import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index,
      type: this.props.type
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.contentTypeList[this.state.type]}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
