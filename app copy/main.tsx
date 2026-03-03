import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#2d0407", "#7A0B12", "#C01424"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.9 }}
        style={styles.header}
      />

      <View style={styles.content}>
        <Image
          source={require("../assets/images/logots.png")}
          style={styles.logo}
          contentFit="contain"
        />

        <Text style={styles.subtitle}>
          Master Finance, Earn Rewards,
          {"\n"}
          Grow Faster!
        </Text>

        <Pressable style={styles.cta} onPress={() => router.replace("/signin")}>
          <Text style={styles.ctaLabel}>Mulai Sekarang!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 320,
    borderBottomLeftRadius: 170,
    borderBottomRightRadius: 0,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    paddingTop: 250,
    alignItems: "center",
    gap: 18,
    paddingHorizontal: 32,
    paddingBottom: 72,
  },
  logo: {
    width: 230,
    height: 250,
    transform: [{ translateY: -30 }],
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
    color: "#3A3A3A",
    lineHeight: 18,
    maxWidth: 300,
  },
  cta: {
    marginTop: 50,
    backgroundColor: "#B0121F",
    paddingVertical: 12,
    paddingHorizontal: 64,
    borderRadius: 24,
    shadowColor: "#7A0B12",
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  ctaLabel: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});