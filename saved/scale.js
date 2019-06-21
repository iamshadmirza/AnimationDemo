import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback, Easing } from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(1),
  };
  startAnimation = () => {
    Animated.spring(this.state.animation, {
      toValue: 2,
      duration: 500,
      friction: 5,
      tension: 150
    }).start(() => this.state.animation.setValue(1));
  }
  
  render() {
    const animatedStyle = {
      transform: [
        {
          scale: this.state.animation
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