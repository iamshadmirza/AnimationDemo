
import React, { Component } from "react";
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(1),
    visible: true,
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 1500,
    }).start(({ finished }) => {
      setTimeout(() => {
        if (finished) {
          this.setState({ visible: false });
        } else {
          Animated.spring(this.state.animation, {
            toValue: 1,
          }).start();
        }
      }, 0);
    });
  };

  render() {
    const translateYInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [500, 0],
    });

    const animatedStyles = {
      opacity: this.state.animation,
      transform: [
        {
          translateY: translateYInterpolate,
        },
      ],
    };
    return (
      <View style={styles.container}>
        {this.state.visible &&
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.box, animatedStyles]} />
          </TouchableWithoutFeedback>}
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
  },
});