import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Correct() {
  const router = useRouter();

  const answers = [
    "To identify market gaps and opportunities",
    "To copy competitors' strategies",
    "To discourage potential investors",
    "To ignore potential threats"
  ];

  // Index 0 adalah jawaban yang benar dan dipilih user
  const selectedIndex = 0;

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER: Identik dengan Quiz & False untuk menjaga presisi */}
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

      {/* MAIN CONTENT CARD */}
      <View style={styles.contentCard}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
          <Image 
            source={require('../assets/images/why.png')} 
            style={styles.illustration} 
            resizeMode="contain" 
          />

          <Text style={styles.questionText}>
            Why is understanding your competitive landscape essential for startup success?
          </Text>

          {/* Opsi Jawaban */}
          <View style={styles.optionsContainer}>
            {answers.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.optionButton,
                  index === selectedIndex ? styles.optionCorrect : null
                ]}
              >
                <Text style={[
                  styles.optionText,
                  index === selectedIndex ? styles.optionTextCorrect : null
                ]}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
          
          {/* Spacer agar tidak tertutup pop-up saat scroll */}
          <View style={{ height: 200 }} />
        </ScrollView>
      </View>

      {/* GREEN FEEDBACK POP-UP (100% Match image_59232d.png) */}
      <View style={styles.feedbackOverlay}>
        <Text style={styles.benarText}>Benar!</Text>
        
        <TouchableOpacity 
          style={styles.nextBtn}
          onPress={() => router.push('/congratsquiz')}
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
    backgroundColor: '#041E42', // Background Navy tetap konsisten
  },
  header: {
    height: 120,
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
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  optionsContainer: {
    width: '100%',
    paddingHorizontal: 25,
  },
  optionButton: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#EFEFEF',
    marginBottom: 12,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  optionCorrect: {
    backgroundColor: '#12B012', // Hijau solid sesuai pilihan benar
    borderColor: '#12B012',
  },
  optionText: { color: '#666' },
  optionTextCorrect: { color: 'white', fontWeight: '600' },

  /* --- FEEDBACK POP-UP HIJAU --- */
  feedbackOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#D7FAD7', // Hijau muda soft background
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    paddingBottom: 40,
    elevation: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  benarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#12B012', // Hijau teks
    marginBottom: 20,
  },
  nextBtn: {
    backgroundColor: '#12B012', // Tombol Next Hijau
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