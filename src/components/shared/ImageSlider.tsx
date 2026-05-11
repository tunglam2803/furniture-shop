import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ImageSlider = ({ image }: { image: string }) => (
  <View style={styles.container}>
    <Image source={{ uri: image }} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: { width: width, height: '100%' },
  image: { width: '100%', height: '100%', borderBottomLeftRadius: 50, resizeMode: 'cover' },
});
export default ImageSlider;