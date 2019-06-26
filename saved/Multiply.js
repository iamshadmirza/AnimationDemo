import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 50,
      duration: 1500,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 200,
      }).start();
    });
  };
  render() {
    const randomValue = new Animated.Value(6);
    const newAnimation = Animated.multiply(this.state.animation, randomValue);
    const animatedStyles={
      transform: [{ translateY: newAnimation }],
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'red'
  }
});