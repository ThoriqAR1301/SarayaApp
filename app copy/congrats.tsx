import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { router } from "expo-router";

const { width, height } = Dimensions.get('window');

export default function Congrats() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* 1. Lapis Paling Belakang: Area Merah */}
      <View style={styles.redHeader} />

      {/* 2. Lapis Tengah: Card Putih Melengkung */}
      <View style={styles.whiteCard}>
        <View style={styles.content}>
          {/* Text Section - Diturunkan agar tidak nabrak gambar */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Congratulations!</Text>
            <Text style={styles.subtitle}>Terima kasih sudah mengisi survei.</Text>
            <Text style={styles.description}>
              Mulai belajar dan raih hadiah untuk berkembang lebih cepat!
            </Text>
          </View>

          {/* Bottom Section */}
          <View style={styles.footerContainer}>
            <Text style={styles.infoText}>Rekomendasi kelas untuk kamu sudah siap</Text>
            <TouchableOpacity 
              style={styles.btnBelajar}
              onPress={() => router.push("/(tabs)")} // Navigasi ke halaman utama (tabs)
              activeOpacity={0.8}
            >
              <Text style={styles.btnText}>Belajar Sekarang!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* 3. Lapis Paling Depan: Gambar Winner (Dikecilkan sedikit) */}
      <View style={styles.imageOverlayContainer} pointerEvents="none">
        <Image 
          source={require('../assets/images/winner.png')} 
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  redHeader: {
    height: height * 0.4, // Sedikit diperpendek
    width: '100%',
    backgroundColor: '#C61A24',
    position: 'absolute',
    top: 0,
  },
  imageOverlayContainer: {
    position: 'absolute',
    top: height * 0.08, // Posisi gambar diturunkan sedikit
    width: width,
    alignItems: 'center',
    zIndex: 10,
  },
  illustration: {
    width: width * 0.8, // Ukuran diperkecil dari 0.9 ke 0.75
    height: height * 0.35, // Tinggi disesuaikan
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50,
    marginTop: height * 0.3, // Lengkungan naik sedikit
    zIndex: 2,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: height * 0.25, // Jarak teks diturunkan lebih jauh (0.1 -> 0.15)
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28, // Ukuran font disesuaikan sedikit
    fontWeight: 'bold',
    color: '#C61A24',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#4A4A4A',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#7E7E7E',
    textAlign: 'center',
    lineHeight: 20,
  },
  footerContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
    marginTop: 'auto',
  },
  infoText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 15,
  },
  btnBelajar: {
    backgroundColor: '#C61A24',
    width: '100%',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});