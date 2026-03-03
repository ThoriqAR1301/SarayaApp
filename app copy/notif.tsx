import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Bell } from 'lucide-react-native';

export default function Notif() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section - Clean Style */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifikasi</Text>
      </View>

      {/* Empty State Content */}
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          {/* Ukuran dan warna disesuaikan dengan referensi gambar */}
          <Bell size={130} color="#C4C4C4" strokeWidth={1.2} />
        </View>
        <Text style={styles.emptyText}>Belum ada notifikasi</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500', // Medium weight sesuai style gambar
    color: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80, // Memberi sedikit offset ke atas agar presisi di tengah layar
  },
  iconContainer: {
    marginBottom: 25,
  },
  emptyText: {
    fontSize: 16,
    color: '#777', // Warna abu-abu yang agak pudar
    fontWeight: '400',
  },
});