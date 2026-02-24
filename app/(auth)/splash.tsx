import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)/get-started');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SARAYA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#03AC0E' },
  logo: { fontSize: 42, fontWeight: 'bold', color: '#fff', letterSpacing: 5 },
});