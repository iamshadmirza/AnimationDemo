import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start();
  }
  
  render() {
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255, 99, 71)', 'rgb(99, 71, 255)']
    });
    const boxStyles = {
      backgroundColor: boxInterpolation
    }
    const textInterpolation = this.state.animation.interpolate({
      inputRange: [0,1],
      outputRange: ['rgb(99, 71, 255)', 'rgb(255, 99, 71)']
    });
    const textStyles = {
      color: textInterpolation
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, boxStyles]}>
          <Animated.Text style={textStyles}> This is a Text </Animated.Text>
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
    aspectRatio: 1
  }
});