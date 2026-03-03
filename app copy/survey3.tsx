import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
import { router } from "expo-router";
export default function Survey3() {
  // Default pilihan pertama sesuai gambar (Manajemen Keuangan)
  const [selectedChallenge, setSelectedChallenge] = useState('Manajemen Keuangan');

  const challenges = [
    'Manajemen Keuangan',
    'Pemasaran',
    'Operasional',
    'Modal Usaha',
    'Lainnya',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        {/* Logo Section - Konsisten dengan Survey sebelumnya */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logosa.png')}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>

        {/* Question Section */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            Apa tantangan terbesar yang Anda hadapi saat ini dalam membangun bisnis?
          </Text>
        </View>

        {/* Challenges List */}
        <View style={styles.listContainer}>
          {challenges.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.itemCard,
                selectedChallenge === item && styles.selectedCard,
              ]}
              onPress={() => setSelectedChallenge(item)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.itemText,
                  selectedChallenge === item && styles.selectedText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Button Section */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity 
            style={styles.btnLanjut}
            activeOpacity={0.8}
                onPress={() => router.replace("/survey4")} // Navigasi ke halaman survey4
          >
            <Text style={styles.btnText}>Lanjut</Text>
          </TouchableOpacity>
        </View>

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
    paddingHorizontal: 40,
    paddingTop: height * 0.06,
  },
  logoContainer: {
    marginBottom: 40,
    // Shadow untuk logo bulat
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  questionContainer: {
    width: '100%',
    marginBottom: 40,
  },
  questionText: {
    fontSize: 17,
    color: '#666666',
    textAlign: 'left',
    lineHeight: 24, // Membuat teks pertanyaan lebih enak dibaca sesuai gambar
  },
  listContainer: {
    width: '100%',
  },
  itemCard: {
    width: '100%',
    height: 48,
    backgroundColor: '#FFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    // Soft Shadow untuk list item
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 3,
  },
  selectedCard: {
    backgroundColor: '#CE444B', // Warna merah khas pilihan aktif
    borderColor: '#CE444B',
  },
  itemText: {
    fontSize: 15,
    color: '#4A4A4A',
  },
  selectedText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  btnLanjut: {
    backgroundColor: '#C61A24',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});