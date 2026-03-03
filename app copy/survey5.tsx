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
import { router } from "expo-router"; // Import router untuk navigasi

const { width, height } = Dimensions.get('window');

export default function Survey5() {
  const [selectedLevel, setSelectedLevel] = useState('Basic: Baru memulai');

  const levels = [
    'Basic: Baru memulai',
    'Menengah: Paham dasar keuangan',
    'Mahir: Paham perencanaan dan analisis',
  ];

  // Fungsi navigasi ke halaman congrats
  const handleLanjut = () => {
    router.push("/congrats"); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        {/* Logo Section */}
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
            Kemampuan Finansial Anda saat ini (pilih yang paling sesuai):
          </Text>
        </View>

        {/* Financial Level List */}
        <View style={styles.listContainer}>
          {levels.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.itemCard,
                selectedLevel === item && styles.selectedCard,
              ]}
              onPress={() => setSelectedLevel(item)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.itemText,
                  selectedLevel === item && styles.selectedText,
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
            onPress={handleLanjut} // Sekarang mengarah ke halaman congrats
            activeOpacity={0.8}
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
    marginBottom: 60,
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
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 26,
  },
  listContainer: {
    width: '100%',
  },
  itemCard: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedCard: {
    backgroundColor: '#C61A24',
    borderColor: '#C61A24',
  },
  itemText: {
    fontSize: 14,
    color: '#4A4A4A',
    textAlign: 'center',
  },
  selectedText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    paddingHorizontal: 40,
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