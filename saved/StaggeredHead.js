import React, { Component } from "react";
import { StyleSheet, View, Animated, Image, TouchableWithoutFeedback, Dimensions, PanResponder } from "react-native";
const imageUrl = 'https://avatars2.githubusercontent.com/u/22999030?s=460&v=4';
export default class animations extends Component {
  state = {
    heads: [
      {
        image: imageUrl,
        animation: new Animated.ValueXY(),
        text: 'Drag me'
      },
      {
        image: imageUrl,
        animation: new Animated.ValueXY(),
      },
      {
        image: imageUrl,
        animation: new Animated.ValueXY(),
      },
      {
        image: imageUrl,
        animation: new Animated.ValueXY(),
      },
    ]
  };

  componentWillMount(){
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponderCapture: (event, gestureState) => true,
      onMoveShouldSetPanResponder: (event, gestureState) => true,
      onPanResponderGrant: (event, gestureState) => {
        this.state.heads.map(({animation}) => {
          animation.extractOffset();
          animation.setValue({ x: 0, y: 0 });
        });
      },
      onPanResponderMove: (event, {dx, dy}) => {
        this.state.heads[0].animation.setValue({
          x: dx,
          y: dy
        });

        const animation = this.state.heads.slice(1).map(({animation}, index) => {
          Animated.sequence([
            Animated.delay(index * 10),
            Animated.spring(animation, {
              toValue: { x: dx, y: dy}
            })
          ]).start();
        })
      }
    })
  }

  render() {
    
    return (
      <View style={styles.container}>
        {this.state.heads.slice(0).reverse().map((item, index, items) => {
            const pan = index === items.length - 1 ? 
            this._panResponder.panHandlers : {};
            return <Animated.Image 
              {...pan}
              key={index}
              style={[styles.head, {
                transform: item.animation.getTranslateTransform()
              }]} 
              source={{uri: item.image }} /> 
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  }
});