import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CategoryProps {
  name: string;
  icon: string;
  isActive: boolean;
  onPress: () => void;
}

const CategoryItem = ({ name, icon, isActive, onPress }: CategoryProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.iconBox, isActive && styles.activeBox]}>
        <Ionicons 
          name={icon as any} 
          size={24} 
          color={isActive ? "#FFFFFF" : "#909090"} 
        />
      </View>
      <Text style={[styles.categoryText, isActive && styles.activeText]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 16, // Cách nhau 16 theo Figma
    width: 60,
  },
  iconBox: {
    width: 60,
    height: 60,
    backgroundColor: '#F5F5F5', // Nền xám nhạt cho loại thường
    borderRadius: 12, // Bo góc 12
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeBox: {
    backgroundColor: '#303030', // Nền đen cho loại active
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    color: '#909090',
    fontWeight: '500',
  },
  activeText: {
    color: '#303030',
    fontWeight: 'bold',
  },
});

export default CategoryItem;

