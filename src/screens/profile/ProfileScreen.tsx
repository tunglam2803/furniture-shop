import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  SafeAreaView, 
  Image, 
  TouchableOpacity, 
  ScrollView,
  TextInput 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppText from '../../components/shared/AppText';
import { RootStackParamList } from '../../navigation/types';

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // 1. Gắn State để quản lý việc chỉnh sửa thông tin
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Bruno Pham');
  const [email, setEmail] = useState('bruno2003@gmail.com');

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Auth' }], 
    });
  };
  
  const menuItems = [
    { id: '1', title: 'My orders', subtitle: 'Already have 10 orders', icon: 'chevron-forward' },
    { id: '2', title: 'Shipping Addresses', subtitle: '03 Addresses', icon: 'chevron-forward' },
    { id: '3', title: 'Payment Method', subtitle: 'You have 2 cards', icon: 'chevron-forward' },
    { id: '4', title: 'My reviews', subtitle: 'Reviews for 5 items', icon: 'chevron-forward' },
    { id: '5', title: 'Setting', subtitle: 'Notification, Password, FAQ, Contact', icon: 'chevron-forward' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Profile */}
      <View style={styles.header}>
        <Ionicons name="search" size={24} color="#808080" />
        <AppText style={styles.headerTitle}>Profile</AppText>
        <TouchableOpacity onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#808080" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* THÔNG TIN CÁ NHÂN CÓ THỂ CHỈNH SỬA */}
        <View style={styles.profileInfo}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://i.pravatar.cc/150?u=khacloc' }} 
              style={styles.avatar} 
            />
          </View>
          
          <View style={styles.infoText}>
            {isEditing ? (
              <View>
                <TextInput 
                  style={styles.editInputName} 
                  value={name} 
                  onChangeText={setName} 
                  placeholder="Enter your name"
                />
                <TextInput 
                  style={styles.editInputEmail} 
                  value={email} 
                  onChangeText={setEmail} 
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            ) : (
              <View>
                <AppText style={styles.userName}>{name}</AppText>
                <AppText style={styles.userEmail}>{email}</AppText>
              </View>
            )}
          </View>

          {/* Nút bấm để Bật/Tắt chế độ sửa */}
          <TouchableOpacity 
            style={styles.editButton} 
            onPress={() => setIsEditing(!isEditing)}
          >
            <Ionicons 
              name={isEditing ? "checkmark-circle" : "create-outline"} 
              size={28} 
              color={isEditing ? "#27AE60" : "#303030"} 
            />
          </TouchableOpacity>
        </View>

        {/* Danh sách Menu */}
        <View style={styles.menuList}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View>
                <AppText style={styles.menuTitle}>{item.title}</AppText>
                <AppText style={styles.menuSubtitle}>{item.subtitle}</AppText>
              </View>
              <Ionicons name={item.icon as any} size={20} color="#303030" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingTop: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  headerTitle: { fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase' },
  content: { paddingHorizontal: 20 },
  
  profileInfo: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 30,
    backgroundColor: '#F9F9F9', // Thêm nền mờ để nổi bật khu vực thông tin
    padding: 15,
    borderRadius: 12
  },
  avatarContainer: { width: 80, height: 80, borderRadius: 40, overflow: 'hidden', marginRight: 20 },
  avatar: { width: '100%', height: '100%' },
  
  infoText: { flex: 1, justifyContent: 'center' },
  userName: { fontSize: 20, fontWeight: 'bold', color: '#303030' },
  userEmail: { fontSize: 14, color: '#808080', marginTop: 5 },
  
  editInputName: { fontSize: 20, fontWeight: 'bold', color: '#303030', borderBottomWidth: 1, borderColor: '#DDD', marginBottom: 5, paddingVertical: 2 },
  editInputEmail: { fontSize: 14, color: '#808080', borderBottomWidth: 1, borderColor: '#DDD', paddingVertical: 2 },
  
  editButton: { marginLeft: 10, justifyContent: 'center', alignItems: 'center' },

  menuList: { marginTop: 10 },
  menuItem: { backgroundColor: '#FFF', padding: 20, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8 },
  menuTitle: { fontSize: 18, fontWeight: 'bold', color: '#303030' },
  menuSubtitle: { fontSize: 12, color: '#808080', marginTop: 5 }
});

export default ProfileScreen;