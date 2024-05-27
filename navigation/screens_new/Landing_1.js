import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import Button from "./Button";
import {blue } from './Constants';

const Landing_1 = (props) => {
  return (
    <ImageBackground
      source={require("../../assets/loginbg.jpg")}
      style={styles.backgroundImage}>
        <View style={[styles.buttonContainer, { marginTop: 600 }]}>
          <Button bgColor={blue} textColor='white' buttonLabel="Login" Press={()=>props.navigation.navigate("Login")}/>
          <Button bgColor='white' textColor={blue} buttonLabel="Signup" Press={()=>props.navigation.navigate("Signup")} />
        </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch' or 'contain'
  },
  buttonContainer: {
    marginHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Landing_1;
