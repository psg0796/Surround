import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Row from'./row';

export default class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.data.map((row,index) => <Row
            data={row}
            key={index}
            contentTypeList={this.props.contentTypeList}
          />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
