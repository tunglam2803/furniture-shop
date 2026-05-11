import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Hoặc thư viện icon nhóm dùng

const SearchBar = () => (
  <View style={styles.container}>
    <Ionicons name="search" size={20} color="#909090" />
    <TextInput 
      style={styles.input} 
      placeholder="Search furniture" 
      placeholderTextColor="#909090"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    margin: 15,
  },
  input: { flex: 1, marginLeft: 10, fontSize: 16 },
});

export default SearchBar;