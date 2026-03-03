import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

// Data dummy untuk list
const leaderboardData = [
  {
    id: 1,
    name: "Gloria Mairani",
    xp: "1875 XP",
    medal: require("../../assets/images/medal1.png"),
  },
  {
    id: 2,
    name: "Gloria Mairani",
    xp: "1875 XP",
    medal: require("../../assets/images/medal2.png"),
  },
  {
    id: 3,
    name: "Gloria Mairani",
    xp: "1875 XP",
    medal: require("../../assets/images/medal3.png"),
  },
  { id: 4, name: "Gloria Mairani", xp: "1875 XP" },
  { id: 5, name: "Gloria Mairani", xp: "1875 XP" },
  { id: 6, name: "Gloria Mairani", xp: "1875 XP" },
  { id: 7, name: "Gloria Mairani", xp: "1875 XP" },
];

const LeaderboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header Biru Gelap Melengkung */}
        <View style={styles.headerBackground}>
          <View style={styles.topHeader}>
            <Text style={styles.headerTitle}>Leaderboard</Text>
            <Ionicons name="alert-circle-outline" size={24} color="#FFF" />
          </View>

          <View style={styles.crownContainer}>
            <Image
              source={require("../../assets/images/crown.png")}
              style={styles.crownImg}
            />
            <Text style={styles.monthText}>Desember</Text>
            <Text style={styles.subHeaderText}>
              Masuk 3 besar dan dapatkan hadiah!
            </Text>
            <Text style={styles.timerText}>30:00:00</Text>
          </View>
        </View>

        {/* List Section */}
        <View style={styles.listContainer}>
          {leaderboardData.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.rankItem,
                index < 3 && styles.topThreeItem, // Background sedikit krem untuk 3 besar
              ]}
            >
              <View style={styles.leftRow}>
                {item.medal ? (
                  <Image source={item.medal} style={styles.medalImg} />
                ) : (
                  <Text style={styles.rankNumber}>{item.id}</Text>
                )}
                <View style={styles.avatarPlaceholder} />
                <Text style={styles.userName}>{item.name}</Text>
              </View>
              <Text style={styles.xpText}>{item.xp}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FE" },
  scrollContent: { paddingBottom: 100 },

  headerBackground: {
    backgroundColor: "#0A1D37", // Biru gelap sesuai desain
    height: 350,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    paddingHorizontal: 25,
    paddingTop: Platform.OS === "android" ? 40 : 20,
    alignItems: "center",
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: { color: "#FFF", fontSize: 20, fontWeight: "600" },

  crownContainer: { alignItems: "center", marginTop: 10 },
  crownImg: { width: 120, height: 120, marginBottom: 15 },
  monthText: { color: "#FFF", fontSize: 32, fontWeight: "bold" },
  subHeaderText: { color: "#B0C4DE", fontSize: 14, marginTop: 5 },
  timerText: { color: "#FFF", fontSize: 18, marginTop: 15, fontWeight: "500" },

  listContainer: { paddingHorizontal: 20, marginTop: -40 }, // Menarik list ke atas agar sedikit menumpuk di header
  rankItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  topThreeItem: { backgroundColor: "#FFF9E7" }, // Warna krem tipis untuk 3 besar

  leftRow: { flexDirection: "row", alignItems: "center" },
  medalImg: { width: 40, height: 40, marginRight: 15 },
  rankNumber: {
    fontSize: 18,
    fontWeight: "bold",
    width: 40,
    textAlign: "center",
    marginRight: 15,
    color: "#333",
  },
  avatarPlaceholder: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#666",
    marginRight: 15,
  },
  userName: { fontSize: 15, fontWeight: "600", color: "#333" },
  xpText: { fontSize: 14, color: "#555", fontWeight: "500" },
});

export default LeaderboardScreen;
