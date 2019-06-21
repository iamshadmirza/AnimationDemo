import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback, Easing } from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 220,
      duration: 500,
      // easing: Easing.back(5),
      // easing: Easing.bounce,
      // easing: Easing.elastic(5),
      easing: Easing.bezier(0.5, 1, 0.86, 0.23),

    }).start();
  }
  
  render() {
    const animatedStyle = {
      transform: [
        {
          translateY: this.state.animation
        }
      ]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]}>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "tomato",
    height: 150,
    aspectRatio: 1,
  }
});