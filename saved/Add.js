import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1500,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 200,
      }).start();
    });
  };
  render() {
    const randomValue = new Animated.Value(50);
    // const randomValue = 50;
    const newAnimation = Animated.add(this.state.animation, randomValue);
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  }
});