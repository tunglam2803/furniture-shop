import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import { useCartStore } from '../../store/cartStore';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartItem = ({ id, name, price, image, quantity }: CartItemProps) => {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useCartStore();

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <View style={styles.headerRow}>
          <AppText style={styles.name}>{name}</AppText>
          <TouchableOpacity onPress={() => removeFromCart(id)}>
            <AppText style={{ color: '#FF0000', fontWeight: 'bold' }}>X</AppText>
          </TouchableOpacity>
        </View>
        <AppText style={styles.price}>$ {price.toFixed(2)}</AppText>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decrementQuantity(id)} style={styles.btn}>
            <AppText style={styles.btnText}>-</AppText>
          </TouchableOpacity>
          <AppText style={styles.quantity}>{quantity.toString().padStart(2, '0')}</AppText>
          <TouchableOpacity onPress={() => incrementQuantity(id)} style={styles.btn}>
            <AppText style={styles.btnText}>+</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 10, marginBottom: 15, backgroundColor: '#fff', borderRadius: 10 },
  image: { width: 100, height: 100, borderRadius: 10, backgroundColor: '#F0F0F0' },
  details: { flex: 1, marginLeft: 15, justifyContent: 'space-between' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between' },
  name: { fontSize: 14, color: '#606060' },
  price: { fontSize: 16, fontWeight: 'bold' },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  btn: { backgroundColor: '#E0E0E0', borderRadius: 6, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' },
  btnText: { fontSize: 18 },
  quantity: { marginHorizontal: 15, fontSize: 16 }
});

export default CartItem;