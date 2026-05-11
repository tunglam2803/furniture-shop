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
  { id: '1', name: 'Black Jack Chair', price: 25.0, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000' },
  { id: '2', name: 'Minimal Stand', price: 50.0, image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000' },
  { id: '3', name: 'Coffee Table', price: 20.0, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000' },
  { id: '4', name: 'Modern Sofa', price: 120.0, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000' },
];

const HomeScreen = ({ navigation }: any) => {
  const [activeCat, setActiveCat] = useState('Popular');

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
        data={MOCK_PRODUCTS}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <ProductCard 
            name={item.name} 
            price={item.price} 
            image={item.image}
            onPress={() => navigation.navigate('ProductDetail')} 
          />
        )}
      />

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home" size={24} color="black" />
          <View style={styles.activeUnderline} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Favorite')}>
          <Ionicons name="bookmark-outline" size={24} color="#909090" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Ionicons name="notifications-outline" size={24} color="#909090" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Ionicons name="person-outline" size={24} color="#909090" /></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 10 },
  headerSmall: { fontSize: 16, color: '#909090' },
  headerLarge: { fontSize: 24, fontWeight: 'bold', color: '#303030' },
  row: { justifyContent: 'space-between', paddingHorizontal: 20 },
  bottomTab: {
    position: 'absolute', bottom: 0, left: 0, right: 0, height: 70, 
    backgroundColor: '#FFFFFF', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    elevation: 20, shadowColor: '#000', shadowOpacity: 0.1,
  },
  tabItem: { alignItems: 'center' },
  activeUnderline: { width: 4, height: 4, borderRadius: 2, backgroundColor: '#303030', marginTop: 4 }
});

export default HomeScreen;