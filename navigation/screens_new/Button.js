import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({ bgColor, buttonLabel, textColor, Press }) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: "center",
        width: 300,
        paddingVertical: 7,
        marginVertical:10,
      }}
    >
      <Text style={{ color: textColor, fontSize: 22, fontWeight: "bold" }}>
        {buttonLabel}
      </Text>
    </TouchableOpacity>
  );
}
