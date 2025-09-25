import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

const initialLayout = { width: Dimensions.get('window').width };

const notificationsData = {
  all: [
    {
      day: "Hoy", items: [
        { id: "1", icon: "calendar", title: "Nuevo pedido recibido", time: "10:30", link: "/orders/123" },
        { id: "3", icon: "checkbox-outline", title: "Pago confirmado", time: "09:30", link: "/orders/123" },
        { id: "2", icon: "chatbubble", title: "Mensaje de soporte", time: "09:15", link: "/messages/456" },
        //extension-puzzle
      ]
    },
    {
      day: "Ayer", items: [
        { id: "3", icon: "calendar", title: "Pedido enviado", time: "18:45", link: "/orders/122" },
        { id: "2", icon: "extension-puzzle", title: "Cupón aplicado", time: "09:15", link: "/messages/456" },
      ]
    }
  ],
  orders: [
    {
      day: "Hoy", items: [
        { id: "1", icon: "calendar", title: "Nuevo pedido recibido", time: "10:30", link: "/orders/123" },
        { id: "2", icon: "checkbox-outline", title: "Pago confirmado", time: "09:30", link: "/orders/123" },
      ]
    },
    {
      day: "Ayer", items: [
        { id: "3", icon: "calendar", title: "Pedido enviado", time: "18:45", link: "/orders/122" },
      ]
    }
  ],
  messages: [
    {
      day: "Hoy", items: [
        { id: "2", icon: "chatbubble", title: "Mensaje de soporte", time: "09:15", link: "/messages/456" },
      ]
    }
  ]
};

const NotificationItem = ({ item }: any) => (
  <View style={styles.notificationItem}>
    <View style={{ width: 30, height: 30, alignItems: "center", justifyContent: "center", backgroundColor: "#50B4E8", borderRadius: 8 }}>
      <Ionicons name={item.icon} size={16} color="white" />
    </View>
    <Text style={styles.title}>{item.title}</Text>
    <View style={styles.right}>
      <Text style={styles.time}>{item.time}</Text>
      <TouchableOpacity>
        <Text style={styles.link}>Ver</Text>
      </TouchableOpacity>
    </View>
  </View>
);


const DaySection = ({ day, items }: any) => (
  <View style={styles.daySection}>
    <Text style={styles.day}>{day}</Text>
    {items.map((item: any) => <NotificationItem key={item.id} item={item} />)}
  </View>
);

const renderScene = (dataKey: keyof typeof notificationsData) => () => {
  const data = notificationsData[dataKey];
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.day}
      renderItem={({ item }) => <DaySection day={item.day} items={item.items} />}
      contentContainerStyle={{ paddingBottom: 100 }}
    />
  );
};

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "all", title: "Todas" },
    { key: "orders", title: "Pedidos" },
    { key: "messages", title: "Mensajes" },
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#50B4E8", height: 3 }}
      style={{
        backgroundColor: "#fff",
        paddingTop: insets.top / 2,
      }}
      labelStyle={{ fontWeight: "700", fontSize: 16 }}
      activeColor="#50B4E8"
      inactiveColor="#7D848D"
    />
  );

  return (
    <SafeAreaView style={[styles.safeArea, { paddingTop: insets.top }]}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={SceneMap({
            all: renderScene("all"),
            orders: renderScene("orders"),
            messages: renderScene("messages"),
          })}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
          style={{ marginTop: 0 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, backgroundColor: "transparent" },
  daySection: { marginVertical: 10, paddingHorizontal: 12 },
  day: { fontSize: 16, fontWeight: "700", marginBottom: 6, color: "#000" },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F5FD",
    borderRadius: 12,
    padding: 12,
    marginBottom: 6,
    gap: 12
  },
  title: { flex: 1, fontSize: 14, color: "#000" },
  right: { flexDirection: "column", gap: 5, justifyContent: "flex-end", alignItems: "flex-end" },
  time: { fontSize: 12, color: "#7D848D" },
  link: { fontSize: 14, color: "#50B4E8", fontWeight: "700" },
});
