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

  onPress = (block) => {

	let data = this.state.data;
	data[block.row][block.col].type = 1;

	this.setState({
		data: data
	});
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.data.map((row,index) => <Row
            data={row}
            key={index}
            contentRenderer={this.props.contentRenderer}
            onPress={this.onPress}
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
