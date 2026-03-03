import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';

const { width, height } = Dimensions.get('window');
import { router } from "expo-router";
export default function Survey2() {
  const [selectedCategory, setSelectedCategory] = useState('Makanan/Minuman');

  const categories = [
    'Makanan/Minuman',
    'Pakaian',
    'Kerajinan',
    'Retail',
    'Jasa',
    'Lainnya',
  ];

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
          <Text style={styles.questionText}>Bisnis kamu di bidang apa?</Text>
        </View>

        {/* Categories List */}
        <View style={styles.listContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryItem,
                selectedCategory === item && styles.selectedItem,
              ]}
              onPress={() => setSelectedCategory(item)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item && styles.selectedText,
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
                onPress={() => router.replace("/survey3")} // Navigasi ke halaman survey3
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
    paddingTop: height * 0.06, // Posisi logo tetap di atas
  },
  logoContainer: {
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  questionContainer: {
    width: '100%',
    marginBottom: 30,
  },
  questionText: {
    fontSize: 18,
    color: '#7E7E7E', // Warna abu-abu halus sesuai gambar
    textAlign: 'left',
  },
  listContainer: {
    width: '100%',
  },
  categoryItem: {
    width: '100%',
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    // Shadow untuk item kategori
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  selectedItem: {
    backgroundColor: '#CE444B', // Warna merah pilihan sesuai gambar
    borderColor: '#CE444B',
  },
  categoryText: {
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