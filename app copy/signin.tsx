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
import { Eye, EyeOff } from 'lucide-react-native';
import { router } from "expo-router";

export default function Signin() {
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
          
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logosa.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Title Section */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Sign In</Text>
            <Text style={styles.subtitleText}>Masuk ke akun Anda</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#C7C7CD"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Password Wrapper dengan Border Gabung */}
            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                placeholderTextColor="#C7C7CD"
                secureTextEntry={secureText}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity 
                onPress={() => setSecureText(!secureText)}
                style={styles.eyeIcon}
              >
                {secureText ? <Eye size={20} color="#C7C7CD" /> : <EyeOff size={20} color="#C7C7CD" />}
              </TouchableOpacity>
            </View>

            <View style={styles.rowActions}>
              <TouchableOpacity style={styles.rememberMe}>
                <View style={styles.checkboxPlaceholder} />
                <Text style={styles.grayText}>Ingat saya</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.blueText}>Lupa password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnMasuk} activeOpacity={0.8} onPress={() => router.push("/(tabs)")}>
              <Text style={styles.btnMasukText}>Masuk</Text>
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
              <Text style={styles.socialButtonText}>Masuk dengan Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require('../assets/images/facebook1.png')} 
                style={styles.socialIcon} 
              />
              <Text style={styles.socialButtonText}>Masuk dengan Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.grayText}>Belum punya akun? </Text>
            <TouchableOpacity onPress={() => router.push("/signup")}>
              <Text style={styles.blueTextBold}>Daftar</Text>
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
    overflow: 'hidden',
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
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 12,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
  },
  eyeIcon: {
    paddingLeft: 10,
  },
  rowActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 5,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxPlaceholder: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#C7C7CD',
    marginRight: 8,
  },
  grayText: {
    color: '#7E7E7E',
    fontSize: 14,
  },
  blueText: {
    color: '#0056B3',
    fontSize: 14,
  },
  blueTextBold: {
    color: '#0056B3',
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnMasuk: {
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
  btnMasukText: {
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