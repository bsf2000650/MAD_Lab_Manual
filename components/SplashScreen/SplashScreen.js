import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Login from './Login';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); 
  }, []); 

  return (
    <View style={styles.container}>
      <Image source={require('../Intent/images/uni_logo.png')} style={styles.logo} />
      {/* <Image source={require('../Intent/images/b5.jpg')} style={styles.logo} /> */}
      <Text style={styles.text}>Welcome to University of Education</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    color:'#11401b'
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius:100
  },
});

export default SplashScreen;
