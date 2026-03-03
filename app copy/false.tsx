import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function False() {
  const router = useRouter();

  const answers = [
    "To identify market gaps and opportunities",
    "To copy competitors' strategies",
    "To discourage potential investors",
    "To ignore potential threats"
  ];

  // Simulasi jawaban salah yang dipilih (misal indeks 0)
  const selectedIndex = 0;

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER: Ukuran & Padding dikunci sama dengan Quiz */}
      <View style={styles.header}>
        <View style={styles.topRow}>
          <View style={styles.timerBox}>
            <Text style={styles.timerText}>0:59</Text>
          </View>
          
          <View style={styles.progressBase}>
            <View style={styles.progressFill} />
          </View>

          <View style={styles.xpBadge}>
            <Image source={require('../assets/images/xp.png')} style={styles.xpIcon} />
            <Text style={styles.xpText}>30</Text>
          </View>
        </View>
      </View>

      {/* CONTENT CARD: Menggunakan flex: 1 agar background putih penuh ke bawah */}
      <View style={styles.contentCard}>
        <Image 
          source={require('../assets/images/why.png')} 
          style={styles.illustration} 
          resizeMode="contain" 
        />

        <Text style={styles.questionText}>
          Why is understanding your competitive landscape essential for startup success?
        </Text>

        {/* Opsi jawaban tetap dirender lengkap untuk menjaga spacing layout */}
        <View style={styles.optionsContainer}>
          {answers.map((item, index) => (
            <View
              key={index}
              style={[
                styles.optionButton,
                index === selectedIndex && styles.optionWrong
              ]}
            >
              <Text style={[
                styles.optionText,
                index === selectedIndex && { color: 'white', fontWeight: '600' }
              ]}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* POPUP FALSE: Absolute position menimpa bagian bawah */}
      <View style={styles.feedbackOverlay}>
        <Text style={styles.salahText}>Salah!</Text>
        
        <View style={styles.correctAnswerContainer}>
          <Text style={styles.jawabanBenarLabel}>Jawaban benar:</Text>
          <Text style={styles.jawabanBenarText}>To discourage potential investors</Text>
        </View>

        <TouchableOpacity 
          style={styles.nextBtn}
          onPress={() => router.push('/correct')} // Navigasi ke correct.tsx untuk feedback benar
        >
          <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041E42',
  },
  header: {
    height: 120, // Kunci tinggi header
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timerBox: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  timerText: { color: 'white', fontWeight: 'bold' },
  progressBase: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 10,
    marginHorizontal: 15,
    overflow: 'hidden',
  },
  progressFill: {
    width: '60%',
    height: '100%',
    backgroundColor: 'white',
  },
  xpBadge: {
    backgroundColor: '#FFB129',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  xpIcon: { width: 18, height: 18, marginRight: 4 },
  xpText: { color: 'white', fontWeight: 'bold' },
  contentCard: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  illustration: {
    width: width * 0.7,
    height: 180,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
    lineHeight: 26,
  },
  optionsContainer: {
    width: '100%',
  },
  optionButton: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#EFEFEF',
    marginBottom: 12,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  optionWrong: {
    backgroundColor: '#C6434B',
    borderColor: '#C6434B',
  },
  optionText: { color: '#666', fontSize: 14 },

  /* --- POPUP STYLES --- */
  feedbackOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFB5B5', // Pink background sesuai gambar
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    paddingBottom: 40,
    elevation: 20,
  },
  salahText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C6434B',
    marginBottom: 5,
  },
  correctAnswerContainer: {
    marginBottom: 20,
  },
  jawabanBenarLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C6434B',
  },
  jawabanBenarText: {
    fontSize: 16,
    color: '#C6434B',
  },
  nextBtn: {
    backgroundColor: '#C6434B',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
  },
  nextBtnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});