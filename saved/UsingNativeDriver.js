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
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      let i = 0;
      while(i < 500000000){
        i++;
      }
    }, 500); //this will block the JavaScript thread
  };

  render() {

    const boxStyle = {
      transform: [
        { translateY: this.state.animation}
      ],
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