import { Tabs } from "expo-router";
import { BookOpen, Gift, Home, Trophy, User } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.5)",
        tabBarLabelStyle: styles.labelGlobal,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} size={22} />,
        }}
      />

      <Tabs.Screen
        name="leaderboard"
        options={{
          title: "Leaderboard",
          tabBarIcon: ({ color }) => <Trophy color={color} size={22} />,
        }}
      />

      {/* MENU TENGAH (LESSON) */}
      <Tabs.Screen
        name="lesson"
        options={{
          title: "Lesson",
          tabBarIcon: () => (
            <View style={styles.fabWrapper}>
              <View style={styles.whiteRing}>
                <View style={styles.blueBall}>
                  <BookOpen color="white" size={26} fill="white" />
                </View>
              </View>
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.labelGlobal,
                {
                  color: focused ? "#FFF" : "rgba(255, 255, 255, 0.5)",
                  marginTop: 10,
                },
              ]}
            >
              Lesson
            </Text>
          ),
        }}
      />

      <Tabs.Screen
        name="reward"
        options={{
          title: "Reward",
          tabBarIcon: ({ color }) => <Gift color={color} size={22} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <User color={color} size={22} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#041E42",
    borderTopWidth: 0,
    height: 75,
    position: "absolute",
    left: 20,
    right: 20,
    borderRadius: 25,
    // Hilangkan padding bottom default agar icon di tengah secara vertikal
    paddingBottom: 12,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  labelGlobal: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  fabWrapper: {
    top: -20, // Menyesuaikan tarikan ke atas
    alignItems: "center",
    justifyContent: "center",
  },
  whiteRing: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    // Shadow untuk ring putih agar terlihat menyatu
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  blueBall: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#6D96D2",
    justifyContent: "center",
    alignItems: "center",
  },
});
