import React from 'react'
import { ToolbarAndroid, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default (props) => {
  // Icon.getImageSource('user', 20, 'red').then((source) => this.setState({ userIcon: source }));
  return (
    <View style={styles.toolbarWrapper}>
      <ToolbarAndroid
        title={props.title}
        style={styles.toolbar} />
    </View>
  );
}

const TOOLBAR_HEIGHT = 56;
const styles = StyleSheet.create({
  toolbarWrapper: {
    backgroundColor: '#fff',
    elevation: 4,
    height: TOOLBAR_HEIGHT,
  },
  toolbar: {
    height: TOOLBAR_HEIGHT,
  },
})
