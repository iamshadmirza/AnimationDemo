import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  
  state = {
    colorAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(0)
  };
  startAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.colorAnimation, {
        toValue: 1,
        duration: 500,
      }),
      Animated.timing(this.state.scaleAnimation, {
        toValue: 2,
        duration: 300
      }),
      Animated.delay(1500),
      Animated.parallel([
        Animated.timing(this.state.colorAnimation, {
          toValue: 0,
          duration: 500
        }),
        Animated.timing(this.state.scaleAnimation, {
          toValue: 1,
          duration: 300
        }).start()
      ])
    ]).start();
  };

  render() {
    
    const bgColorInterpolate = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
    });

    const boxStyle = {
      backgroundColor: bgColorInterpolate,
      transform: [{ scale: this.state.scaleAnimation }],
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, boxStyle]} />
        </TouchableWithoutFeedback>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'red'
  }
});