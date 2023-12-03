import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green,green1 } from './Constants';


const Home = (props) => {
  return (
    <Background>
        <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: '#11401b', fontSize: 50,marginTop:70 }}>University of</Text>
      <Text style={{ color: '#11401b', fontSize: 50, marginBottom: 30 }}>Education</Text>
      <Text style={{ color: '#11401b', fontSize: 30, marginBottom: 30 }}>Truth the ultimate value</Text>
      <Btn bgColor={green1} textColor='white' btnLabel="Login"  Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor={green1} btnLabel="SignUp" Press={() => props.navigation.navigate("SignUp")} />
      </View>
    </Background>
  )
}


export default Home
