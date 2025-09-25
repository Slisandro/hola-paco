import { Ionicons } from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
    primary: "#50B4E8",
    accent: "#FFC356",
    text: "#000",
    gray: "#D5D5D5",
    lightGray: "#F5F5F5",
};

const DATA = [
    {
        id: "1",
        name: "Juan Pérez",
        rating: 4.5,
        reviews: 120,
        description: "Especialista en plomería y reparaciones de hogar.",
        image: "https://i.pravatar.cc/40?img=1",
    },
    {
        id: "2",
        name: "María López",
        rating: 5,
        reviews: 98,
        description: "Diseñadora de interiores con experiencia en espacios modernos.",
        image: "https://i.pravatar.cc/40?img=2",
    },
    {
        id: "3",
        name: "Juan Pérez",
        rating: 4.5,
        reviews: 120,
        description: "Especialista en plomería y reparaciones de hogar.",
        image: "https://i.pravatar.cc/40?img=1",
    }
];

const TABS = ["Precio", "Reputación", "Tiempo de ejecución"];

// Listado de trabajos (Cuenta profesional)
const Proffesional = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(TABS[0]);

    const handleGoBack = () => router.push("/(private)/(tabs)");
    const handleToCreateService = () => router.push("/(private)/(create-services)/create-service");

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <Pressable style={styles.backButton} onPress={handleGoBack}>
                <Ionicons name="arrow-back" size={24} color="#000" />
            </Pressable>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.headerWrapper}>
                    <Image
                        source={{ uri: "https://i.pravatar.cc/100" }}
                        style={styles.profileImage}
                        contentFit="cover"
                    />
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.headerTitle}>John Doe</Text>
                            <View style={styles.locationWrapper}>
                                <EvilIcons name="location" size={20} color={COLORS.gray} />
                                <Text style={styles.locationText}>Madrid</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: "flex-end", gap: 10 }}>
                            <Ionicons name="notifications" size={24} color="black" />
                            <Pressable onPress={handleToCreateService}>
                                <Text
                                    style={{
                                        color: COLORS.primary,
                                        borderBottomColor: COLORS.primary,
                                        borderBottomWidth: 1
                                    }}
                                >
                                    Solicitar servicio
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

                {/* Search */}
                <View style={styles.searchWrapper}>
                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={20} color={COLORS.gray} />
                        <TextInput
                            placeholder="Buscar..."
                            style={styles.searchInput}
                            placeholderTextColor={COLORS.gray}
                        />
                        <Ionicons name="mic" size={20} color={COLORS.gray} />
                    </View>

                    <Pressable style={styles.filterButton}>
                        <Ionicons name="filter" size={20} color="#000000" />
                    </Pressable>
                </View>

                {/* Tabs */}
                <View style={styles.tabsWrapper}>
                    {TABS.map((tab) => (
                        <Pressable
                            key={tab}
                            onPress={() => setActiveTab(tab)}
                            style={[
                                styles.tabItem,
                                activeTab === tab && styles.tabItemActive
                            ]}
                        >
                            <Text style={[
                                styles.tabText,
                                activeTab === tab && styles.tabTextActive
                            ]}>
                                {tab}
                            </Text>
                        </Pressable>
                    ))}
                </View>

                {/* Lista de ofertas */}
                <OffersList />
            </View>
        </SafeAreaView>
    );
};

