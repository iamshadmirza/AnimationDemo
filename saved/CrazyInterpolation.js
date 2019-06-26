import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 500
    }).start();
  };

  render() {
    
    const interpolation = this.state.animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 200, 0]
    });

    const opacityInterpolation = interpolation.interpolate({
      inputRange: [0, 200],
      outputRange: [1, .5]
    });

    const zigzagInterpolation= interpolation.interpolate({
        inputRange: [0, 30, 60, 90, 120, 150, 180, 200],
        outputRange: [50, -50, 70, -70, 90, -90, 80, -80]
    });

    const boxStyle = {
      transform: [
        { translateY: interpolation},
        {translateX: zigzagInterpolation}
      ],
      opacity: opacityInterpolation
    }

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