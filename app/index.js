import { Navigator, BackAndroid } from 'react-native';
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import NavigatorSingleton from './navigator'
import { Main, Profile, Chat } from 'tindify/app/scenes'

export default class Tindify extends React.Component {
  componentDidMount() {
    NavigatorSingleton.setInstance(this.navigator);
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.navigator.getCurrentRoutes().length > 1) {
       this.navigator.pop();
       return true;
      }
      return false;
    });
  }
  componentWillUnmount() {
  }

  renderScene(route, navigator){
    // Require default expanation
    //https://github.com/Microsoft/TypeScript/issues/2719
    switch (route.name) {
      case 'mainScene':
        return (<Main />);
      case 'profileScene':
        return (<Profile />);
      case 'messageScene':
        return (<Chat />);
      default:
        return (<Main />);
    }
  }

  configureScene(route, routeStack){
    if (route.transition){
      return Navigator.SceneConfigs[route.transition]
    }
    return Navigator.SceneConfigs.PushFromRight //(default)
    // Navigator.SceneConfigs.FloatFromRight
    // Navigator.SceneConfigs.FloatFromLeft
    // Navigator.SceneConfigs.FloatFromBottom
    // Navigator.SceneConfigs.FloatFromBottomAndroid
    // Navigator.SceneConfigs.FadeAndroid
    // Navigator.SceneConfigs.HorizontalSwipeJump
    // Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
    // Navigator.SceneConfigs.VerticalUpSwipeJump
    // Navigator.SceneConfigs.VerticalDownSwipeJump
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{name: 'loading'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={this.configureScene.bind(this)}
          ref={(c) => this.navigator = c }
           />
      </Provider>
    );
  }

}
