import React from "react";
import { TextInput, View } from "react-native";
import { blue } from "./Constants";

const Field = (props) => {
  return (
    <View style={{  alignItems: "center" }}>
      <TextInput
        {...props}
        style={{
          borderRadius: 100,
          color: "black",
          paddingHorizontal: 10,
          width: 300,
          height: 40,
          backgroundColor: "white",
          marginVertical: 10,
          borderWidth: 1,
          borderColor: "#a9a9a9",
        }}
      ></TextInput>
    </View>
  );
};

export default Field;
