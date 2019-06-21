import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 300
    }).start(() => this.state.animation.setValue(0));
  }
  
  render() {
    const widthHeightInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['20%', '100%']
    });
    const animatedStyle = {
      height: widthHeightInterpolate,
      width: widthHeightInterpolate
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
    borderRadius: 80,
  }
});