import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProductCard from '../../components/shared/ProductCard';
import CategoryItem from '../../components/shared/CategoryItem';

const CATEGORIES = [
  { id: '1', name: 'Popular', icon: 'star-outline' },
  { id: '2', name: 'Chair', icon: 'bed-outline' },
  { id: '3', name: 'Table', icon: 'square-outline' },
  { id: '4', name: 'Armchair', icon: 'apps-outline' },
  { id: '5', name: 'Bed', icon: 'moon-outline' },
];

const MOCK_PRODUCTS = [
  // CHAIRS
  { id: '1', name: 'Black Jack Chair', price: 25.0, category: 'Chair', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000' },
  { id: '2', name: 'Velvet Lounge Chair', price: 45.0, category: 'Chair', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1000' },
  { id: '3', name: 'School Simple Chair', price: 15.0, category: 'Chair', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000' },
  
  // TABLES
  { id: '4', name: 'Minimal Stand', price: 50.0, category: 'Table', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000' },
  { id: '5', name: 'Coffee Table', price: 20.0, category: 'Table', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000' },
  { id: '6', name: 'Wooden Dining Table', price: 85.0, category: 'Table', image: 'https://images.unsplash.com/photo-1577146333355-bd1e8e195bb3?q=80&w=1000' },
  
  // ARMCHAIRS
  { id: '7', name: 'Modern Sofa', price: 120.0, category: 'Armchair', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000' },
  { id: '8', name: 'Grey Soft Armchair', price: 95.0, category: 'Armchair', image: 'https://images.unsplash.com/photo-1598191950976-3b782421856d?q=80&w=1000' },
  
  // BEDS
  { id: '9', name: 'Elegant King Bed', price: 210.0, category: 'Bed', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000' },
  { id: '10', name: 'Minimalist Twin Bed', price: 150.0, category: 'Bed', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000' },
];

const HomeScreen = ({ navigation }: any) => {
  const [activeCat, setActiveCat] = useState('Popular');

  // Logic lọc sản phẩm dựa trên Category đang chọn
  const filteredProducts = activeCat === 'Popular' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(product => product.category === activeCat);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons name="search" size={24} color="#909090" />
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.headerSmall}>Make home</Text>
          <Text style={styles.headerLarge}>BEAUTIFUL</Text>
        </View>
        <Ionicons name="cart-outline" size={24} color="#909090" />
      </View>

      {/* CATEGORY TABS */}
      <View style={{ height: 100, marginTop: 20 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 20 }}>
          {CATEGORIES.map((item) => (
            <CategoryItem
              key={item.id}
              name={item.name}
              icon={item.icon}
              isActive={activeCat === item.name}
              onPress={() => setActiveCat(item.name)}
            />
          ))}
        </ScrollView>
      </View>

      {/* PRODUCT GRID */}
      <FlatList
        data={filteredProducts} // Hiển thị data đã qua bộ lọc
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <ProductCard 
            name={item.name} 
            price={item.price} 
            image={item.image}
            onPress={() => navigation.navigate('ProductDetail', { product: item })} 
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingTop: 10 },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    marginTop: 15 
  },
  headerSmall: { fontSize: 16, color: '#909090', textTransform: 'uppercase' },
  headerLarge: { fontSize: 24, fontWeight: 'bold', color: '#303030', fontFamily: 'serif' },
  row: { 
    justifyContent: 'space-between', 
    paddingHorizontal: 20 
  },
});

export default HomeScreen;