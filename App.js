import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, PanResponder, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  
  state = {
    animation: new Animated.ValueXY(0),
  };
  componentWillMount(){
    // this._x = 0;
    // this._y = 0;
    // this.state.animation.addListener((value) => {
    //   this._x = value.x
    //   this._y = value.y
    // }); replaced by extractOffset();
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureHandler) => {
        // this.state.animation.setOffset({
        //   x: this._x,
        //   y: this._y
        // });
        // this.state.animation.setValue({
        //   x: 0,
        //   y: 0
        // }); this is exactly what's happening but for simplification it is 
        //     replaced by extractOffset();
        this.state.animation.extractOffset();
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.animation.x,
          dy: this.state.animation.y
        }
      ]),
      onPanResponderRelease: (e, {vx, vy}) => {
        Animated.decay(this.state.animation, {
          velocity:{
            x: vx, 
            y: vy
          },
          deceleration: 0.997,
        }).start();
      }
    })
  }
  render() {
    const animatedStyle={
      transform: this.state.animation.getTranslateTransform()
    }
    return (
      <View style={styles.container}>
          <Animated.View style={[styles.box, animatedStyle]} 
          {...this._panResponder.panHandlers}
          />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  }
});