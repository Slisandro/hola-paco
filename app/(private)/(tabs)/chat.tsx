import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
  primary: "#50B4E8",
  text: "#000",
  gray: "#D5D5D5",
  lightGray: "#F5F5F5",
};

interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  unread?: boolean;
}

const chatData: ChatItem[] = [
  { id: '1', name: 'Pedido #000123', lastMessage: 'Hola, quería confirmar la limpieza para mañana.', time: '09:30', avatar: 'https://i.pravatar.cc/50?img=3', unread: true },
  { id: '2', name: 'Pedido #000124', lastMessage: 'Pedido asignado.', time: '10:15', avatar: 'https://i.pravatar.cc/50?img=4' },
  { id: '3', name: 'Proveedor XYZ', lastMessage: 'Te esperamos a la hora acordada.', time: '09:32', avatar: 'https://i.pravatar.cc/50?img=5', unread: true },
];

const TABS = ["Todas", "No leídos"];

export default function TabTwoScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const filteredData = chatData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase()) || item.lastMessage.toLowerCase().includes(searchText.toLowerCase());
    const matchesTab = activeTab === "Todas" || (activeTab === "No leídos" && item.unread);
    return matchesSearch && matchesTab;
  });

  const renderItem = ({ item }: { item: ChatItem }) => (
    <Pressable
      style={styles.chatRow}
      onPress={() => router.push(`/(private)/(tabs)`)}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <Text
          style={[styles.chatLastMessage, item.unread && styles.unreadMessage]}
          numberOfLines={1}
        >
          {item.lastMessage}
        </Text>
      </View>
      {item.unread && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadText}>1</Text>
        </View>
      )}
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color={COLORS.gray} />
          <TextInput
            placeholder="Buscar..."
            style={styles.searchInput}
            placeholderTextColor={COLORS.gray}
            value={searchText}
            onChangeText={setSearchText}
          />
          <Ionicons name="mic" size={20} color={COLORS.gray} />
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsWrapper}>
        {TABS.map(tab => (
          <Pressable
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tabItem, activeTab === tab && styles.tabItemActive]}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </Pressable>
        ))}
      </View>

      {/* Chat List */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFF', paddingVertical: 10 },
  searchWrapper: { flexDirection: "row", alignItems: "center", paddingHorizontal: 10, marginVertical: 10 },
  searchBar: {
    flex: 1, flexDirection: "row", alignItems: "center",
    backgroundColor: COLORS.lightGray, borderRadius: 12,
    paddingHorizontal: 10, height: 50, gap: 6,
    borderColor: "#ADADAD", borderWidth: 1
  },
  searchInput: { flex: 1, fontSize: 16, color: COLORS.text, fontFamily: "DM Sans", fontWeight: "400", lineHeight: 24 },
  tabsWrapper: { marginHorizontal: 10, flexDirection: "row", justifyContent: "space-around", marginTop: 10, borderBottomWidth: 1, borderBottomColor: COLORS.gray },
  tabItem: { alignItems: "center", paddingBottom: 8, borderBottomWidth: 3, borderBottomColor: "transparent" },
  tabItemActive: { borderBottomColor: COLORS.primary },
  tabText: { fontFamily: "DM Sans", fontWeight: "500", fontSize: 12, lineHeight: 20, color: COLORS.gray },
  tabTextActive: { color: COLORS.primary, fontWeight: "bold" },
  chatRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 12, backgroundColor: '#F3F5FD', marginHorizontal: 10, marginBottom: 8, borderRadius: 12 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  chatInfo: { flex: 1 },
  chatHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  chatName: { fontFamily: 'DM Sans', fontWeight: '700', fontSize: 16, color: '#000' },
  chatTime: { fontFamily: 'DM Sans', fontSize: 12, color: '#666' },
  chatLastMessage: { fontFamily: 'DM Sans', fontSize: 14, color: '#555' },
  unreadMessage: { fontWeight: '700', color: '#000' },
  unreadBadge: { backgroundColor: '#5137ab', borderRadius: 10, width: 20, height: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 8 },
  unreadText: { color: '#fff', fontSize: 12, fontWeight: '700' },
});
