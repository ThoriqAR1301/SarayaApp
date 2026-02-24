import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function GetStarted() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.illustrationContainer}>
          <View style={styles.circleDecoration} />
          <Text style={styles.brandLogo}>SARAYA</Text>
        </View>

        <View style={styles.textWrapper}>
          <Text style={styles.title}>Mulai Belanja Pintar</Text>
          <Text style={styles.description}>
            Nikmati kemudahan akses ribuan produk berkualitas dalam satu genggaman di Saraya App.
          </Text>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity 
            style={styles.btnPrimary} 
            onPress={() => router.push('/(auth)/sign-in')}
          >
            <Text style={styles.btnTextPrimary}>Masuk Ke Akun</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.btnSecondary} 
            onPress={() => router.push('/(auth)/sign-up')}
          >
            <Text style={styles.btnTextSecondary}>Daftar Baru</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  circleDecoration: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#03AC0E20',
    position: 'absolute',
  },
  brandLogo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#03AC0E',
    marginTop: 50,
  },
  textWrapper: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2d3436',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#636e72',
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonWrapper: {
    gap: 15,
  },
  btnPrimary: {
    backgroundColor: '#03AC0E',
    paddingVertical: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  btnTextPrimary: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnSecondary: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#03AC0E',
  },
  btnTextSecondary: {
    color: '#03AC0E',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});