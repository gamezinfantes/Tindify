import React from 'React'
import { Image, ListView, ScrollView, StyleSheet, Text, TouchableNativeFeedback, ToolbarAndroid, View } from 'react-native'
import { connect } from 'react-redux'
import Avatar from 'tindify/app/components/UI-elements/avatar'
import ListItem from 'tindify/app/components/UI-elements/listItem'
import Navigator from 'tindify/app/navigator'

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Messages extends React.Component {

  eachPic(match) {
    return (
      <View style={styles.matches}>
        <Match image={match.picture} firstName={match.name.first} onClick={this.onClickMatch} />
      </View>
    )
  }

  onPressMessage() {
    Navigator.getInstance().push({name: 'messageScene'})
  }

  eachMessage(message) {
    const avatar = (
      <Avatar image={
        <Image source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg' }} />
      } />);
    return (
      <TouchableNativeFeedback
        delayPressIn={50}
        onPress={this.onPressMessage.bind(this)}
        background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.26)')}>
        <View style={styles.listItem}>
          <View style={styles.listItem__avatar}>{avatar}</View>
          <Text style={styles.listItem__primaryText}>Cristian</Text>
          <Text style={styles.listItem__secondaryText} numberOfLines={2}>
            Hola soy un mensaje
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }

  renderMatches() {
    const matches = ds.cloneWithRows(this.props.matches);
    return (
      <View>
        <View style={styles.posible}>
          <Text style={styles.posible__text}>
            Posibles parejas
          </Text>
        </View>
        <ListView
          horizontal={true}
          showsHorizontalScrollIndicator = {false}
          dataSource={matches}
          pageSize = {5}
          renderRow={(rowData) =>this.eachPic(rowData)}
        />
        <View style={styles.posible}>
          <Text style={styles.posible__text}>
            Mensajes
          </Text>
        </View>
      </View>
    )
  }

  render() {
    const messages = ds.cloneWithRows(this.props.messages);
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <ListView
            horizontal={false}
            scrollEnabled = {true}
            showsHorizontalScrollIndicator = {false}
            dataSource={messages}
            pageSize = {5}
            renderRow={(rowData) =>this.eachMessage(rowData)}
            renderHeader={this.renderMatches.bind(this)}
          />
        </View>
      </View>
    )
  }
}

const Match = (props) => {
  const image = "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/15109531_1152552194781268_2123277143305021624_n.jpg?oh=e36d6b04ef6803ed298cbc071aa213c1&oe=58F1BE96";

  return (
    <View style={styles.match} >
      <Avatar size={70} image={<Image source={{ uri: props.image }} />} />
      <View>
        <Text style={styles.match__name}>{ props.firstName }</Text>
      </View>
    </View>
  )
}

const MATCH_MARGIN = 6;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    flex: 1,
  },
  matches: {
    flexDirection: 'row',
    marginHorizontal: MATCH_MARGIN,
    marginVertical: MATCH_MARGIN*2,
  },
  match: {
    marginHorizontal: MATCH_MARGIN,
  },
  match__name:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  posible: {
    marginHorizontal: 12,
    marginVertical: 6,
  },
  posible__text: {
    fontWeight: 'bold',
  },


  listItem:{
    flex: 1,
    padding: 16,
    paddingLeft: 72,
  },
  listItem__avatar: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  listItem__primaryText: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  listItem__secondaryText: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
  },

});


export default connect(
  (state) => ({
    messages: state.messages,
    matches: state.matches,
  })
)(Messages);
