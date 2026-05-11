import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeartButton = ({ size = 24 }) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <TouchableOpacity onPress={() => setIsFav(!isFav)} style={styles.btn}>
      <Ionicons name={isFav ? "bookmark" : "bookmark-outline"} size={size} color="#303030" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: { width: 50, height: 50, backgroundColor: '#F5F5F5', borderRadius: 12, justifyContent: 'center', alignItems: 'center' }
});
export default HeartButton;