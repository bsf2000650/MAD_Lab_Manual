import React, { useState } from 'react'
import { TextInput, View,Text,TouchableOpacity,StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const Calculator = () => {
    const buttons = ['7','8','9','/','4','5','6','*','1','2','3','-','0','C','=','+'];
    const [input,setInput] = useState('');
    const [result,setResult] = useState('');

    const onButtonPress = (value) => {
        if(value === '='){
            try{
                setResult(eval(input))
            } catch(error){
                setResult('error')
            }
        } else if (value === 'C'){
            setInput('');
            setResult('');
        } else {
            setInput(input + value);
        }
    }

  return (
    <>
    <LinearGradient
      colors={['#4c669f', '#3b4590', '#192f6a']}
      style={styles.container}
    >
    <View style={styles.container}>
    <Text style={styles.header}>Calculator App </Text>
    <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
    </View>
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.inputText}
            value={input}
            onChangeText={setInput}
            keyboardType='numeric'
        />
        <View style={styles.buttonContainer}>
            {
                buttons.map((item,index)=>{
                    return(
                        <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={()=>onButtonPress(item)}
                        >
                            <Text style={styles.buttonText}>{item}</Text>
                        </TouchableOpacity>
                        
                    )
                })
            }
        </View>
    </View>
    </View>
    </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'#363030',
      },
      header : {
        fontSize:50,
        alignItems:'center',
        justifyContent:'center',
        color:'white',
        fontWeight:'bold',
        paddingLeft:10,
      },
    resultContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
    },
    resultText: {
        fontSize: 40,
        width: '95%',
        height: '30%',
        marginRight: 10,
        borderRadius: 20,
        textAlign: 'right',
        textAlignVertical: 'bottom',
        backgroundColor: '#fff', // Your creative background color
        color: '#000', // Text color
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5, // Android shadow,
        paddingRight:10,
        // marginTop:150

      },
      inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end', 
    },
    inputText:{
        fontSize: 40,
        width: '95%',
        height: '20%',
        marginRight: 10,
        borderRadius: 20,
        textAlign: 'right',
        textAlignVertical: 'bottom',
        backgroundColor: '#fff', // Your creative background color
        color: '#000', // Text color
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5, // Android shadow,
        paddingRight:10,
        marginBottom:20,
    },
    buttonContainer:{
        height:'90%',
        flexDirection:'row',
        flexWrap:'wrap',
        marginLeft:8
    },
    button: {
        fontSize: 24,
        width: '20%',
        marginRight:17,
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 8, // This is for Android
        marginBottom: 5,
        // Simulated gradient for 3D effect
        backgroundGradient: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 50,
          zIndex: -1,
          backgroundColor: 'rgba(255, 255, 255, 0)',
          backgroundImage: 'linear-gradient(45deg, #fff, #e0e0e0)',
        },
      },
      
    buttonText:{
        fontSize:24
    }

})

export default Calculator
