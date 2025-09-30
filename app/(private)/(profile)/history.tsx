import { useAccount } from "@/contexts/AccountContext";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = {
    primary: "#50B4E8",
    accent: "#FFC356",
    text: "#000",
    gray: "#7D848D",
    lightGray: "#F5F5F5",
};

const mockHistory = [
    {
        id: "1",
        name: "Juan Pérez",
        avatar: "https://i.pravatar.cc/150?u=juan",
        service: "Electricista",
        date: "12/09/2025",
        rating: 4,
    },
    {
        id: "2",
        name: "María Gómez",
        avatar: "https://i.pravatar.cc/150?u=maria",
        service: "Plomería",
        date: "25/09/2025",
        rating: 5,
    },
];

export default function HistoryScreen() {
    const { accountType } = useAccount();
    const router = useRouter();

    const title =
        accountType === "profesional"
            ? "Historial de clientes"
            : "Historial de profesionales contratados";

    const handleContact = (id: string) => {
        console.log("Contactar a:", id);
        // router.push(`/chat/${id}`);
    };

    const handleRehire = (id: string) => {
        console.log("Volver a contratar:", id);
        router.push("/(private)/(services)/professional");
    };

    const handleRate = (id: string) => {
        console.log("Puntuar a:", id);
        // abrir modal de rating
    };

    const renderItem = ({ item }: any) => (
        <View style={styles.card}>
            {/* HEADER DEL ITEM */}
            <View style={styles.cardHeader}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.service}>
                        {accountType === "profesional"
                            ? `Cliente desde ${item.date}`
                            : `${item.service} • ${item.date}`}
                    </Text>

                    {/* RATING */}
                    <View style={styles.ratingRow}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Ionicons
                                key={index}
                                name={index < item.rating ? "star" : "star-outline"}
                                size={18}
                                color={COLORS.accent}
                            />
                        ))}
                    </View>
                </View>
            </View>

            {/* ACCIONES */}
            <View style={styles.actions}>
                <Pressable style={[styles.actionButton, styles.contact]} onPress={() => handleContact(item.id)}>
                    <Ionicons name="chatbubble-ellipses-outline" size={18} color="#fff" />
                    <Text style={styles.actionText}>Contactar</Text>
                </Pressable>

                {accountType === "usuario" && <Pressable style={[styles.actionButton, styles.rehire]} onPress={() => handleRehire(item.id)}>
                    <Ionicons name="refresh-outline" size={18} color="#fff" />
                    <Text style={styles.actionText}>Recontratar</Text>
                </Pressable>}

                <Pressable disabled style={[styles.actionButton, styles.rate, { opacity: .25 }]} onPress={() => handleRate(item.id)}>
                    <Ionicons name="star-outline" size={18} color="#fff" />
                    <Text style={styles.actionText}>Puntuar</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <Pressable onPress={() => router.push("/(private)/(tabs)/profile")} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={COLORS.text} />
                </Pressable>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>

            <FlatList
                data={mockHistory}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: COLORS.gray,
        backgroundColor: "#fff",
    },
    backButton: {
        marginRight: 10,
    },
    headerTitle: {
        fontFamily: "Quicksand",
        fontWeight: "700",
        fontSize: 20,
        color: COLORS.text,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 8,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginRight: 12,
        borderWidth: 2,
        borderColor: COLORS.primary,
    },
    name: {
        fontFamily: "Quicksand",
        fontWeight: "700",
        fontSize: 18,
        color: COLORS.text,
    },
    service: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 14,
        color: COLORS.gray,
        marginTop: 2,
    },
    ratingRow: {
        flexDirection: "row",
        marginTop: 4,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
        gap: 8
    },
    actionButton: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 10,
        gap: 6,
    },
    actionText: {
        fontFamily: "DM Sans",
        fontWeight: "600",
        fontSize: 14,
        color: "#fff",
    },
    contact: {
        backgroundColor: COLORS.primary,
    },
    rehire: {
        backgroundColor: "#7ED321",
    },
    rate: {
        backgroundColor: COLORS.accent,
    },
});
