import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RatingStars = ({ rating, reviews }: { rating: number, reviews: number }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
    <Ionicons name="star" size={20} color="#F2C94C" />
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 8 }}>{rating}</Text>
    <Text style={{ color: '#909090', marginLeft: 10 }}>({reviews} reviews)</Text>
  </View>
);
export default RatingStars;