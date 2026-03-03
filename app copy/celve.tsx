import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Menu, SquarePen, Send, Check } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function ElveChat() {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Menu color="white" size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Elve</Text>
        <TouchableOpacity>
          <SquarePen color="white" size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.chatContainer}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* CHAT SESSION 1 */}
        <View style={styles.userChatWrapper}>
          <View style={styles.userBubble}>
            <Text style={styles.userText}>Beli bensin 20rb</Text>
          </View>
        </View>

        <View style={styles.aiCard}>
          <Text style={styles.cardHeader}>Data yang akan disimpan:</Text>
          <View style={styles.cardContent}>
            <Text style={styles.cardLabel}>Tipe: <Text style={styles.cardValue}>expense</Text></Text>
            <Text style={styles.cardLabel}>Jumlah: <Text style={styles.cardValue}>Rp 20,000</Text></Text>
            <Text style={styles.cardLabel}>Kategori: <Text style={styles.cardValue}>makan</Text></Text>
            <Text style={styles.cardLabel}>Keterangan: <Text style={styles.cardValue}>Pembelian bensin</Text></Text>
            <Text style={styles.cardLabel}>Tanggal: <Text style={styles.cardValue}>2025-09-17</Text></Text>
          </View>
          <Text style={styles.cardFooterText}>Apakah data ini sudah benar? Klik untuk simpan atau untuk batal.</Text>
        </View>

        <View style={styles.userChatWrapper}>
          <View style={styles.userBubble}>
            <Text style={styles.userText}>catat beli bensin 20 rb</Text>
          </View>
        </View>

        <View style={styles.aiCard}>
          <Text style={[styles.cardHeader, { color: '#64FFDA' }]}>Data berhasil disimpan!</Text>
          <View style={styles.cardContent}>
            <Text style={styles.cardLabelBold}>Detail:</Text>
            <Text style={styles.cardLabel}>Tipe: Pengeluaran</Text>
            <Text style={styles.cardLabel}>Jumlah: Rp200.000</Text>
            <Text style={styles.cardLabel}>Kategori: makan</Text>
            <Text style={styles.cardLabel}>Keterangan: Pembelian bensin</Text>
            <Text style={styles.cardLabel}>Tanggal: 17 September 2025</Text>
          </View>
        </View>

        {/* CHAT SESSION 2 (NYAMBUNG KE BAWAH) */}
        <View style={styles.userChatWrapper}>
          <View style={styles.userBubble}>
            <Text style={styles.userText}>I just got a $500 payment from a design client</Text>
          </View>
        </View>

        <View style={styles.aiBubble}>
          <Text style={styles.aiText}>
            Nice! I've logged $500 as income from design services. That adds to your monthly profit.
          </Text>
        </View>

        <View style={styles.userChatWrapper}>
          <View style={styles.userBubble}>
            <Text style={styles.userText}>Is my business healthy?</Text>
          </View>
        </View>

        <View style={styles.aiBubble}>
          <Text style={styles.aiText}>
            This month, expenses are 65% of your revenue. That's a bit high, ideally it should be under 50%. You'll want to cut costs to stay healthier.
          </Text>
        </View>

        <View style={styles.userChatWrapper}>
          <View style={styles.userBubble}>
            <Text style={styles.userText}>How's my cashflow this week?</Text>
          </View>
        </View>

        <View style={styles.aiBubble}>
          <Text style={styles.aiText}>
            This week you earned $950 and spent $700. That leaves you with a $250 surplus. Good job your cashflow is positive 👍
          </Text>
        </View>

      </ScrollView>

      {/* INPUT AREA */}
      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Message Elve..." 
            placeholderTextColor="#888"
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.sendButton}>
            <Send color="#041E42" size={18} />
          </TouchableOpacity>
        </View>
        <Text style={styles.disclaimer}>Elve can make mistakes. Consider checking important information.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1C22', // Dark background sesuai gambar
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
    marginTop: 40,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  userChatWrapper: {
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  userBubble: {
    backgroundColor: '#A7F3F0', // Warna Toska muda (cyan)
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    borderBottomRightRadius: 2,
    maxWidth: '85%',
  },
  userText: {
    color: '#000',
    fontSize: 15,
  },
  aiBubble: {
    backgroundColor: '#2D313E', // Background abu-abu gelap bubble AI
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    borderBottomLeftRadius: 2,
    maxWidth: '85%',
    marginVertical: 10,
  },
  aiText: {
    color: '#E0E0E0',
    fontSize: 15,
    lineHeight: 20,
  },
  aiCard: {
    backgroundColor: '#2D313E',
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: '#444',
    maxWidth: '90%',
  },
  cardHeader: {
    color: '#A7F3F0',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    gap: 4,
  },
  cardLabel: {
    color: '#E0E0E0',
    fontSize: 14,
  },
  cardLabelBold: {
    color: '#A7F3F0',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  cardValue: {
    color: '#A7F3F0',
    fontWeight: '500',
  },
  cardFooterText: {
    color: '#BBB',
    fontSize: 13,
    marginTop: 15,
    lineHeight: 18,
  },
  inputWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#1A1C22',
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#2D313E',
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
  },
  textInput: {
    flex: 1,
    color: 'white',
    fontSize: 14,
  },
  sendButton: {
    backgroundColor: '#A7F3F0',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disclaimer: {
    textAlign: 'center',
    color: '#666',
    fontSize: 10,
    marginTop: 10,
  },
});