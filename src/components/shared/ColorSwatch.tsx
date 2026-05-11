import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const COLORS = ['#FFFFFF', '#B4916C', '#E4CBAD'];

const ColorSwatch = () => {
  const [selected, setSelected] = useState(COLORS[1]);
  return (
    <View style={styles.container}>
      {COLORS.map(c => (
        <TouchableOpacity 
          key={c} 
          onPress={() => setSelected(c)}
          style={[styles.circle, { backgroundColor: c }, selected === c && styles.active]} 
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { position: 'absolute', left: 20, top: 100, backgroundColor: '#FFF', borderRadius: 30, padding: 10, elevation: 5 },
  circle: { width: 24, height: 24, borderRadius: 12, marginVertical: 8, borderWidth: 1, borderColor: '#EEE' },
  active: { borderWidth: 4, borderColor: '#909090' }
});
export default ColorSwatch;