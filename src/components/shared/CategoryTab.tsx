import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const CATEGORIES = ['All', 'Chair', 'Table', 'Armchair', 'Bed'];

const CategoryTab = () => {
  const [active, setActive] = useState('All');

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={CATEGORIES}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => setActive(item)}
            style={[styles.tab, active === item && styles.activeTab]}
          >
            <Text style={[styles.text, active === item && styles.activeText]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  tab: { paddingHorizontal: 20, paddingVertical: 8, marginRight: 10, borderRadius: 20, backgroundColor: '#F0F0F0' },
  activeTab: { backgroundColor: '#303030' },
  text: { color: '#909090', fontWeight: '600' },
  activeText: { color: '#FFFFFF' },
});

export default CategoryTab;