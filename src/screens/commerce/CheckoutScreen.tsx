import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  TouchableOpacity,
  SafeAreaView 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../../components/shared/AppText';
import AppButton from '../../components/shared/AppButton';
import { useCartStore } from '../../store/cartStore';
import { RootStackParamList } from '../../navigation/types';

const CheckoutScreen = () => {
  // KHAI BÁO NAVIGATION ĐÚNG CHUẨN ĐỂ THẤY ĐƯỢC MÀN SUCCESS
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const { subtotal } = useCartStore();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Bruno Fernandes');
  const [address, setAddress] = useState('25 rue Robert Latouche, Nice, 06200, France');

  const orderAmount = subtotal();
  const shippingFee = 5.0;
  const totalAmount = orderAmount + shippingFee;

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <AppText style={styles.headerTitle}>Check out</AppText>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* SHIPPING ADDRESS */}
        <View style={styles.sectionHeader}>
          <AppText style={styles.sectionLabel}>Shipping Address</AppText>
          <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
            <Ionicons name="create-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          {isEditing ? (
            <View>
              <TextInput style={styles.inputBold} value={name} onChangeText={setName} placeholder="Name" />
              <TextInput style={styles.inputSmall} value={address} onChangeText={setAddress} multiline placeholder="Address" />
            </View>
          ) : (
            <View>
              <AppText style={styles.cardTitle}>{name}</AppText>
              <View style={styles.divider} />
              <AppText style={styles.cardSubText}>{address}</AppText>
            </View>
          )}
        </View>

        {/* PAYMENT */}
        <View style={styles.sectionHeader}>
          <AppText style={styles.sectionLabel}>Payment</AppText>
        </View>
        <View style={styles.card}>
          <View style={styles.paymentRow}>
            <Ionicons name="card" size={24} color="#EB001B" style={{marginRight: 15}} />
            <AppText style={styles.cardTitle}>**** **** **** 3947</AppText>
          </View>
        </View>

        {/* DELIVERY METHOD */}
        <View style={styles.sectionHeader}>
          <AppText style={styles.sectionLabel}>Delivery method</AppText>
        </View>
        <View style={styles.card}>
          <View style={styles.deliveryRow}>
            <AppText style={styles.deliveryBrand}>DHL</AppText>
            <AppText style={styles.cardTitle}>Fast (2-3days)</AppText>
          </View>
        </View>

        {/* SUMMARY */}
        <View style={styles.summaryCard}>
          <View style={styles.totalRow}>
            <AppText style={styles.totalLabel}>Order:</AppText>
            <AppText style={styles.totalPrice}>$ {orderAmount.toFixed(2)}</AppText>
          </View>
          <View style={styles.totalRow}>
            <AppText style={styles.totalLabel}>Delivery:</AppText>
            <AppText style={styles.totalPrice}>$ {shippingFee.toFixed(2)}</AppText>
          </View>
          <View style={styles.totalRow}>
            <AppText style={styles.totalGrandLabel}>Total:</AppText>
            <AppText style={styles.totalGrandPrice}>$ {totalAmount.toFixed(2)}</AppText>
          </View>
        </View>
      </ScrollView>

      {/* NÚT SUBMIT */}
      <View style={styles.footer}>
        <AppButton 
          label="SUBMIT ORDER" 
          onPress={() => navigation.navigate('Success')} // LỆNH NHẢY TRANG MƯỢT MÀ
          style={styles.submitBtn} 
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingTop: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  headerTitle: { fontSize: 16, fontWeight: 'bold' },
  content: { padding: 20 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginTop: 15 },
  sectionLabel: { fontSize: 16, color: '#909090', fontWeight: '600' },
  card: { backgroundColor: '#FFF', borderRadius: 8, padding: 15, marginBottom: 20, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#303030' },
  cardSubText: { fontSize: 14, color: '#808080', lineHeight: 22, marginTop: 10 },
  divider: { height: 1, backgroundColor: '#F0F0F0', marginTop: 10 },
  paymentRow: { flexDirection: 'row', alignItems: 'center' },
  deliveryRow: { flexDirection: 'row', alignItems: 'center' },
  deliveryBrand: { color: '#E5A000', fontWeight: 'bold', marginRight: 15, fontSize: 18 },
  summaryCard: { marginTop: 10, paddingHorizontal: 10 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  totalLabel: { color: '#808080', fontSize: 16 },
  totalPrice: { fontWeight: 'bold', fontSize: 16 },
  totalGrandLabel: { fontSize: 18, color: '#808080', fontWeight: 'bold' },
  totalGrandPrice: { fontSize: 18, fontWeight: 'bold' },
  footer: { padding: 20 },
  submitBtn: { backgroundColor: '#242424', height: 60, borderRadius: 8 },
  inputBold: { fontSize: 16, fontWeight: 'bold', borderBottomWidth: 1, borderColor: '#DDD', marginBottom: 10, paddingVertical: 5 },
  inputSmall: { fontSize: 14, color: '#808080', borderBottomWidth: 1, borderColor: '#DDD', paddingVertical: 5 }
});

export default CheckoutScreen;