import React from 'react';
import { View, StyleSheet } from 'react-native';
import Board from'./board';
import { Container, Header, Content, Badge, Text, Icon } from 'native-base';

const type = ['red', 'blue', 'cornflowerBlue', 'black', 'grey', 'yellow', 'orange', 'green', 'brown'];

function getContent(x) {
	return (
        (content) => <Badge>
            {content}
        </Badge>
    );
}

export default function MainApp() {
	const row = 4, col = 4;
	const playerList = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let board = new Array();
    for (let i = 0; i < row; i++) {
        board.push(new Array());
        for (let j = 0; j < col; j++) {
            board[i].push({row: i, col: j, type: 0});
        }
    }
    
    const contentRenderer = playerList.map(x => getContent(x));

    return (
        <View style={styles.container}>
            <Board
                data={board}
                contentRenderer={contentRenderer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
