import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView 
} from 'react-native';
import { useRouter } from 'expo-router';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <IconSymbol name="chevron.left" size={24} color="#2d3436" />
            </TouchableOpacity>
            <Text style={styles.title}>Selamat Datang Kembali!</Text>
            <Text style={styles.subtitle}>Silakan masuk untuk melanjutkan belanja di Saraya App</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukkan email Anda"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[styles.input, { flex: 1, borderBottomWidth: 0 }]}
                  placeholder="Masukkan password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity 
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  style={styles.eyeIcon}
                >
                  <IconSymbol 
                    name={isPasswordVisible ? "eye.fill" : "eye.slash.fill"} 
                    size={20} 
                    color="#636e72" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Lupa Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.btnSignIn}
              onPress={() => router.replace('/(tabs)')}
            >
              <Text style={styles.btnTextSignIn}>Masuk</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Belum punya akun? </Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/sign-up')}>
              <Text style={styles.signUpLink}>Daftar di sini</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  scrollContent: { padding: 25, flexGrow: 1 },
  header: { marginTop: 20, marginBottom: 40 },
  backButton: { marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2d3436' },
  subtitle: { fontSize: 16, color: '#636e72', marginTop: 10 },
  form: { flex: 1 },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#2d3436', marginBottom: 8 },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#dfe6e9',
    paddingVertical: 10,
    fontSize: 16,
    color: '#2d3436',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#dfe6e9',
  },
  eyeIcon: { padding: 10 },
  forgotPassword: { alignSelf: 'flex-end', marginBottom: 30 },
  forgotPasswordText: { color: '#03AC0E', fontWeight: '600' },
  btnSignIn: {
    backgroundColor: '#03AC0E',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnTextSignIn: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    paddingBottom: 20
  },
  footerText: { color: '#636e72', fontSize: 15 },
  signUpLink: { color: '#03AC0E', fontSize: 15, fontWeight: 'bold' },
});