import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Modal,
} from 'react-native';
import { ArrowLeft, X } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function Reward() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* --- POPUP MODAL (image_55843a.png) --- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Tombol Close X Merah */}
            <TouchableOpacity 
              style={styles.closeIconButton} 
              onPress={() => setModalVisible(false)}
            >
              <View style={styles.redCircleX}>
                <X color="white" size={24} strokeWidth={3} />
              </View>
            </TouchableOpacity>

            <Text style={styles.modalText}>
              Saat ini kamu belum dapat klaim hadiah, selesaikan lesson dan raih 3 besar leaderboard bulan ini untuk dapatkan hadiah!
            </Text>
          </View>
        </View>
      </Modal>

      {/* --- HEADER SECTION (NAVY) --- */}
      <View style={styles.headerNavy}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft color="white" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Reward</Text>
          <View style={{ width: 24 }} /> 
        </View>

        <View style={styles.koinCard}>
          <Text style={styles.koinLabel}>Koin Kamu</Text>
          <View style={styles.koinValueRow}>
            <Text style={styles.koinNumber}>200</Text>
            <Image 
              source={require('../../assets/images/coin.png')} 
              style={styles.coinIconLarge} 
            />
          </View>
          
          <TouchableOpacity 
            style={styles.klaimButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.klaimText}>Klaim Hadiah</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subHeaderText}>Ikuti tantangan dan dapatkan hadiahnya!</Text>
      </View>

      {/* --- CONTENT SECTION (SCROLLABLE) --- */}
      <ScrollView 
        style={styles.contentScroll} 
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* TANTANGAN HARIAN */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Tantangan Harian</Text>
            <View style={styles.rewardBadgeRow}>
              <View style={styles.badgeItem}>
                <Image source={require('../../assets/images/xp.png')} style={styles.badgeIcon} />
                <Text style={styles.badgeText}>50</Text>
              </View>
              <View style={styles.badgeItem}>
                <Image source={require('../../assets/images/coin.png')} style={styles.badgeIcon} />
                <Text style={styles.badgeText}>1</Text>
              </View>
            </View>
          </View>

          {/* Progress Item 1 */}
          <View style={styles.progressItem}>
            <Text style={styles.progressLabel}>Dapatkan 30 XP</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '100%' }]} />
            </View>
          </View>

          {/* Progress Item 2 */}
          <View style={styles.progressItem}>
            <Text style={styles.progressLabel}>Selesaikan 10 pertanyaan kuis</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '40%' }]} />
            </View>
          </View>

          {/* Progress Item 3 */}
          <View style={styles.progressItem}>
            <Text style={styles.progressLabel}>Belajar selama 5 menit</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '40%' }]} />
            </View>
          </View>
        </View>

        {/* KUIS MINGGUAN */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Kuis Mingguan</Text>
            <View style={styles.badgeItem}>
                <Image source={require('../../assets/images/xp.png')} style={styles.badgeIcon} />
                <Text style={styles.badgeText}>150</Text>
            </View>
          </View>

          <View style={styles.kuisCardInner}>
            <Text style={styles.kuisInfoText}>Ikut kuis, dapatkan tambahan XP</Text>
            <View style={styles.coinBadgeButton}>
              <Image source={require('../../assets/images/coin.png')} style={styles.badgeIcon} />
              <Text style={styles.coinBadgeText}>10</Text>
            </View>
          </View>
        </View>

        <Text style={styles.disclaimerText}>
          <Text style={{ fontWeight: 'bold' }}>Disclaimer:</Text> Konten ini bersifat edukatif dan bukan merupakan saran keuangan. Untuk keputusan finansial, harap konsultasikan dengan profesional yang berkompeten.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F5F9' },
  headerNavy: {
    backgroundColor: '#041E42',
    paddingBottom: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  topBar: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: '100%', 
    marginBottom: 20 
  },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  koinCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    width: '100%',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  koinLabel: { color: '#FFB129', fontWeight: 'bold', fontSize: 14, marginBottom: 5 },
  koinValueRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  koinNumber: { color: 'white', fontSize: 50, fontWeight: 'bold', marginRight: 10 },
  coinIconLarge: { width: 40, height: 40 },
  klaimButton: { backgroundColor: '#D98E16', paddingVertical: 12, paddingHorizontal: 40, borderRadius: 15 },
  klaimText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  subHeaderText: { color: 'white', marginTop: 20, fontSize: 12, opacity: 0.7, textAlign: 'center' },
  contentScroll: { flex: 1, paddingHorizontal: 20, marginTop: 20 },
  sectionCard: { backgroundColor: 'white', borderRadius: 30, padding: 20, marginBottom: 20, elevation: 4 },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  rewardBadgeRow: { flexDirection: 'row' },
  badgeItem: { flexDirection: 'row', alignItems: 'center', marginLeft: 12 },
  badgeIcon: { width: 22, height: 22, marginRight: 5 },
  badgeText: { fontWeight: 'bold', color: '#444', fontSize: 16 },
  progressItem: { marginBottom: 15 },
  progressLabel: { fontSize: 14, color: '#666', marginBottom: 8 },
  progressBarBg: { height: 14, backgroundColor: '#F0F0F0', borderRadius: 10 },
  progressBarFill: { height: '100%', backgroundColor: '#B51B1B', borderRadius: 10 },
  kuisCardInner: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, backgroundColor: '#F9F9F9', borderRadius: 20 },
  kuisInfoText: { fontSize: 13, color: '#888', flex: 1 },
  coinBadgeButton: { backgroundColor: '#FFB129', flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 12 },
  coinBadgeText: { color: 'black', fontWeight: 'bold', marginLeft: 5 },
  disclaimerText: { fontSize: 11, color: '#999', textAlign: 'center', marginTop: 10, lineHeight: 16 ,marginBottom: 90},

  /* MODAL STYLES */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.85,
    backgroundColor: 'white',
    borderRadius: 45,
    padding: 40,
    alignItems: 'center',
    elevation: 20,
  },
  modalText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#555',
    lineHeight: 28,
  },
  closeIconButton: {
    position: 'absolute',
    top: -15,
    right: -10,
  },
  redCircleX: {
    backgroundColor: '#B51B1B',
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
});