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
        title: "Reparación de grifos",
        description: "Se necesita reparar varios grifos que gotean en un apartamento.",
        location: "Madrid",
        price: "80 €",
        paymentMethods: ["cash", "card"],
        image: "https://i.pravatar.cc/40?img=1",
    },
    {
        id: "2",
        title: "Diseño de interiores",
        description: "Diseñar y decorar sala y comedor de apartamento moderno.",
        location: "Barcelona",
        price: "200 €",
        paymentMethods: ["card"],
        image: "https://i.pravatar.cc/40?img=2",
    },
    {
        id: "3",
        title: "Instalación eléctrica",
        description: "Instalación de luces y enchufes en nueva oficina.",
        location: "Valencia",
        price: "150 €",
        paymentMethods: ["cash"],
        image: "https://i.pravatar.cc/40?img=3",
    },
];

const TABS = ["Mejores coincidencias", "Más recientes", "Favoritos"];

// Listado de trabajos (Cuenta profesional)
const Offers = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(TABS[0]);

    const handleGoBack = () => router.push("/(private)/(tabs)");

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
                        <Ionicons name="notifications" size={24} color="black" />
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
    return (
        <View style={styles.card}>
            <View style={styles.topRow}>
                <Image source={{ uri: item.image }} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{item.title}</Text>
                    <View style={styles.locationWrapper}>
                        <EvilIcons name="location" size={16} color={COLORS.gray} />
                        <Text style={styles.locationText}>{item.location}</Text>
                    </View>

                    <View style={styles.paymentsRow}>
                        {item.paymentMethods.includes("cash") && <Image source={require("@/assets/icons/profile/cash.png")} style={styles.paymentIcon} />}
                        {item.paymentMethods.includes("card") && <Image source={require("@/assets/icons/profile/credit-card.png")} style={styles.paymentIcon} />}
                    </View>
                </View>
            </View>

            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Pressable style={styles.chatButton}>
                <Text style={styles.chatButtonText}>Contactar</Text>
            </Pressable>
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
    description: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 10,
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
        fontSize: 10,
        lineHeight: 16,
        color: COLORS.text,
        textAlign: "center",
        textAlignVertical: "center",
    },
    paymentsRow: { flexDirection: "row", alignItems: "center", marginTop: 6, gap: 8 },
    paymentIcon: { width: 20, height: 20, resizeMode: "contain" },
    price: { fontFamily: "DM Sans", fontWeight: "700", fontSize: 14, color: COLORS.text, marginTop: 4 },
});

export default Offers;
