import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// IMPORT STORE CỦA HUY Ở ĐÂY
import { useFavouriteStore } from '../../store/favoriteStore'; 

const COLORS = ['#FFFFFF', '#B4916C', '#E4CBAD'];

const DetailScreen = ({ navigation, route }: any) => {
  // 1. Lấy dữ liệu sản phẩm truyền từ Home sang
  // Nếu route.params trống thì lấy tạm data mặc định để tránh crash
  const product = route.params?.product || {
    id: '1',
    name: 'Minimal Stand',
    price: 50.00,
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000',
    description: 'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is one of the best furniture in this year.'
  };

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(COLORS[1]);

  // 2. Kết nối với Store
  const { favorites, toggleFavorite } = useFavouriteStore();
  
  // Kiểm tra xem sản phẩm này đã nằm trong danh sách yêu thích chưa
  const isFav = favorites.some((item: any) => item.id === product.id);

  return (
    <View style={styles.container}>
      {/* 1. VÙNG ẢNH LỚN & NÚT BACK */}
      <View style={styles.imageSection}>
        <Image 
          source={{ uri: product.image }} // Dùng ảnh từ product
          style={styles.mainImage} 
        />
        
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#303030" />
        </TouchableOpacity>

        <View style={styles.colorSelector}>
          {COLORS.map((color) => (
            <TouchableOpacity 
              key={color}
              onPress={() => setSelectedColor(color)}
              style={[
                styles.colorCircle, 
                { backgroundColor: color }, 
                selectedColor === color && styles.activeColor
              ]}
            />
          ))}
        </View>
      </View>

      {/* 2. PHẦN THÔNG TIN SẢN PHẨM */}
      <ScrollView style={styles.infoSection} showsVerticalScrollIndicator={false}>
        <Text style={styles.productName}>{product.name}</Text>
        
        <View style={styles.priceRow}>
          <Text style={styles.priceText}>$ {product.price.toFixed(2)}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.qtyBtn} onPress={() => quantity > 1 && setQuantity(quantity - 1)}>
              <Ionicons name="remove" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{quantity < 10 ? `0${quantity}` : quantity}</Text>
            <TouchableOpacity style={styles.qtyBtn} onPress={() => setQuantity(quantity + 1)}>
              <Ionicons name="add" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={20} color="#F2C94C" />
          <Text style={styles.ratingText}>4.5</Text>
          <Text style={styles.reviewText}>(50 reviews)</Text>
        </View>

        <Text style={styles.description}>
          {product.description || "Minimal Stand is made of by natural wood. The design that is very simple and minimal. It fits with any kind of home design."}
        </Text>
      </ScrollView>

      {/* 3. VÙNG NÚT HÀNH ĐỘNG - NƠI THAY ĐỔI LOGIC */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={[
            styles.bookmarkBtn, 
            { backgroundColor: isFav ? '#303030' : '#F5F5F5' } // Đổi màu nền khi active
          ]}
          onPress={() => toggleFavorite(product)} // GỌI HÀM TOGGLE TỪ STORE
        >
          <Ionicons 
            name={isFav ? "bookmark" : "bookmark-outline"} // Đổi icon
            size={24} 
            color={isFav ? "#FFFFFF" : "#303030"} // Đổi màu icon
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.addToCartBtn}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ... Styles giữ nguyên như code cũ của Huy
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  imageSection: { width: '100%', height: '45%', position: 'relative' },
  mainImage: { width: '100%', height: '100%', borderBottomLeftRadius: 30, resizeMode: 'cover' },
  backBtn: {
    position: 'absolute', top: 50, left: 20, width: 40, height: 40,
    backgroundColor: '#FFFFFF', borderRadius: 12, justifyContent: 'center', alignItems: 'center',
    elevation: 5, shadowOpacity: 0.1,
  },
  colorSelector: {
    position: 'absolute', left: 20, top: '25%', backgroundColor: '#FFF',
    borderRadius: 30, paddingVertical: 12, paddingHorizontal: 10, elevation: 5,
  },
  colorCircle: { width: 24, height: 24, borderRadius: 12, marginVertical: 10, borderWidth: 1, borderColor: '#EEE' },
  activeColor: { borderWidth: 3, borderColor: '#909090' },
  
  infoSection: { flex: 1, paddingHorizontal: 20, marginTop: 20 },
  productName: { fontSize: 30, fontWeight: '600', color: '#303030' },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  priceText: { fontSize: 30, fontWeight: 'bold', color: '#303030' },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: { width: 32, height: 32, backgroundColor: '#E0E0E0', borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  qtyText: { marginHorizontal: 15, fontSize: 18, fontWeight: '600' },
  
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  ratingText: { fontSize: 18, fontWeight: 'bold', marginLeft: 8 },
  reviewText: { color: '#909090', marginLeft: 10 },
  description: { color: '#606060', lineHeight: 22, textAlign: 'justify' },

  footer: { flexDirection: 'row', padding: 20, paddingBottom: 30, alignItems: 'center' },
  bookmarkBtn: { width: 60, height: 60, borderRadius: 16, backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  addToCartBtn: { flex: 1, height: 60, backgroundColor: '#303030', borderRadius: 16, justifyContent: 'center', alignItems: 'center', elevation: 5 },
  addToCartText: { color: '#FFF', fontSize: 18, fontWeight: '600' },
});

export default DetailScreen;