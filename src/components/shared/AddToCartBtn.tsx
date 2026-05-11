import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddToCartBtn = ({ title = "Add to cart", onPress }: any) => (
  <TouchableOpacity style={styles.btn} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: { flex: 1, height: 60, backgroundColor: '#303030', borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  text: { color: '#FFF', fontSize: 18, fontWeight: '600' }
});
export default AddToCartBtn;