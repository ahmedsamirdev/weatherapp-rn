import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ReloadIcon({ load }) {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={load}
        name={reloadIconName}
        size={24}
        color="#30acff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 60,
    right: 20,
  },
});
