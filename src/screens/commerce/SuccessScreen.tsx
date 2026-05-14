import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../../components/shared/AppText';
import AppButton from '../../components/shared/AppButton';

const SuccessScreen = ({ navigation }: any) => {
  const handleBackToHome = () => {
    // Chỉ chuyển hướng về trang chủ, bỏ qua bước dọn giỏ hàng
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <AppText style={styles.title}>SUCCESS!</AppText>
        <View style={styles.iconContainer}>
          <Ionicons name="checkmark-circle" size={160} color="#27AE60" />
        </View>
        <AppText style={styles.message}>
          Your order will be delivered soon. Thank you for choosing our app!
        </AppText>
      </View>

      <View style={styles.footer}>
        <AppButton label="Track your orders" onPress={() => {}} style={styles.trackBtn} />
        <TouchableOpacity style={styles.homeLink} onPress={handleBackToHome}>
          <AppText style={styles.homeText}>BACK TO HOME</AppText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 },
  title: { fontSize: 32, fontWeight: 'bold', letterSpacing: 2, marginBottom: 40 },
  iconContainer: { marginBottom: 40 },
  message: { fontSize: 18, color: '#606060', textAlign: 'center', lineHeight: 28 },
  footer: { padding: 20, paddingBottom: 40 },
  trackBtn: { backgroundColor: '#242424', height: 60, borderRadius: 8, marginBottom: 25 },
  homeLink: { alignItems: 'center' },
  homeText: { fontSize: 16, fontWeight: 'bold', color: '#303030' }
});

export default SuccessScreen;