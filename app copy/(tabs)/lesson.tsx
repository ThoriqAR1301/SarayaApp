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
import { Check, BookOpen, Lock } from 'lucide-react-native';
import { router } from "expo-router"; 

export default function Lesson() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Dark Blue Header Section */}
        <View style={styles.header}>
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Image source={require('../../assets/images/xp.png')} style={styles.statIcon} />
              <Text style={styles.statValue}>1000</Text>
            </View>
            <View style={styles.statBox}>
              <Image source={require('../../assets/images/coin.png')} style={styles.statIcon} />
              <Text style={styles.statValue}>200</Text>
            </View>
          </View>

          <View style={styles.lessonInfo}>
            <Text style={styles.lessonTitle}>Dasar Keuangan Bisnis</Text>
            <TouchableOpacity style={styles.changeBtn} onPress={() => router.push('/exless')}>
              <Text style={styles.changeBtnText}>Ubah Lesson</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Path / Progress Flow Section */}
        <View style={styles.pathContent}>
          
          {/* Step 1: Completed */}
          <View style={styles.nodeContainer}>
            <View style={[styles.circleNode, { backgroundColor: '#FFB129' }]}>
              <Check color="white" size={40} strokeWidth={3} />
            </View>
            <Text style={styles.nodeLabel}>Definisi Keuangan</Text>
          </View>

          {/* Step 2: Current */}
          <View style={styles.nodeContainer}>
            <View style={[styles.circleNode, { backgroundColor: '#9B1B21' }]}>
              <BookOpen color="white" size={35} />
            </View>
            <Text style={styles.nodeLabel}>Prinsip Pengelolaan</Text>
          </View>

          {/* Level 1 White Box Section */}
          <View style={styles.levelCard}>
             <Text style={styles.levelSubtitle}>Level 1</Text>
             <Text style={styles.levelTitle}>Dasar Keuangan</Text>

             <View style={styles.lockedGrid}>
                {/* Locked Node 1 */}
                <View style={styles.nodeContainer}>
                  <View style={styles.lockedCircle}>
                    <Lock color="#888" size={35} />
                  </View>
                  <Text style={styles.nodeLabel}>Dasar Keuangan</Text>
                </View>

                {/* Locked Node 2 */}
                <View style={styles.nodeContainer}>
                  <View style={styles.lockedCircle}>
                    <Lock color="#888" size={35} />
                  </View>
                  <Text style={styles.nodeLabel}>Istilah Keuangan</Text>
                </View>
             </View>

             {/* Locked Node 3 (Centered) */}
             <View style={styles.nodeContainer}>
                <View style={styles.lockedCircle}>
                  <Lock color="#888" size={35} />
                </View>
                <Text style={styles.nodeLabel}>Perencanaan</Text>
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
    backgroundColor: '#F8F9FE',
  },
  header: {
    backgroundColor: '#041E42', // Deep Navy Blue
    paddingTop: 40,
    paddingBottom: 40,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  statBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  statIcon: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  statValue: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  lessonInfo: {
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.3)',
    width: '100%',
    paddingTop: 15,
  },
  lessonTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  changeBtn: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 10,
  },
  changeBtnText: {
    color: '#888',
    fontSize: 12,
  },
  pathContent: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  nodeContainer: {
    alignItems: 'center',
    marginBottom: 35,
  },
  circleNode: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 10,
  },
  nodeLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
  },
  levelCard: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 30,
    padding: 25,
    alignItems: 'center',
    marginTop: 20,
    elevation: 4,
    marginBottom: 90,
  },
  levelSubtitle: {
    color: '#D68A8E',
    fontSize: 12,
    fontWeight: 'bold',
  },
  levelTitle: {
    color: '#9B1B21',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  lockedGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  lockedCircle: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    backgroundColor: '#C4C4C4', // Grey for locked
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#A0A0A0',
    marginBottom: 10,
  },
});