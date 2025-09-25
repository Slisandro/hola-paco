import Header from "@/components/web/header";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

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
    {
        id: "1",
        name: "Pedido #000123",
        lastMessage: "Hola, quería confirmar la limpieza para mañana.",
        time: "09:30",
        avatar: "https://i.pravatar.cc/50?img=3",
        unread: true,
    },
    {
        id: "2",
        name: "Pedido #000124",
        lastMessage: "Pedido asignado.",
        time: "10:15",
        avatar: "https://i.pravatar.cc/50?img=4",
    },
    {
        id: "3",
        name: "Proveedor XYZ",
        lastMessage: "Te esperamos a la hora acordada.",
        time: "09:32",
        avatar: "https://i.pravatar.cc/50?img=5",
        unread: true,
    },
];

export default function Chats() {
    const router = useRouter();
    const [searchText, setSearchText] = useState("");

    const filteredData = chatData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.lastMessage.toLowerCase().includes(searchText.toLowerCase())
    );

    const renderItem = ({ item }: { item: ChatItem }) => (
        <Pressable
            style={styles.chatRow}
            onPress={() => router.push(`/(web)/chat`)}
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
        <View style={styles.container}>
            <Header />
            <ScrollView
                contentContainerStyle={{ paddingTop: 100, paddingBottom: 50 }}
                style={{ flex: 1 }}
            >
                {/* Buscador */}
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

                {/* Lista de chats */}
                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f9f9f9" },
    searchWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.lightGray,
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 50,
        gap: 8,
        borderColor: "#ADADAD",
        borderWidth: 1,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: COLORS.text,
        fontWeight: "400",
        height: "100%",
    },
    chatRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 12,
        width: width - 40,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
    chatInfo: { flex: 1 },
    chatHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
    },
    chatName: { fontWeight: "700", fontSize: 16, color: "#000" },
    chatTime: { fontSize: 12, color: "#666" },
    chatLastMessage: { fontSize: 14, color: "#555" },
    unreadMessage: { fontWeight: "700", color: "#000" },
    unreadBadge: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 8,
    },
    unreadText: { color: "#fff", fontSize: 12, fontWeight: "700" },
});
