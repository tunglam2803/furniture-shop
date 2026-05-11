import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ProductProps {
  name?: string;
  price?: number;
  image?: string;
  onPress?: () => void;
}

const ProductCard = ({ name, price, image, onPress }: ProductProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: image || 'https://via.placeholder.com/150' }} 
          style={styles.image} 
        />
        <TouchableOpacity style={styles.addToCartBtn}>
          <Ionicons name="bag-add" size={18} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.nameText} numberOfLines={1}>{name || 'Product Name'}</Text>
      <Text style={styles.priceText}>$ {price ? price.toFixed(2) : '0.00'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { width: '48%', marginBottom: 20 },
  imageContainer: { position: 'relative', borderRadius: 16, overflow: 'hidden' },
  image: { width: '100%', height: 180, borderRadius: 16, resizeMode: 'cover' },
  addToCartBtn: {
    position: 'absolute', bottom: 10, right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, padding: 8,
  },
  nameText: { fontSize: 14, color: '#606060', marginTop: 10 },
  priceText: { fontSize: 16, fontWeight: 'bold', color: '#303030', marginTop: 4 },
});

export default ProductCard;