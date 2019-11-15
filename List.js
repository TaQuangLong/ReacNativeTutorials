import React, {Component} from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'

class List extends Component {
  state = {
    names: [
      {
        id: 0,
        name: "Tuan"
      },
      {
        id: 1,
        name: "Hieu"
      },
      {
        id: 2,
        name: "Long"
      },
      {
        id: 3,
        name: "Hai"
      }
    ]
  };
  alearItemName = item => {
    alert(item.name);
  };
  render() {
    return (
      <View>
        {this.state.names.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => this.alearItemName(item)}
          >
            <Text style={stylename.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default List

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center'
    },
    text: {
        color: '#4f603c'
    }
})

const stylename = StyleSheet.create({
    text: {
        color: 'red'
    }
})