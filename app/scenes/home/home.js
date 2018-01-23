import React from 'React'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import SwipeCards from 'react-native-swipe-cards'
// import Profile from './profile.jsx'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Toolbar from 'tindify/app/components/UI-elements/toolbar'
import Navigator from 'tindify/app/navigator'

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [{
        name: "Cristian",
        age: 26,
        image: "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/15109531_1152552194781268_2123277143305021624_n.jpg?oh=e36d6b04ef6803ed298cbc071aa213c1&oe=58F1BE96"
      }]
    }
  }
  render() {
    return (
      <View style={styles.root}>
        {/*}<View style={styles.toolbar}>
          <Icon name="message" size={30} color="grey" style={{ margin: 10}} />
        </View>*/}
        <View style={styles.cardsWrapper}>
          <SwipeCards
            cards={this.state.cards}
            loop={true}
            renderCard={cardData => <Card {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}
            showYup={true}
            showNope={true}
            handleYup={() => {}}
            handleNope={() => {}}
            cardRemoved={this.cardRemoved} />
        </View>
        <View style={styles.buttonWrapper}>
          <ActionButton color="#e84a4a" size={60} icon={
              <Icon name="close" size={35} color="#fff" style={{ margin: 12}} />
            } />
          <ActionButton color="#25b9fd" size={50} icon={
              <Icon name="grade" size={30} color="#fff" style={{ margin: 10}} />
            } />
          <ActionButton color="#5ed9be" size={60} icon={
              <Icon name="favorite" size={35} color="#fff" style={{ margin: 12}} />
            } />
        </View>
      </View>
    );
  }
}



const Card = (props) => {
  const onPressCard = () => {
     Navigator.getInstance().push({name: 'profileScene', transition: 'FloatFromBottomAndroid'});
  }
  return (
    <TouchableWithoutFeedback onPress={onPressCard}>
      <View style={styles.card}>
         <Image style={styles.card__image} source={{uri: props.image}} />
         <View style={styles.card__t_w}>
           <Text style={styles.card__name}>
             { props.name },
             <Text style={styles.card__age}> { props.age }</Text>
           </Text>
         </View>
       </View>
    </TouchableWithoutFeedback>
  )
}

const NoMoreCards = () => {
  return (
    <View style={styles.noMoreCards}>
      <Text>No more cards</Text>
    </View>
  )
}

const ActionButton = (props) => {
  const { color, size } = props;
  const buttonStyles = StyleSheet.create({
    button: {
      backgroundColor: color,
      borderRadius: size / 2,
      elevation: 3,
      height: size,
      margin: 8,
      width: size,
    }
  })
  return (
    <View style={buttonStyles.button}>
      {props.icon}
    </View>
  )
}





var dWidth = Dimensions.get('window').width; //full width
var dHeight = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  cardsWrapper: {
    // height: dHeight - (100),
    flex:1
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#eee',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
    alignItems: 'stretch',
    // width: dWidth - (16*2),
    flex:1,
    marginBottom: 90,
    marginTop: 16,
  },
  card__image: {
    flex:1,
    width: dWidth - (16*2),
    // height: dWidth - (16*2),
  },
  card__t_w: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  card__name:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  card__age: {
    fontWeight: 'normal',
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileWrapper: {

  },
})





let Cardd = React.createClass({
  render() {
    return (
      <View style={[styless.card, {backgroundColor: this.props.backgroundColor}]}>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
})

const Cards = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
]

 React.createClass({
  getInitialState() {
    return {
      cards: Cards
    }
  },
  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  },
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  },
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}

        renderCard={(cardData) => <Cardd {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    )
  }
})

const styless = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  }
})
