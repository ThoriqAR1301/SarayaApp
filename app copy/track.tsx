import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Menu,
  BarChart3,
  FileText,
  PieChart,
  Target,
  Calendar,
  Box,
  CreditCard,
  Settings,
  DollarSign,
  TrendingUp,
  TrendingDown,
  PiggyBank,
  ChevronDown
} from 'lucide-react-native';

export default function Track() {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER AREA */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.menuButton}>
            <Menu color="white" size={20} />
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Business Finance Dashboard</Text>
            <Text style={styles.headerSubtitle}>Tracking 25 financial records</Text>
          </View>
        </View>

        {/* PICKERS (COUNTRY & CURRENCY) */}
        <View style={styles.pickerRow}>
          <TouchableOpacity style={styles.picker}>
             <Text style={styles.pickerText}>🇺🇸</Text>
             <ChevronDown color="#888" size={16} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.picker}>
             <Text style={styles.pickerText}>Rp</Text>
             <ChevronDown color="#888" size={16} />
          </TouchableOpacity>
        </View>

        {/* HORIZONTAL MINI NAVBAR */}
        <View style={styles.miniNav}>
          <TouchableOpacity style={[styles.navIcon, styles.navIconActive]}>
            <BarChart3 color="#64FFDA" size={18} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navIcon}><FileText color="#888" size={18} /></TouchableOpacity>
          <TouchableOpacity style={styles.navIcon}><PieChart color="#888" size={18} /></TouchableOpacity>
          <TouchableOpacity style={styles.navIcon}><FileText color="#888" size={18} /></TouchableOpacity>
          <TouchableOpacity style={styles.navIcon}><Target color="#888" size={18} /></TouchableOpacity>
          <TouchableOpacity style={styles.navIcon}><Calendar color="#888" size={18} /></TouchableOpacity>
          <TouchableOpacity style={styles.navIcon}><Box color="#888" size={18} /></TouchableOpacity>
          <TouchableOpacity style={styles.navIcon}><CreditCard color="#888" size={18} /></TouchableOpacity>
          <TouchableOpacity style={styles.navIcon}><Settings color="#888" size={18} /></TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.contentScroll} showsVerticalScrollIndicator={false}>
        
        {/* NET WORTH CARD */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardLabel}>Net Worth</Text>
              <Text style={styles.cardValue}>Rp 50,350,000</Text>
              <View style={styles.trendRow}>
                <TrendingUp color="#4CAF50" size={14} />
                <Text style={styles.trendTextGreen}>Total financial position</Text>
              </View>
            </View>
            <View style={styles.iconBox}>
              <DollarSign color="#888" size={24} />
            </View>
          </View>
        </View>

        {/* TOTAL REVENUE CARD */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardLabel}>Total Revenue</Text>
              <Text style={styles.cardValue}>Rp 20,620,000</Text>
              <View style={styles.trendRow}>
                <TrendingUp color="#4CAF50" size={14} />
                <Text style={styles.trendTextGreen}>All-time revenue</Text>
              </View>
            </View>
            <View style={styles.iconBox}>
              <TrendingUp color="#64FFDA" size={24} />
            </View>
          </View>
        </View>

        {/* TOTAL EXPENSES CARD */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardLabel}>Total Expenses</Text>
              <Text style={styles.cardValue}>Rp 200,340,000</Text>
              <View style={styles.trendRow}>
                <TrendingDown color="#FF5252" size={14} />
                <Text style={styles.trendTextRed}>All-time expenses</Text>
              </View>
            </View>
            <View style={styles.iconBox}>
              <CreditCard color="#F06292" size={24} />
            </View>
          </View>
        </View>

        {/* TOTAL PROFIT CARD */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardLabel}>Total Profit</Text>
              <Text style={styles.cardValue}>Rp -179,720,000</Text>
              <View style={styles.trendRow}>
                <TrendingUp color="#4CAF50" size={14} />
                <Text style={styles.trendTextGreen}>Total profit</Text>
              </View>
            </View>
            <View style={styles.iconBox}>
              <PiggyBank color="#BA68C8" size={24} />
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12141D', // Dark Background
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2A2D3A',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuButton: {
    backgroundColor: '#2A2D3A',
    padding: 8,
    borderRadius: 6,
    marginRight: 15,
  },
  headerTitleContainer: {
    flex: 1,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#888',
    fontSize: 12,
    marginTop: 2,
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 20,
  },
  picker: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2D3A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 8,
  },
  pickerText: {
    color: 'white',
    fontSize: 14,
  },
  miniNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1E212B',
    padding: 10,
    borderRadius: 12,
    marginBottom: 20,
  },
  navIcon: {
    padding: 8,
  },
  navIconActive: {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    borderRadius: 8,
  },
  contentScroll: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#1E212B',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#2A2D3A',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    color: '#888',
    fontSize: 12,
    marginBottom: 4,
  },
  cardValue: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  trendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  trendTextGreen: {
    color: '#4CAF50',
    fontSize: 12,
  },
  trendTextRed: {
    color: '#FF5252',
    fontSize: 12,
  },
  iconBox: {
    backgroundColor: '#2A2D3A',
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});