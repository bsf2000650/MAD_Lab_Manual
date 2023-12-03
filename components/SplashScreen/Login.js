import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView
} from "react-native";
import Background from "../Intent/Background";
import Btn from "../Intent/Btn";
import { darkGreen, green1 } from "../Intent/Constants";
import Field from "../Intent/Field";
import Icon from "react-native-vector-icons/FontAwesome";

const Login = (props) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
    <View style={{ backgroundColor: "#11401b" }}>
      <View style={{ alignItems: "center", width: 360 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginVertical: 20,
          }}
        >
          Login
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 360,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: "#11401b", fontWeight: "bold" }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: "#11401b",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Login to your account
          </Text>

          <View style={styles.container}>
            <Icon
              name="envelope"
              size={15}
              color="#11401b"
              style={styles.icon}
            />
            <TextInput
              placeholder="Email / Username"
              keyboardType="email-address"
              style={{
                borderRadius: 50,
                color: darkGreen,
                paddingHorizontal: 10,
                width: "82%",
                height: "98%",
                backgroundColor: "rgb(220,220, 220)",
                marginVertical: 10,
              }}
              placeholderTextColor={darkGreen}
              accessible={true}
              accessibilityLabel="Email or Username"
            ></TextInput>
          </View>

          <View style={styles.container}>
            <Icon name="lock" size={20} color="#555" style={styles.icon} />
            <TextInput
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              style={{
                borderRadius: 50,
                color: darkGreen,
                paddingHorizontal: 10,
                width: "82%",
                height: "98%",
                backgroundColor: "rgb(220,220, 220)",
                marginVertical: 10,
              }}
              placeholderTextColor={darkGreen}
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 10 }}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Icon
                name={passwordVisible ? "eye-slash" : "eye"}
                size={20}
                color="#555"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              width: "78%",
              paddingRight: 16,
              marginBottom: 50,
            }}
          >
            <Text
              style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
            >
              Forgot Password ?
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor="#11401b"
            btnLabel="Login"
            Press={() => alert("Logged In")}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
    color: "#11401b",
  },
});

export default Login;