const ListItem = ({ item }: { item: any }) => {
    const router = useRouter();

    const handleToHire = () => router.push("/(private)/(services)/Hire")

    return (
        <View style={styles.card}>
            {/* Primera fila: Imagen + Nombre + Estrellas */}
            <View style={styles.topRow}>
                <Image source={{ uri: item.image }} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{item.name}</Text>

                    <View style={styles.ratingRow}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Ionicons
                                key={index}
                                name={index < Math.floor(item.rating) ? "star" : "star-outline"}
                                size={12}
                                color={COLORS.accent}
                            />
                        ))}
                        <Text style={styles.ratingText}>
                            ({item.reviews})
                        </Text>
                    </View>
                </View>

                <View style={{ alignItems: "flex-end" }}>
                    <Text style={styles.price}>80 €</Text>
                    <Text style={styles.labelPrice}>Precio final sin impuestos</Text>
                </View>
            </View>

            {/* Descripción */}
            <Text style={styles.description}>{item.description}</Text>

            {/* Botones */}
            <View style={{ flexDirection: "row", gap: 10, width: "100%", marginHorizontal: "auto", justifyContent: "center" }}>
                <Pressable style={[styles.chatButton, { width: "45%" }]}>
                    <Text style={styles.chatButtonText}>Chat</Text>
                </Pressable>

                <Pressable style={[styles.chatButton, { width: "45%", backgroundColor: "transparent", borderWidth: 1, borderColor: "#4D95FF" }]}>
                    <Text style={styles.chatButtonText} onPress={handleToHire}>Contratar</Text>
                </Pressable>
            </View>
        </View>
    );
};

const OffersList = () => {
    return (
        <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ListItem item={item} />}
            contentContainerStyle={{ paddingVertical: 10, gap: 12 }}
        />
    );
};

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#fff" },
    backButton: {
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    container: { flex: 1, backgroundColor: "transparent", paddingHorizontal: 10 },

    headerWrapper: { flexDirection: "row", alignItems: "center", marginVertical: 10, paddingHorizontal: 10, gap: 15 },
    profileImage: { width: 50, height: 50, borderRadius: 60, borderWidth: 2, borderColor: COLORS.primary },
    headerTitle: {
        fontFamily: "DM Sans",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
        color: "#000",
    },
    locationWrapper: { flexDirection: "row", alignItems: "center", marginTop: 2 },
    locationText: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 0,
        color: COLORS.gray,
    },

    searchWrapper: { flexDirection: "row", alignItems: "center", paddingHorizontal: 10, marginVertical: 10 },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.lightGray,
        borderRadius: 12,
        paddingHorizontal: 10,
        height: 50,
        gap: 6,
        borderColor: "#ADADAD",
        borderWidth: 1
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: COLORS.text,
        fontFamily: "DM Sans",
        fontWeight: "400",
        lineHeight: 24,
        letterSpacing: 0,
    },
    filterButton: {
        marginLeft: 8,
        borderWidth: 1,
        borderColor: "#ADADAD",
        borderRadius: 12,
        padding: 12,
        justifyContent: "center",
        alignItems: "center"
    },

    tabsWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
    },
    tabItem: {
        alignItems: "center",
        paddingBottom: 8,
        borderBottomWidth: 3,
        borderBottomColor: "transparent",
    },
    tabItemActive: {
        borderBottomColor: COLORS.primary,
    },
    tabText: {
        fontFamily: "DM Sans",
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 0,
        textAlignVertical: "center",
        color: COLORS.gray
    },
    tabTextActive: { color: COLORS.primary, fontWeight: "bold" },

    // Lista
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        gap: 6,
    },
    topRow: { flexDirection: "row", alignItems: "center", gap: 10 },
    avatar: { width: 40, height: 40, borderRadius: 20 },
    name: {
        fontFamily: "DM Sans",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 24,
        color: COLORS.text,
    },
    ratingRow: { flexDirection: "row", alignItems: "center", gap: 4 },
    ratingText: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 20,
        color: COLORS.gray,
    },
    labelPrice: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: "right",
        textAlignVertical: "center",
    },
    price: {
        fontFamily: "DM Sans",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 25,
        letterSpacing: 0,
        textAlign: "right",
        textAlignVertical: "center",
    },
    description: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        color: COLORS.text,
    },
    chatButton: {
        backgroundColor: COLORS.accent,
        borderRadius: 8,
        paddingVertical: 6,
        alignItems: "center",
        marginTop: 4,
    },
    chatButtonText: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        color: COLORS.text,
        textAlign: "center",
        textAlignVertical: "center",
    },
});

export default Proffesional;
