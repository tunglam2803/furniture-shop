import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  FlatList, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Import cái này
import { Ionicons } from '@expo/vector-icons'; 
import AppText from '../../components/shared/AppText';
import AppButton from '../../components/shared/AppButton';
import CartItem from '../../components/shared/CartItem';
import { useCartStore } from '../../store/cartStore';
import { RootStackParamList } from '../../navigation/types'; // Import đúng file types ông vừa gửi

const CartScreen = () => {
  // ĐỊNH NGHĨA LẠI NAVIGATION Ở ĐÂY ĐỂ NÓ THẤY ĐƯỢC CHECKOUT
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const { cart, subtotal } = useCartStore();
  const [promoCode, setPromoCode] = useState(''); 

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <AppText style={styles.headerTitle}>My cart</AppText>
        </View>
        
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CartItem {...item} />}
          contentContainerStyle={{ padding: 20 }}
        />

        <View style={styles.footer}>
          {/* PHẦN PROMO CODE */}
          <View style={styles.promoContainer}>
            <TextInput
              style={styles.promoInput}
              placeholder="Enter your promo code"
              placeholderTextColor="#999999"
              value={promoCode}
              onChangeText={setPromoCode}
            />
            <TouchableOpacity 
              style={styles.promoButton}
              onPress={() => alert(`Applied: ${promoCode}`)} 
            >
              <Ionicons name="chevron-forward" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* TỔNG TIỀN */}
          <View style={styles.totalRow}>
            <AppText style={styles.totalLabel}>Total:</AppText>
            <AppText style={styles.totalValue}>$ {subtotal().toFixed(2)}</AppText>
          </View>
          
          {/* NÚT CHECK OUT - GIỜ SẼ CHẠY MƯỢT MÀ */}
          <AppButton 
            label="Check out" 
            onPress={() => navigation.navigate('Checkout')}
            disabled={cart.length === 0}
            fullWidth={true}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9', paddingTop: 10 },
  header: { alignItems: 'center', paddingVertical: 15 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  footer: { 
    padding: 20, 
    backgroundColor: '#fff', 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    elevation: 5,
  },
  promoContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  promoInput: { flex: 1, paddingHorizontal: 20, height: 50, fontSize: 16 },
  promoButton: { width: 50, height: 50, backgroundColor: '#303030', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  totalLabel: { fontSize: 20, color: '#808080', fontWeight: 'bold' },
  totalValue: { fontSize: 20, fontWeight: 'bold', color: '#303030' }
});

export default CartScreen;