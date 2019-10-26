import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Row from'./row';
import { Queue, Pair, isValid } from './utility';

export default class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
		data: this.props.data,
		playerCount: this.props.playerCount,
		activePlayer: 1,
    }
  }

	onPress = (block) => {
		if((block.type === this.state.activePlayer) || (block.type === 0)) {
			let data = this.state.data;
			const bfs = new Queue();
			bfs.enqueue(new Pair(block.row, block.col));
	
			while(!bfs.isEmpty()) {
				const front = bfs.peek();
				data[front._1][front._2].count++;
				data[front._1][front._2].type = this.state.activePlayer;
				bfs.dequeue();
				if(data[front._1][front._2].count === 10) {
					data[front._1][front._2].count = 1;
					for(let dx = -1; dx <= 1; dx++) {
						for(let dy = -1; dy <= 1; dy++) {
							if(dx === 0 && dy === 0) {
								continue;
							}
							if(isValid(front._1 + dx, front._2 + dy)) {
								bfs.enqueue(new Pair(front._1 + dx, front._2 + dy));
							}
						}
					}
				}
			}
	
			let nextTurn = this.state.activePlayer + 1;
			nextTurn = nextTurn > this.state.playerCount ? 1 : nextTurn;
			this.setState({
				data: data,
				activePlayer: nextTurn
			});
		} else {
			return;
		}
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
