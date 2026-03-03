import { BookOpen, ChevronRight, Target, Zap } from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER SECTION (NAVY) */}
        <View style={styles.headerNavy}>
          <View style={styles.profileInfoRow}>
            <Image
              source={require("../../assets/images/CW.jpg")}
              style={styles.profileImage}
            />
            <View style={styles.nameContainer}>
              <Text style={styles.userName}>Gloria Mairani</Text>
              <Text style={styles.userSubName}>Kopi Konco</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.ubahText}>Ubah</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CONTENT SECTION */}
        <View style={styles.contentBody}>
          {/* STATISTIK SECTION */}
          <Text style={styles.sectionTitle}>Statistik</Text>
          <View style={styles.statsGrid}>
            {/* Lesson */}
            <View style={styles.statsItem}>
              <View style={styles.iconCircle}>
                <BookOpen color="white" size={20} />
              </View>
              <View>
                <Text style={styles.statsValue}>10</Text>
                <Text style={styles.statsLabel}>Lesson</Text>
              </View>
            </View>

            {/* Streak */}
            <View style={styles.statsItem}>
              <View style={styles.iconCircle}>
                <Zap color="white" size={20} fill="white" />
              </View>
              <View>
                <Text style={styles.statsValue}>20</Text>
                <Text style={styles.statsLabel}>Streak</Text>
              </View>
            </View>

            {/* XP */}
            <View style={styles.statsItem}>
              <View style={styles.iconCircle}>
                <Image
                  source={require("../../assets/images/xp.png")}
                  style={{ width: 22, height: 22 }}
                />
              </View>
              <View>
                <Text style={styles.statsValue}>120</Text>
                <Text style={styles.statsLabel}>XP</Text>
              </View>
            </View>

            {/* Akurasi */}
            <View style={styles.statsItem}>
              <View style={styles.iconCircle}>
                <Target color="white" size={20} />
              </View>
              <View>
                <Text style={styles.statsValue}>70%</Text>
                <Text style={styles.statsLabel}>Akurasi</Text>
              </View>
            </View>
          </View>

          {/* AKUN SECTION */}
          <Text style={styles.sectionTitle}>Akun</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Detail Bisnis</Text>
            <ChevronRight color="black" size={18} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Ubah Kata Sandi</Text>
            <ChevronRight color="black" size={18} />
          </TouchableOpacity>

          {/* TENTANG SECTION */}
          <Text style={[styles.sectionTitle, { marginTop: 15 }]}>Tentang</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Keuntungan Belajar di Saraya</Text>
            <ChevronRight color="black" size={18} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Syarat dan Ketentuan</Text>
            <ChevronRight color="black" size={18} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Kebijakan Privasi</Text>
            <ChevronRight color="black" size={18} />
          </TouchableOpacity>

          {/* KELUAR BUTTON */}
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Keluar</Text>
          </TouchableOpacity>

          {/* FOOTER INFO */}
          <View style={styles.footerRow}>
            <Text style={styles.versionText}>Version 1.1</Text>
            <Text style={styles.footerHashtag}>#TogetherWeShapeTheFuture</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerNavy: {
    backgroundColor: "#041E42",
    height: 200, // Tinggi dikurangi agar lebih rapat
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  profileInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#FFB129",
  },
  nameContainer: {
    flex: 1,
    marginLeft: 15,
  },
  userName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  userSubName: {
    color: "white",
    fontSize: 15,
    opacity: 0.9,
  },
  ubahText: {
    color: "white",
    fontSize: 13,
    opacity: 0.7,
  },
  contentBody: {
    paddingHorizontal: 25,
    paddingTop: 20, // Padding atas dikurangi
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#B51B1B",
    marginBottom: 10, // Jarak judul ke isi dikurangi
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15, // Jarak antar section dikurangi
  },
  statsItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15, // Jarak antar item statistik dikurangi
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#B51B1B",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  statsValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  statsLabel: {
    fontSize: 13,
    color: "#888",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10, // Jarak antar menu dirapatkan
  },
  menuText: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },
  logoutButton: {
    backgroundColor: "#6D96D2",
    height: 50, // Tinggi tombol dikurangi
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    marginBottom: 90,
  },
  versionText: {
    fontSize: 11,
    color: "#999",
  },
  footerHashtag: {
    fontSize: 11,
    color: "#999",
  },
});
