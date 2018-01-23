import React from 'react'
import { ScrollView, View, Text, TextInput, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import Toolbar from 'tindify/app/components/UI-elements/toolbar'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ChatBubble from './components/chatBubble.js'

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }

  onSendMessage(){
    var m = this.state.messages.push(this._inputMessage)
    this._input.clear();
    this._inputMessage = "";
    this.setState({
      messages: this.state.messages,
    })
  }

  render() {
    return (
      <View style={styles.root}>
        <Toolbar title="Cristian" />
        <View style={styles.content}>
          <View style={styles.messagesWrap}>
            <ScrollView contentContainerStyle={styles.messages}>
              <ChatBubble message="Hola, que tal??" right={true}/>
              <ChatBubble message="No se si sabes donde está" right={true}/>
              <ChatBubble message="Bien, y tu??" />
              <ChatBubble message="No se a lo que te refieres, no me lo has dicho por escrito asi que no puedo adibinar que quieres... por desgracias para mi" />
              {this.state.messages.map( (message, index) =>(
                <ChatBubble message={message} right={true} key={index}/>
              ))}
            </ScrollView>
          </View>
          <View style={styles.input}>
            <TextInput style={styles.input__i}
                ref={c => this._input = c}
                onChange={ e => this._inputMessage = e.nativeEvent.text }
                placeholder="Escribe un mensaje aquí..."
                underlineColorAndroid="transparent"/>
              <TouchableWithoutFeedback onPress={this.onSendMessage.bind(this)}>
              <Icon name="send" size={25} color="grey" style={{ margin: 10}} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

const INPUT_HEIGHT = 45;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ddd',
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  content: {
    flex: 1,
  },
  messagesWrap: {
    marginBottom: INPUT_HEIGHT,
  },
  messages: {
    justifyContent: 'flex-end',
    padding: 8,
  },
  messageBubble: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 4,
  },
  messageBubble__t: {
    fontSize: 15,
  },
  input: {
    height: INPUT_HEIGHT,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingLeft: 8,
    flexDirection: 'row',
  },
  input__i: {
    borderWidth: 0,
    // backgroundColor: 'red',
    flex: 1,
  }
})
