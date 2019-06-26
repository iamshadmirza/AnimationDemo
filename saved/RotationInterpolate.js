import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1500,
      }).start();
  };

  render() {
    const xInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1], 
      outputRange: ['0deg', '360deg']
    });

    const yInterpolate = this.state.animation.interpolate({
      inputRange: [0, 0.5, 1], 
      outputRange: ['0deg', '0deg', '180deg']
    })

    const animatedStyles = {
      transform: [
        { rotateX: xInterpolate },
        { rotateY: yInterpolate}
        ],
    };
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