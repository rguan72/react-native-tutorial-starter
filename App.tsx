import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from "react-native";

class Square extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.square}>{/* TODO */}</TouchableOpacity>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = "Next player: X";

    return (
      <View>
        <View style={styles.status}>
          <Text>{status}</Text>
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </View>
        <View style={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </View>
      </View>
    );
  }
}

export default class Game extends React.Component {
  render() {
    return (
      <View style={styles.game}>
        <View style={styles.gameBoard}>
          <Board />
        </View>
        <View style={styles.gameInfo}>
          <View>{/* status */}</View>
          <FlatList>{/* TODO */}</FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  square: {
    background: "#fff",
    borderWidth: 1,
    float: "left",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 34,
    height: 34,
    marginRight: -1,
    marginTop: -1,
    padding: 0,
    textAlign: "center",
    width: 34
  },
  status: {
    marginBottom: 10
  },
  boardRow: {
    flexDirection: "row"
  },
  game: {
    flexDirection: "row"
  },
  gameInfo: {
    marginLeft: 20
  },
  gameBoard: {
    flexDirection: "row"
  }
});
