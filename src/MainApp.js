import React from 'react';
import { View, StyleSheet } from 'react-native';
import Board from'./board';
import { Badge, Text } from 'native-base';
import { MAX_ROW, MAX_COL} from './utility';

const badgeColor = ['white', 'red', 'blue', 'green', 'orange', 'grey', 'brown'];

function getContent(x) {
	return (
        (block) => {
        return (<Badge style={{ backgroundColor: badgeColor[x] }}>
            <Text>{block.count}</Text>
        </Badge>);}
    );
}

export default function MainApp() {
	const playerList = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let board = new Array();
    for (let i = 0; i < MAX_ROW; i++) {
        board.push(new Array());
        for (let j = 0; j < MAX_COL; j++) {
            board[i].push({row: i, col: j, count: 0, type: 0});
        }
    }
    
    const contentRenderer = playerList.map(x => getContent(x));
    const playerCount = 2;

    return (
        <View style={styles.container}>
            <Board
                data={board}
                contentRenderer={contentRenderer}
                playerCount={playerCount}
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
