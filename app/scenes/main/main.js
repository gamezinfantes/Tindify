import React from 'react'
import { ViewPagerAndroid, View, Text, StyleSheet } from 'react-native'
import Home from 'tindify/app/scenes/home/home'
import Messages from 'tindify/app/scenes/messages/messages'
import Toolbar from 'tindify/app/components/UI-elements/toolbar'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.root}>
        <Toolbar title="Tindify" />
        <ViewPagerAndroid style={styles.content}>
          <View><Home /></View>
          <View><Messages /></View>
        </ViewPagerAndroid>
      </View>
    )
  }
}


const MESSAGES = [{}, {}, {}];

const styles = StyleSheet.create({
  root:{
    flex: 1,
  },
  content:{
    flex: 1,
  },
})
