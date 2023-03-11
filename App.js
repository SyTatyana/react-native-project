import { StatusBar } from "expo-status-bar";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen.jsx";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";

import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <>
      <StatusBar />
      {/*<LoginScreen styles={styles} />*/}
      <RegistrationScreen styles={styles} />
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "absolute",
    width: windowWidth,
    height: windowHeight,
    top: 0,
    left: 0,
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: windowWidth,
    height: 549,
    marginTop: 263,
  },
  formContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fffff",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 16,
  },
  input: {
    width: "100%",
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 25.5,
    padding: 16,
    marginTop: 30,
    marginBottom: 16,
  },
  btnTitle: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "Roboto-Regular",
  },
  loginBox: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
  },
  show: {
    position: "absolute",
    right: 10,
    top: 15,
    color: "#1B4371",
  },
  title: {
    marginBottom: 30,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    marginHorizontal: "auto",
  },
  avaWrapper: {
    position: "absolute",
    top: -320,
    width: "100%",
    alignItems: "center",
  },
  addPhoto: {
    position: "absolute",
    right: -12.5,
    bottom: 14,
  },
});
