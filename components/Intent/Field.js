import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {darkGreen} from './Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native-animatable';

const Field = (props) => {
  return (
   <>
    <View style={styles.container}>
    <Icon name="user" size={20} color="#555" style={styles.icon} />
    <TextInput
      {...props}
      style={{borderRadius: 50, color: darkGreen, paddingHorizontal: 10, 
        width: '82%',height:'98%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10,}}
      placeholderTextColor={darkGreen}></TextInput>
    </View>
      </>
  );
};

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15
    },
    icon: {
        marginRight: 10,
        color:'#11401b'
      },
})

export default Field;