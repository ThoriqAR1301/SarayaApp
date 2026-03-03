import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Modal,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from "expo-router"; 

const { width, height } = Dimensions.get('window');

export default function Dashboard() {
  const [streakVisible, setStreakVisible] = useState(false);

  const days = ['S', 'S', 'R', 'K', 'J', 'S', 'M'];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Selamat datang,</Text>
            <Text style={styles.userName}>Gloria!</Text>
          </View>
          <View style={styles.headerIcons}>
            {/* Tombol Petir dengan Fungsi Pop-up */}
            <TouchableOpacity 
              style={styles.iconBtn} 
              onPress={() => setStreakVisible(true)}
            >
              <MaterialCommunityIcons name="lightning-bolt-outline" size={28} color="#555" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn} onPress={() => router.push('/notif')}>
              <Ionicons name="notifications-outline" size={28} color="#555" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner Utama */}
        <View style={styles.mainBanner}>
          <Image 
            source={require('../../assets/images/cwe.png')} 
            style={styles.bannerImage} 
            resizeMode="contain" 
          />
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Dasar Keuangan Bisnis</Text>
            <Text style={styles.bannerDesc}>
              Sukses butuh perjuangan, jangan sendirian. Rina siap menemani, ayo lanjutkan belajar!
            </Text>
            <TouchableOpacity style={styles.lanjutBelajarBtn} onPress={() => router.push('/materi')}>
              <Text style={styles.lanjutText}>Lanjut Belajar</Text>
              <Ionicons name="play-circle" size={32} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsRow}>
          <View style={[styles.statsCard, { backgroundColor: '#648CF4' }]}>
            <Image source={require('../../assets/images/xp.png')} style={styles.statsIcon} />
            <View>
              <Text style={styles.statsValue}>1000</Text>
              <Text style={styles.statsLabel}>Total Poin</Text>
            </View>
          </View>
          <View style={[styles.statsCard, { backgroundColor: '#F45161' }]}>
            <Image source={require('../../assets/images/coin.png')} style={styles.statsIcon} />
            <View>
              <Text style={styles.statsValue}>200</Text>
              <Text style={styles.statsLabel}>Koin</Text>
            </View>
          </View>
        </View>

        {/* Layanan Bisnis */}
        <Text style={styles.sectionTitle}>Layanan Bisnis</Text>
        <View style={styles.statsRow}>
          <TouchableOpacity style={styles.serviceCard} onPress={() => router.push('/celve')}>
            <View style={styles.proBadge}><Text style={styles.proText}>Pro</Text></View>
            <Image source={require('../../assets/images/elve.png')} style={styles.serviceImage} />
            <Text style={styles.serviceLabel}>Chat Elve</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceCard} onPress={() => router.push('/track')}>
            <View style={styles.proBadge}><Text style={styles.proText}>Pro</Text></View>
            <Image source={require('../../assets/images/book.png')} style={styles.serviceImage} />
            <Text style={styles.serviceLabel}>Track Keuangan</Text>
          </TouchableOpacity>
        </View>

        {/* Special Untuk Kamu */}
        <Text style={styles.sectionTitle}>Special Untuk Kamu</Text>
        <View style={styles.specialCard}>
          <Image source={require('../../assets/images/puzzle.png')} style={styles.puzzleImage} />
          <View style={styles.specialContent}>
            <Text style={styles.specialSub}>Kumpulkan XP dan dapatkan hadiah!</Text>
            <Text style={styles.specialTitle}>Ikuti Tantangan{"\n"}Mingguan</Text>
            <TouchableOpacity style={styles.klikBtn}>
              <Text style={styles.klikText}>Klik Di sini</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dotsWrapper}>
            <View style={[styles.dot, { opacity: 0.3 }]} />
            <View style={[styles.dot, { opacity: 0.3 }]} />
            <View style={styles.dot} />
            <View style={[styles.dot, { opacity: 0.3 }]} />
          </View>
        </View>

        <Text style={styles.disclaimer}>
          Disclaimer: Konten ini bersifat edukatif dan bukan merupakan saran keuangan.
        </Text>
      </ScrollView>

      {/* POP UP STREAK BELAJAR (100% AI CLONING) */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={streakVisible}
        onRequestClose={() => setStreakVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Tombol X Close */}
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setStreakVisible(false)}
            >
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>

            {/* Header Streak */}
            <View style={styles.streakHeaderRow}>
              <View>
                <Text style={styles.streakTitleText}>Streak Belajar Kamu</Text>
                <View style={styles.streakValueContainer}>
                  <Text style={styles.streakValue}>20</Text>
                  <Text style={styles.streakUnit}> Hari</Text>
                </View>
              </View>
              <MaterialCommunityIcons name="lightning-bolt" size={80} color="#C61A24" />
            </View>

            {/* Kalender Mingguan Merah */}
            <View style={styles.streakCalendar}>
              {days.map((day, index) => (
                <View key={index} style={styles.dayColumn}>
                  <Text style={styles.dayText}>{day}</Text>
                  <View style={[styles.dayCircle, index === 0 ? styles.activeDay : styles.inactiveDay]} />
                </View>
              ))}
            </View>

            {/* Reward Section */}
            <View style={styles.rewardBox}>
              <Text style={styles.rewardTitle}>Reward untuk kamu!</Text>
              <View style={styles.xpBadge}>
                <Image source={require('../../assets/images/xp.png')} style={styles.xpMiniIcon} />
                <Text style={styles.xpText}>30</Text>
              </View>
              <Text style={styles.rewardDesc}>Kumpulkan poin dan dapatkan hadiahnya</Text>
            </View>

            {/* Tombol Klaim */}
            <TouchableOpacity 
              style={styles.claimBtn}
              onPress={() => setStreakVisible(false)}
            >
              <Text style={styles.claimBtnText}>Klaim Sekarang!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FE' },
  scrollContent: { padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, marginTop: 20 },
  welcomeText: { fontSize: 24, color: '#333', fontWeight: '500' },
  userName: { fontSize: 24, color: '#333', fontWeight: '300', marginTop: -5 },
  headerIcons: { flexDirection: 'row' },
  iconBtn: { marginLeft: 15 },
  
  // Banner & Stats Styles
  mainBanner: { backgroundColor: '#9B1B21', borderRadius: 25, height: 200, flexDirection: 'row', padding: 15, overflow: 'hidden' },
  bannerImage: { width: '40%', height: '110%', position: 'absolute', bottom: 0, left: 10 },
  bannerTextContainer: { flex: 1, marginLeft: '40%', justifyContent: 'center' },
  bannerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  bannerDesc: { color: 'white', fontSize: 11, opacity: 0.9, lineHeight: 16 },
  lanjutBelajarBtn: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  lanjutText: { color: 'white', marginRight: 10, fontWeight: '500' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  statsCard: { width: '48%', height: 60, borderRadius: 15, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 },
  statsIcon: { width: 30, height: 30, marginRight: 10 },
  statsValue: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  statsLabel: { color: 'white', fontSize: 10 },

  // Service & Special Styles
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#444', marginTop: 25, marginBottom: 15 },
  serviceCard: { width: '48%', height: 140, backgroundColor: 'white', borderRadius: 20, alignItems: 'center', justifyContent: 'center', elevation: 3 },
  proBadge: { position: 'absolute', top: 10, right: 10, backgroundColor: '#FFD700', paddingHorizontal: 8, borderRadius: 5 },
  proText: { fontSize: 10, fontWeight: 'bold', color: 'white' },
  serviceImage: { width: 60, height: 60, marginBottom: 10 },
  serviceLabel: { fontSize: 12, color: '#666', fontWeight: '500' },
  specialCard: { backgroundColor: '#FFB5B5', borderRadius: 20, padding: 20, flexDirection: 'row', alignItems: 'center', height: 160, position: 'relative' },
  puzzleImage: { width: 100, height: 100, marginRight: 10 },
  specialContent: { flex: 1 },
  specialSub: { fontSize: 10, color: '#C61A24' },
  specialTitle: { fontSize: 20, fontWeight: 'bold', color: 'white', marginVertical: 5, lineHeight: 24 },
  klikBtn: { backgroundColor: '#C61A24', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 10, alignSelf: 'flex-start' },
  klikText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  dotsWrapper: { position: 'absolute', bottom: 12, left: 0, right: 0, flexDirection: 'row', justifyContent: 'center' },
  dot: { width: 7, height: 7, borderRadius: 3.5, backgroundColor: 'white', marginHorizontal: 4 },
  disclaimer: { fontSize: 10, color: '#999', textAlign: 'center', marginTop: 30, marginBottom: 90 },

  // STYLES POP UP (STREAK)
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: width * 0.85, backgroundColor: 'white', borderRadius: 30, padding: 25, alignItems: 'center' },
  closeButton: { alignSelf: 'flex-end' },
  closeText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  streakHeaderRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 20 },
  streakTitleText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  streakValueContainer: { flexDirection: 'row', alignItems: 'baseline' },
  streakValue: { fontSize: 48, fontWeight: 'bold', color: '#333' },
  streakUnit: { fontSize: 20, color: '#333' },
  streakCalendar: { backgroundColor: '#C61A24', width: '115%', flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 15, justifyContent: 'space-around', marginBottom: 20 },
  dayColumn: { alignItems: 'center' },
  dayText: { color: 'white', fontWeight: 'bold', marginBottom: 8 },
  dayCircle: { width: 30, height: 30, borderRadius: 15 },
  activeDay: { backgroundColor: '#FFB5B5' }, // Warna merah muda untuk hari yang sudah dicentang
  inactiveDay: { backgroundColor: 'rgba(255,255,255,0.4)' },
  rewardBox: { alignItems: 'center', marginBottom: 20 },
  rewardTitle: { fontSize: 16, color: '#666', fontWeight: 'bold', marginBottom: 10 },
  xpBadge: { backgroundColor: '#FFB129', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 10 },
  xpMiniIcon: { width: 25, height: 25, marginRight: 8 },
  xpText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  rewardDesc: { fontSize: 12, color: '#666', marginTop: 15 },
  claimBtn: { backgroundColor: '#C61A24', width: '100%', paddingVertical: 15, borderRadius: 20, alignItems: 'center' },
  claimBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});