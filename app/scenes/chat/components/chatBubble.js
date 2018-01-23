import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Chatbubble = (props) => {
  const { message, right } = props
  const styles__root = {
    alignSelf: right ? 'flex-end' : 'flex-start',
    marginRight: right ? 0 : 50,
    marginLeft: right ? 50 : 0,
  }
  return (
    <View style={[styles.chatBubble, styles__root]}>
      <Text style={[styles.chatBubble__t]}>{ message }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chatBubble: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 4,
  },
  chatBubble__t: {
    fontSize: 15,
  },
})


export default Chatbubble;
