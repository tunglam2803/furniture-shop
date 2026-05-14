import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';
import AuthStack from './AuthStack';
import MainTab from './MainTab';
import colors from '../theme/colors';
import ProductDetailScreen from '../screens/home/ProductDetailScreen';

// 1. IMPORT MÀN HÌNH CHECKOUT CỦA ÔNG VÀO ĐÂY
import CheckoutScreen from '../screens/commerce/CheckoutScreen';
import SuccessScreen from '../screens/commerce/SuccessScreen';

const Root = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const [loading, setLoading] = useState(true);

  // Giả lập check token lúc khởi tạo app
  useEffect(() => {
    async function bootstrap() {
      try {
        await new Promise(r => setTimeout(r, 500)); 
      } finally {
        setLoading(false);
      }
    }
    bootstrap();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        {/* 
            Đưa cả 2 vào cùng Stack để có thể dùng navigation.navigate('Main') 
            từ các màn hình trong AuthStack (Login/Signup) 
        */}
        <Root.Screen name="Auth" component={AuthStack} />
        <Root.Screen name="Main" component={MainTab} />
        <Root.Screen name="ProductDetail" component={ProductDetailScreen} />
        
        {/* 2. ĐĂNG KÝ MÀN HÌNH CHECKOUT VÀO STACK */}
        <Root.Screen name="Checkout" component={CheckoutScreen} />
        <Root.Screen name="Success" component={SuccessScreen} />
      </Root.Navigator>
    </NavigationContainer>
  );
}