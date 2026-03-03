import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { ChevronLeft, PlayCircle } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function ExploreLesson() {
  const router = useRouter();

  const lessons = [
    {
      id: 1,
      title: 'Dasar Keuangan Bisnis',
      desc: 'Sukses butuh perjuangan, jangan sendirian. Rina siap menemani, ayo lanjutkan belajar!',
      image: require('../assets/images/cwe.png'),
      bgColor: '#9B1B21',
      status: 'Lanjut Belajar',
    },
    {
      id: 2,
      title: 'Cashflow',
      desc: 'Sukses butuh perjuangan, jangan sendirian. Dina siap menemani, ayo lanjutkan belajar!',
      image: require('../assets/images/cwe1.png'),
      bgColor: '#D68A8E',
      status: 'Mulai Belajar',
    },
    {
      id: 3,
      title: 'Pajak Usaha',
      desc: 'Sukses butuh perjuangan, jangan sendirian. Mina siap menemani, ayo lanjutkan belajar!',
      image: require('../assets/images/cwe2.png'),
      bgColor: '#B99B9D',
      status: 'Mulai Belajar',
    },
    {
      id: 4,
      title: 'Investasi',
      desc: 'Sukses butuh perjuangan, jangan sendirian. Nina siap menemani, ayo lanjutkan belajar!',
      image: require('../assets/images/cwe3.png'),
      bgColor: '#A66E72',
      status: 'Mulai Belajar',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft color="#333" size={28} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Explore Lesson</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {lessons.map((item) => (
          <View key={item.id} style={[styles.card, { backgroundColor: item.bgColor }]}>
            <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
            
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
              
              <TouchableOpacity style={styles.actionBtn} onPress={() => router.push(`/materi`)}>
                <Text style={styles.actionText}>{item.status}</Text>
                <PlayCircle color="white" size={28} fill="white" fillOpacity={0.2} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 10,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  card: {
    height: 180,
    borderRadius: 25,
    marginBottom: 20,
    flexDirection: 'row',
    padding: 15,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: {
    width: '35%',
    height: '115%',
    position: 'absolute',
    bottom: 0,
    left: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: '38%',
    justifyContent: 'center',
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDesc: {
    color: 'white',
    fontSize: 11,
    lineHeight: 16,
    opacity: 0.9,
    marginBottom: 10,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  actionText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    marginRight: 8,
  },
});