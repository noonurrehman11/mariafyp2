import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Logo from "../../assets/Logo.png"
import * as Animatable from "react-native-animatable";

const SplashScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/SplashBG.jpg")}
      style={styles.container}
    >
      <View style={styles.header}>
      {/* <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../assets/Logo.png')}
          style={styles.Logo}
          resizeMode="stretch"
        /> */}
        </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>Welcome to FimlyGeeks</Text>
        </View>

        <Text style={styles.text}>Stream what you want</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => console.log("SignInScreen")}>
            <LinearGradient
              colors={["#aed3ec", "#CDCFCE"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Let's Explore</Text>
              <MaterialIcon name="navigate-next" color="#05375a" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </ImageBackground>
  );
};

export default SplashScreen;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
console.log("statusBarHeight: ", StatusBar.currentHeight);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  headertext: {
    fontSize: 30,
    color: "white",
    padding: 10,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "black",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: height_logo / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "#05375a",
    fontWeight: "bold",
  },
  speakerIcon: {},
});
