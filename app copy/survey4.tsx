import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import { router } from "expo-router";
const { width, height } = Dimensions.get('window');

// Data Topik sesuai gambar
const TOPICS = [
  { id: '1', title: 'Kelola Keuangan', img: require('../assets/images/kelola_keuangan.png') },
  { id: '2', title: 'Akses Modal', img: require('../assets/images/akses_modal.png') },
  { id: '3', title: 'Investasi', img: require('../assets/images/investasi.png') },
  { id: '4', title: 'Tabungan', img: require('../assets/images/tabungan.png') },
  { id: '5', title: 'Kelola Arus Kas', img: require('../assets/images/arus_kas.png') },
  { id: '6', title: 'Perencanaan Pajak', img: require('../assets/images/pajak.png') },
  { id: '7', title: 'Asuransi Bisnis', img: require('../assets/images/asuransi.png') },
  { id: '8', title: 'Menyusun anggaran Bisnis', img: require('../assets/images/anggaran.png') },
  { id: '9', title: 'Perencanaan Ekspansi', img: require('../assets/images/ekspansi.png') },
  { id: '10', title: 'Pemasaran Konten', img: require('../assets/images/pemasaran_konten.png') },
  { id: '11', title: 'Strategi KOL', img: require('../assets/images/kol.png') },
  { id: '12', title: 'Pemasaran Digital', img: require('../assets/images/digital.png') },
];

export default function Survey4() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      if (selectedIds.length < 3) { // Limit pilih 3 sesuai instruksi di gambar
        setSelectedIds([...selectedIds, id]);
      }
    }
  };

  const renderItem = ({ item }: { item: typeof TOPICS[0] }) => {
    const isSelected = selectedIds.includes(item.id);
    return (
      <TouchableOpacity
        style={[styles.topicBox, isSelected && styles.selectedBox]}
        onPress={() => toggleSelect(item.id)}
        activeOpacity={0.9}
      >
        <Image source={item.img} style={styles.topicImage} resizeMode="contain" />
        <Text style={styles.topicTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={TOPICS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Image source={require('../assets/images/logosa.png')} style={styles.logo} />
            <Text style={styles.questionText}>Apa jenis topik edukasi yang paling Anda butuhkan?</Text>
            <Text style={styles.subText}>Pilih 3</Text>
          </View>
        }
        contentContainerStyle={styles.scrollContent}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.btnLanjut} activeOpacity={0.8} onPress={() => router.replace("/survey5")}>
          <Text style={styles.btnText}>Lanjut</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 120, // Agar tidak tertutup tombol lanjut
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 30,
  },
  questionText: {
    fontSize: 17,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  subText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  topicBox: {
    width: (width - 70) / 2,
    aspectRatio: 1,
    backgroundColor: '#9B1B21', // Warna merah gelap sesuai gambar
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
  },
  selectedBox: {
    opacity: 1,
    borderWidth: 3,
    borderColor: '#CE444B',
    elevation: 10,
  },
  topicImage: {
    width: '70%',
    height: '60%',
    marginBottom: 8,
  },
  topicTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingVertical: 10,
  },
  btnLanjut: {
    backgroundColor: '#C61A24',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});