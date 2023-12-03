
import * as React from 'react';
import { View, Text,StyleSheet,SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './components/Calculator/Calculator';
// import SignUp from './components/Data Passing/SignUp';
import SplashScreen from './components/SplashScreen/SplashScreen';
// import Login from './components/SplashScreen/Login';
import Fragment from './components/Fragments/Fragment';
import Animation from './components/Animation/Animation';
import SoundMode from './components/SoundMode/SoundMode';
import Departments from './components/List/Departments';
import List from './components/List/List';
import Home from './components/Intent/Home';
import SignUp from './components/Intent/SignUp';
import Login from './components/Intent/Login';
import SharedPreferences from './components/SharedPreferences/SharePreferences';
import SmsSender from './components/SmsSender/SmsSender'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    {/* <SafeAreaView> */}
      <StatusBar style='auto' />

      {/* Calculator */}
      <Calculator />

      {/* Data Passing */}
      {/* <SignUp
       firstName='Asad Ullah'
       lastName='Khan'
       email='bsf2000650@ue.edu.pk'
       contactNumber='1234567890'
       password='12345bsf'
       confirmPassword='12345bsf'
       /> */}

       {/* Intent  */}
       {/* <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer> */}

    {/* SplashScreen */}
    {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
     </NavigationContainer> */}

    {/* Fragment */}
    {/* <Fragment /> */}

    {/* Animation */}
    {/* <Animation /> */}

    {/*Ringer Mode  */}
     {/* <SoundMode /> */}

     {/* List */}
     {/* <NavigationContainer>
      <Stack.Navigator initialRouteName="Departments">
        <Stack.Screen name="Departments" component={Departments} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer> */}

    {/* Shared Preferences */}
    {/* <SharedPreferences /> */}

    {/* Sms Sender */}
    {/* <SmsSender /> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 25 : 0,
  },
});

