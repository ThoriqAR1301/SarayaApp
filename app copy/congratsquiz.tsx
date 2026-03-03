import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function CongratsQuiz() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Navy */}
      <View style={styles.navyBackground} />

      <View style={styles.mainWrapper}>
        
        {/* ILUSTRASI */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/winner.png')}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        {/* WHITE CARD */}
        <View style={styles.contentCard}>
          {/* Spacer agar teks "Selamat!" muncul di bawah kaki winner.png */}
          <View style={styles.textSpacer} />

          {/* Grouping Konten: Teks -> XP -> Button (Semua Center) */}
          <View style={styles.centerContent}>
            <Text style={styles.congratsText}>Selamat!</Text>
            <Text style={styles.subText}>Kamu berhasil mendapatkan</Text>

            {/* XP Section */}
            <View style={styles.xpContainer}>
              <Image
                source={require('../assets/images/xp.png')}
                style={styles.xpIcon}
              />
              <Text style={styles.xpNumber}>30</Text>
            </View>

            {/* Tombol: Sekarang berada tepat di bawah XP */}
            <TouchableOpacity 
              style={styles.nextButton}
              onPress={() => router.push('/(tabs)/lesson')}
            >
              <Text style={styles.buttonText}>Next Lesson</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navyBackground: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: height * 0.45,
    backgroundColor: '#041E42',
  },
  mainWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    zIndex: 10,
    position: 'absolute',
    top: height * 0.05,
    width: width * 0.85,
    height: height * 0.35,
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  contentCard: {
    marginTop: height * 0.30, 
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 25,
  },
  textSpacer: {
    height: height * 0.12, 
  },
  centerContent: {
    alignItems: 'center',
    width: '100%',
  },
  congratsText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#9B1B21',
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  xpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40, // Jarak antara angka XP dengan tombol di bawahnya
  },
  xpIcon: {
    width: 55,
    height: 55,
    marginRight: 12,
  },
  xpNumber: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#FFB129',
  },
  nextButton: {
    backgroundColor: '#9B1B21',
    width: '90%',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    // Shadow agar tombol tetap terlihat pop-out
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});