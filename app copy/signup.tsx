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
  ScrollView,
} from 'react-native';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react-native';
import { router } from "expo-router";

export default function Signup() {
  const [nama, setNama] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          
          {/* Logo Section (Circle) */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logosa.png')}
              style={styles.logo}
              resizeMode="cover"
            />
          </View>

          {/* Title Section */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Sign Up</Text>
            <Text style={styles.subtitleText}>Daftar akun Anda</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>
            {/* Input Nama */}
            <TextInput
              style={styles.input}
              placeholder="Nama"
              placeholderTextColor="#C7C7CD"
              value={nama}
              onChangeText={setNama}
            />

            {/* Input Username dengan Ceklis Hijau */}
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, { flex: 1, marginTop: 0, borderWidth: 0 }]}
                placeholder="Username"
                placeholderTextColor="#C7C7CD"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
              {username.length > 0 && (
                <View style={styles.rightIcon}>
                  <CheckCircle2 size={20} color="#28A745" />
                </View>
              )}
            </View>

            {/* Input Email */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#C7C7CD"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Input Password - LOGIKA ICON SUDAH DIBALIK */}
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, { flex: 1, marginTop: 0, borderWidth: 0 }]}
                placeholder="Password"
                placeholderTextColor="#C7C7CD"
                secureTextEntry={secureText}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity 
                onPress={() => setSecureText(!secureText)}
                style={styles.rightIcon}
              >
                {/* Jika tertutup (secure), tampilkan icon mata terbuka untuk 'melihat'. 
                    Jika terbuka, tampilkan icon mata coret untuk 'menyembunyikan'. */}
                {secureText ? <EyeOff size={20} color="#C7C7CD" /> : <Eye size={20} color="#C7C7CD" />}
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnDaftar} onPress={() => router.push("/welcome")}>
              <Text style={styles.btnDaftarText}>Daftar</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <Text style={styles.grayText}>atau</Text>
          </View>

          {/* Social Media Login */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require('../assets/images/gugel.png')} 
                style={styles.socialIcon} 
              />
              <Text style={styles.socialButtonText}>Daftar dengan Google</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.grayText}>Sudah punya akun? </Text>
            <TouchableOpacity onPress={() => router.replace("/signin")}>
              <Text style={styles.blueTextBold}>Masuk</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    paddingHorizontal: 30,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  logoContainer: {
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  titleText: {
    fontSize: 32,
    fontWeight: '500',
    color: '#4A4A4A',
  },
  subtitleText: {
    fontSize: 16,
    color: '#7E7E7E',
    marginTop: 15,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#FFFFFF',
    marginTop: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 12,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
  },
  rightIcon: {
    paddingHorizontal: 15,
  },
  grayText: {
    color: '#7E7E7E',
    fontSize: 14,
  },
  blueTextBold: {
    color: '#0056B3',
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnDaftar: {
    backgroundColor: '#C61A24',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnDaftarText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    marginVertical: 25,
  },
  socialContainer: {
    width: '100%',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 12,
    marginBottom: 15,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    color: '#4A4A4A',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});