import { View, Image, Text } from 'react-native';
import React from 'react';

export default class Avatar extends React.Component {

  static propTypes = {
    image: React.PropTypes.shape({ type: React.PropTypes.oneOf([Image]) }),
    icon: React.PropTypes.string,
    size: React.PropTypes.number,
    color: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    text: React.PropTypes.string,
    borderRadius: React.PropTypes.number,
    borderColor: React.PropTypes.string,
    borderWidth: React.PropTypes.number
  };

  static defaultProps = {
    size: 40,
    color: '#ffffff',
    borderRadius: 40 / 2,
    borderColor: 'rgba(0,0,0,.1)',
    borderWidth: 1
  };

  render() {
    const {
      image,
      icon,
      size,
      color,
      backgroundColor,
      text,
      borderRadius,
      borderColor,
      borderWidth
    } = this.props;

    if (image) {
      return React.cloneElement(image, {
        style: {
          width: size,
          height: size,
          borderRadius: size/2,
          borderColor: borderColor,
          borderWidth: borderWidth
        }
      });
    }

    if (text) {
      const textStyle = { 
        fontSize: size / 2,
        color: color,
       };
      const rootSyle = {
        width: size, 
        height: size, 
        borderRadius: borderRadius, 
        backgroundColor: backgroundColor, 
        alignItems:'center', 
        justifyContent: 'center', 
      };
      return (
        <View style={rootSyle}>
          <Text style={textStyle}>{text}</Text>
        </View>
      );
    }

    return null;
  }
}
