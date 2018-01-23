import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import React from 'react'

class ListItem extends React.Component {

  onPressListItem(){
    this.props.onPress && this.props.onPress();
  }

  render() {
    const hasCheckbox = this.props.rightSwitch != 'undefinded'
    return (
      <TouchableNativeFeedback
        delayPressIn={50}
        onPress={this.onPressListItem.bind(this)}
        background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.26)')}>
        <View style={styles.root}>
          <Text style={styles.primaryText}>
            {this.props.primaryText}
          </Text>
          <Text style={styles.secondaryText}>
            {this.props.secondaryText}
          </Text>
          { this.props.rightSwitch && (
              <View style={styles.rightSwitch}>
                {this.props.rightSwitch}
              </View>
          )}
        </View>
      </TouchableNativeFeedback>
    );
  }
}


const listPadding = 16;
const styles = StyleSheet.create({
  root:{
    padding: listPadding,
  },
  primaryText: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  secondaryText: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  rightSwitch: {
    position: 'absolute',
    right: listPadding,
    top: listPadding,
  }
});

export default ListItem
