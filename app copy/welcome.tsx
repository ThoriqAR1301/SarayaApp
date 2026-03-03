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

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        {/* Logo Section - Ditaruh lebih ke atas */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logots.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.welcomeTitle}>
            Selamat datang di Saraya, Gloria
          </Text>
          <Text style={styles.description}>
            Mari kita mulai untuk mempersiapkan konten pilihan sesuai dengan kebutuhan kamu!
          </Text>
        </View>

        {/* Button Section */}
        <TouchableOpacity 
          style={styles.btnMulai}
          activeOpacity={0.8}
            onPress={() => router.replace("/survey1")} // Navigasi ke halaman survey1
        >
          <Text style={styles.btnText}>Mulai Sekarang!</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Mengubah dari 'center' ke 'flex-start'
    paddingHorizontal: 40,
    paddingTop: height * 0.12, // Memberikan jarak dari atas layar (sekitar 12% tinggi layar)
  },
  logoContainer: {
    marginBottom: height * 0.1, // Jarak fleksibel antara logo dan teks
    alignItems: 'center',
  },
  logo: {
    width: width * 0.5, // Sedikit diperbesar agar proporsional
    height: 140,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  welcomeTitle: {
    fontSize: 24, // Ukuran font disesuaikan agar lebih 'bold'
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 15,
  },
  description: {
    fontSize: 15,
    color: '#7E7E7E',
    textAlign: 'center',
    lineHeight: 24,
  },
  btnMulai: {
    backgroundColor: '#C61A24',
    width: '100%',
    height: 55, // Sedikit lebih tinggi agar nyaman ditekan
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // Shadow Styling tetap dipertahankan
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 8,
    marginTop: 20, // Tambahan margin top jika teks terlalu panjang
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});