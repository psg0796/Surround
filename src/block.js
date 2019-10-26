import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  row: this.props.row,
	  col: this.props.col,
      type: this.props.type
    }
  }

  componentWillReceiveProps = (nextProps) => {
	  if(nextProps.type !== this.state.type) {
		  this.setState({
			  type: nextProps.type
		  })
	  }
  }
  onClick = () => {
    this.props.onPress(this.state);
  }

  render() {
    return (
      <View style={styles.container} onPress={this.onClick}>
		  <TouchableOpacity onPress={this.onClick}>
			  {this.props.contentRenderer[this.state.type](<Text>2</Text>)}
		  </TouchableOpacity>
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
