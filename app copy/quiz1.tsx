import React, { useState } from 'react';
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

export default function Quiz1() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const answers = [
    "To identify market gaps and opportunities",
    "To copy competitors' strategies",
    "To discourage potential investors",
    "To ignore potential threats"
  ];

  const handleCheck = () => {
    // Navigasi ke false.tsx sesuai permintaan
    router.push('/false'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Dark Navy Header Section */}
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

      {/* Main Content Card */}
      <View style={styles.contentCard}>
        <Image 
          source={require('../assets/images/why.png')} 
          style={styles.illustration} 
          resizeMode="contain" 
        />

        <Text style={styles.questionText}>
          Why is understanding your competitive landscape essential for startup success?
        </Text>

        {/* Answer Options */}
        <View style={styles.optionsContainer}>
          {answers.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === index && styles.optionSelected
              ]}
              onPress={() => setSelectedAnswer(index)}
            >
              <Text style={[
                styles.optionText,
                selectedAnswer === index && styles.optionTextSelected
              ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Check Button */}
        <TouchableOpacity 
          style={[
            styles.checkButton,
            { backgroundColor: selectedAnswer !== null ? '#12B012' : '#E0E0E0' }
          ]}
          onPress={handleCheck}
          disabled={selectedAnswer === null}
        >
          <Text style={styles.checkButtonText}>Check</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041E42', // Navy Blue Header background
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
  timerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  progressBase: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 10,
    marginHorizontal: 15,
    overflow: 'hidden',
  },
  progressFill: {
    width: '60%', // Contoh progress
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  xpBadge: {
    backgroundColor: '#FFB129',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  xpIcon: {
    width: 18,
    height: 18,
    marginRight: 4,
  },
  xpText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
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
    marginBottom: 20,
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
    // Shadow/Elevation
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  optionSelected: {
    borderColor: '#9B1B21',
    backgroundColor: '#FFF5F5',
  },
  optionText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  optionTextSelected: {
    color: '#9B1B21',
    fontWeight: '600',
  },
  checkButton: {
    width: '100%',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
  },
  checkButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});