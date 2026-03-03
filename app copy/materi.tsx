import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Materi() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Progress Bars Section */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, styles.progressActive]} />
        <View style={[styles.progressBar, styles.progressActive]} />
        <View style={[styles.progressBar, styles.progressActive]} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Title Section */}
        <Text style={styles.title}>Dasar Laporan Keuangan</Text>

        {/* Content Card */}
        <View style={styles.contentCard}>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>

          {/* Bullet Point 1 */}
          <View style={styles.bulletRow}>
            <View style={styles.bulletCircle} />
            <Text style={styles.bulletText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>

          {/* Bullet Point 2 */}
          <View style={styles.bulletRow}>
            <View style={styles.bulletCircle} />
            <Text style={styles.bulletText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>

          {/* Bullet Point 3 */}
          <View style={styles.bulletRow}>
            <View style={styles.bulletCircle} />
            <Text style={styles.bulletText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer Button Section */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => router.push('/quiz1')} // Contoh navigasi balik ke lesson
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFEFE', // Background putih bersih agak keunguan tipis
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 30,
  },
  progressBar: {
    height: 6,
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
  },
  progressActive: {
    backgroundColor: '#9B1B21', // Merah marun sesuai brand
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingBottom: 100, // Ruang untuk tombol Next
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#9B1B21',
    marginBottom: 20,
  },
  contentCard: {
    backgroundColor: 'rgba(240, 240, 255, 0.3)', // Card putih transparan sesuai gambar
    borderRadius: 25,
    padding: 20,
  },
  paragraph: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 20,
    textAlign: 'justify',
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  bulletCircle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#D9D9D9', // Abu-abu lingkaran bullet
    marginTop: 4,
    marginRight: 15,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    textAlign: 'justify',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#666666', // Warna abu-abu tombol Next sesuai gambar
    width: width * 0.85,
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});