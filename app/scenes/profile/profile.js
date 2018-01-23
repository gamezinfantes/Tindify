import React from 'React'
import { Dimensions, ScrollView, StyleSheet, Text, View, ViewPagerAndroid, Image } from 'react-native'
import ImageSlider from 'react-native-image-slider';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryPosition: 2,
      galleryImages: [
        { uri: "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/15109531_1152552194781268_2123277143305021624_n.jpg?oh=e36d6b04ef6803ed298cbc071aa213c1&oe=58F1BE96", key: 'awer334940' },
        { uri: `http://placeimg.com/640/480/any`, key: '9ir334' },
        { uri: "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/15109531_1152552194781268_2123277143305021624_n.jpg?oh=e36d6b04ef6803ed298cbc071aa213c1&oe=58F1BE96", key: 'repp04jj3Ke' },
        { uri: `http://placeimg.com/640/480/any`, key: 'rec43dawe' },
      ],
      username: "Cristian",
      age: 26,
      distance: 7,
      description: "¿Que se suele decir por aqui? ",
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ViewPagerAndroid style={[styles.sliderWrapper]}>
          { this.state.galleryImages.map((image, i) => (
            <View key={image.key}>
              <Image source={{uri: image.uri}} style={{flex:1}} key={image.key} />
            </View>
          ))}
        </ViewPagerAndroid>
        <View style={styles.info}>
          <Text>
            <Text style={styles.name__t}>{ this.state.username }, </Text>
            <Text style={styles.age__t}>{ this.state.age }</Text>
          </Text>
          <Text style={styles.distance__t}>A { this.state.distance } Km de distancia</Text>
          <Text style={styles.description__t}>{ this.state.description }</Text>
        </View>
      </View>
    )
  }
}

var dWidth = Dimensions.get('window').width; //full width
var dHeight = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  sliderWrapper: {
    height: dHeight / 1.7,
  },
  info: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  name__t: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  age__t: {
    fontSize: 20,
  },
  distance__t: {
    fontSize: 12
  },
  description__t: {
    fontSize: 15,
    paddingTop: 8,
  },
})
