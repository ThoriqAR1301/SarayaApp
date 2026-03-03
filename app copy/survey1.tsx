import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { router } from "expo-router";
const { width, height } = Dimensions.get('window');

export default function Survey1() {
  const [businessName, setBusinessName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
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
            <Text style={styles.questionText}>Nama bisnis kamu apa?</Text>
            
            {/* Input dengan Soft Shadow */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nama Bisnis"
                placeholderTextColor="#C7C7CD"
                value={businessName}
                onChangeText={setBusinessName}
              />
            </View>
          </View>

          {/* Bottom Button Section */}
          <View style={styles.buttonWrapper}>
            <TouchableOpacity 
              style={styles.btnLanjut} // Warna merah statis dari style
              activeOpacity={0.8}
                onPress={() => router.replace("/survey2")} // Navigasi ke halaman survey2
            >
              <Text style={styles.btnText}>Lanjut</Text>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>
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
    paddingHorizontal: 30,
    paddingTop: height * 0.1,
  },
  logoContainer: {
    marginBottom: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  questionContainer: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#4A4A4A',
    marginBottom: 25,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    paddingHorizontal: 30,
  },
  btnLanjut: {
    backgroundColor: '#C61A24', // Warna merah fix sesuai permintaan
    height: 55,
    borderRadius: 30,
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