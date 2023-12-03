import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  AsyncStorage,
} from "react-native";
import Background from "../Intent/Background";
import Btn from "../Intent/Btn";
import { darkGreen } from '../Intent/Constants'
import Field from "../Intent/Field";
import Icon from "react-native-vector-icons/FontAwesome";

const SharedPreferences = (props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Load stored email on component mount
    loadStoredEmail();
  }, []);

  const loadStoredEmail = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem("userEmail");
      if (storedEmail !== null) {
        console.warn("Loaded email from AsyncStorage:", storedEmail);
        setEmail(storedEmail);
      }
    } catch (error) {
      console.error("Error loading email from AsyncStorage:", error);
    }
  };

  const handleLogin = async () => {
    // Log email and password to the console
    console.warn("Entered email:", email);
    console.warn("Entered password:", password);

    // Save user data to AsyncStorage
    try {
      await AsyncStorage.setItem("userEmail", email);
    } catch (error) {
      console.error("Error saving email to AsyncStorage:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
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
            <Text
              style={{
                fontSize: 40,
                color: "#11401b",
                fontWeight: "bold",
              }}
            >
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
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor={darkGreen}
                accessible={true}
                accessibilityLabel="Email or Username"
              />
            </View>

            <View style={styles.container}>
              <Icon name="lock" size={20} color="#555" style={styles.icon} />
              <TextInput
                placeholder="Password"
                secureTextEntry={!passwordVisible}
                style={styles.passwordInput}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholderTextColor={darkGreen}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setPasswordVisible(!passwordVisible)}
                accessibilityLabel={
                  passwordVisible ? "Hide Password" : "Show Password"
                }
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
                style={{
                  color: darkGreen,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Forgot Password ?
              </Text>
            </View>
            <Btn
              textColor="white"
              bgColor="#11401b"
              btnLabel="Login"
              Press={handleLogin}
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
                  style={{
                    color: darkGreen,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
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
  input: {
    borderRadius: 50,
    color: darkGreen,
    paddingHorizontal: 10,
    width: "82%",
    height: 50,
    backgroundColor: "rgb(220, 220, 220)",
    marginVertical: 10,
  },
  passwordInput: {
    borderRadius: 50,
    color: darkGreen,
    paddingHorizontal: 10,
    width: "70%",
    height: 50,
    backgroundColor: "rgb(220, 220, 220)",
    marginVertical: 10,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
});

export default SharedPreferences;
