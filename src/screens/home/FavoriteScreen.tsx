import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FAVORITE_DATA = [
  { id: '1', name: 'Coffee Table', price: 20.0, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000' },
  { id: '2', name: 'Coffee Chair', price: 25.0, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000' },
  { id: '3', name: 'Minimal Stand', price: 50.0, image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000' },
];

const FavoriteScreen = ({ navigation }: any) => {
  
  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>$ {item.price.toFixed(2)}</Text>
      </View>

      <View style={styles.actionButtons}>
        {/* Nút xóa hình tròn viền xám */}
        <TouchableOpacity style={styles.removeBtn}>
          <Ionicons name="close-circle-outline" size={24} color="#303030" />
        </TouchableOpacity>
        
        {/* Nút thêm vào giỏ nền đen nhỏ */}
        <TouchableOpacity style={styles.addSmallBtn}>
          <Ionicons name="bag-add-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER GIỐNG MÀN HOME */}
      <View style={styles.header}>
        <Ionicons name="search" size={24} color="#909090" />
        <Text style={styles.headerTitle}>Favorites</Text>
        <Ionicons name="cart-outline" size={24} color="#909090" />
      </View>

      <FlatList
        data={FAVORITE_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* NÚT ADD ALL TO MY CART */}
      <TouchableOpacity style={styles.addAllBtn}>
        <Text style={styles.addAllText}>Add all to my cart</Text>
      </TouchableOpacity>

      {/* BOTTOM NAVIGATION (Fake cho đúng layout) */}
      <View style={styles.bottomTab}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="home-outline" size={24} color="#909090" />
        </TouchableOpacity>
        <TouchableOpacity>
            <Ionicons name="bookmark" size={24} color="black" />
            <View style={styles.activeUnderline} />
        </TouchableOpacity>
        <TouchableOpacity><Ionicons name="notifications-outline" size={24} color="#909090" /></TouchableOpacity>
        <TouchableOpacity><Ionicons name="person-outline" size={24} color="#909090" /></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', 
    paddingHorizontal: 20, paddingVertical: 15 
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#303030' },
  
  listContent: { paddingHorizontal: 20, paddingBottom: 160 }, // Padding rộng để không bị nút che
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
    position: 'absolute', bottom: 90, left: 20, right: 20,
    height: 56, backgroundColor: '#303030', borderRadius: 14,
    justifyContent: 'center', alignItems: 'center', elevation: 5
  },
  addAllText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },

  bottomTab: {
    position: 'absolute', bottom: 0, left: 0, right: 0, height: 70, 
    backgroundColor: '#FFFFFF', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    elevation: 20, shadowColor: '#000', shadowOpacity: 0.1,
  },
  activeUnderline: { width: 4, height: 4, borderRadius: 2, backgroundColor: '#303030', marginTop: 4, alignSelf: 'center' }
});

export default FavoriteScreen;