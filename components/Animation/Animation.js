import React, { useRef, useEffect } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Animation = () => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 800000, // Adjust the duration as needed
        useNativeDriver: true,
      })
    ).start();
  }, [rotation]);

  const interpolatedRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="rotate"
        easing="linear"
        iterationCount="infinite"
        style={[styles.logo, { transform: [{ rotate: interpolatedRotation }] }]}
        source={require('./uni_logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust the width and height based on your logo size
    height: 200,
    borderRadius:100,
    borderWidth:1,
    borderColor:'black'
  },
});

export default Animation;
