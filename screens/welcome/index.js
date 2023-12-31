import { rest_auth_password_reset_create } from "../../store/zigzagAPI/restAuthDetails.slice.js";
import { useDispatch } from "react-redux";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(rest_auth_password_reset_create({}));
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={require("./logo.png")} />
          <Text style={styles.text}>
            Let's build something amazing together!
          </Text>
        </View>
        <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
      </ScrollView>
    <View style={styles.bdRwBgBq}><Pressable onPress={onSubmit}><ImageBackground style={styles.nHhUyXwv} source={require("./zetong-li-NAP14GEjvh8-unsplash 2.jpg")} resizeMode="cover"></ImageBackground></Pressable></View></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: 700
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: 700,
    marginBottom: 20
  },
  bdRwBgBq: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  nHhUyXwv: {
    width: 142,
    height: 62
  }
});
export default WelcomeScreen;