import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// 1. IMPORT STORE CỦA HUY VÀO
import { useFavouriteStore } from '../../store/favoriteStore'; 

const FavoriteScreen = ({ navigation }: any) => {
  // 2. LẤY DỮ LIỆU THẬT TỪ STORE
  const { favorites, toggleFavorite } = useFavouriteStore();

  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>$ {item.price.toFixed(2)}</Text>
      </View>

      <View style={styles.actionButtons}>
        {/* Nút xóa - Bấm vào đây để xóa khỏi danh sách */}
        <TouchableOpacity 
          style={styles.removeBtn} 
          onPress={() => toggleFavorite(item)}
        >
          <Ionicons name="close-circle-outline" size={24} color="#303030" />
        </TouchableOpacity>
        
        {/* Nút thêm vào giỏ */}
        <TouchableOpacity style={styles.addSmallBtn}>
          <Ionicons name="bag-add-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons name="search" size={24} color="#909090" />
        <Text style={styles.headerTitle}>Favorites</Text>
        <Ionicons name="cart-outline" size={24} color="#909090" />
      </View>

      {/* DANH SÁCH - DÙNG DATA TỪ STORE */}
      <FlatList
        data={favorites} // <--- Đổi từ FAVORITE_DATA sang favorites
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        // Hiện thông báo nếu chưa có món nào
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center', marginTop: 100 }}>
            <Text style={{ color: '#909090' }}>No favorites yet.</Text>
          </View>
        )}
      />

      {/* NÚT ADD ALL TO MY CART (Chỉ hiện khi có sản phẩm) */}
      {favorites.length > 0 && (
        <TouchableOpacity style={styles.addAllBtn}>
          <Text style={styles.addAllText}>Add all to my cart</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingTop: 10 },
  header: { 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', 
    paddingHorizontal: 20, paddingVertical: 15 
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#303030', textTransform: 'uppercase' },
  
  listContent: { paddingHorizontal: 20, paddingBottom: 80 },
  itemContainer: { 
    flexDirection: 'row', alignItems: 'center', 
    paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#EEE' 
  },
  itemImage: { width: 90, height: 90, borderRadius: 12 },
  itemInfo: { flex: 1, marginLeft: 12 },
  itemName: { fontSize: 14, color: '#606060', fontWeight: '600' },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#303030', marginTop: 5 },
  
  actionButtons: { alignItems: 'center', justifyContent: 'space-between', height: 80 },
  removeBtn: { padding: 2 },
  addSmallBtn: { 
    backgroundColor: '#303030', borderRadius: 8, padding: 6, marginTop: 10 
  },

  addAllBtn: {
    position: 'absolute', bottom: 20, left: 20, right: 20,
    height: 56, backgroundColor: '#303030', borderRadius: 14,
    justifyContent: 'center', alignItems: 'center', elevation: 5
  },
  addAllText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

export default FavoriteScreen;