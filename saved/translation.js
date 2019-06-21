import React, { Component } from "react";
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(0),
    animationY: new Animated.Value(0)
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -300,
      duration: 1500
    }).start(() => {
      this.state.animation.setValue(0);
    });
    Animated.timing(this.state.animationY, {
      toValue: -300,
      duration: 1500
    }).start(() => {
      this.state.animationY.setValue(0);
    });
  }
  
  render() {
    const animatedStyles = {
      transform: [
        { translateY: this.state.animationY },
        {translateX: this.state.animation }
      ]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
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
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  }
});