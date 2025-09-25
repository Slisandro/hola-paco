import CallToAction from "@/components/web/call-to-action";
import Footer from "@/components/web/footer";
import Header from "@/components/web/header";
import { Ionicons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";
import React from "react";
import {
    Dimensions,
    Image, Pressable, ScrollView,
    StyleSheet,
    Text, TextInput, TouchableOpacity,
    View
} from "react-native";

const { height } = Dimensions.get("window");

type Offer = {
    id: string;
    name: string;
    rating: number;
    reviews: number;
    description: string;
    image: string;
    price: number;
};

const DATA: Offer[] = [
    {
        id: "1",
        name: "Juan Pérez",
        rating: 4.5,
        reviews: 120,
        description: "Especialista en plomería y reparaciones de hogar.",
        image: "https://i.pravatar.cc/40?img=1",
        price: 80,
    },
    {
        id: "2",
        name: "María López",
        rating: 5,
        reviews: 98,
        description: "Diseñadora de interiores con experiencia en espacios modernos.",
        image: "https://i.pravatar.cc/40?img=2",
        price: 95,
    },
    {
        id: "3",
        name: "Juan Pérez",
        rating: 4.5,
        reviews: 120,
        description: "Especialista en plomería y reparaciones de hogar.",
        image: "https://i.pravatar.cc/40?img=1",
        price: 80,
    },
];

const COLORS = {
    primary: "#50B4E8",
    accent: "#FFC356",
    text: "#000",
    gray: "#D5D5D5",
};

const OffersList: React.FC = () => {
    return (
        <View style={styles.offersList}>
            {DATA.map((item) => (
                <View key={item.id} style={styles.offerCard}>
                    {/* Fila superior */}
                    <View style={styles.offerHeader}>
                        <Image source={{ uri: item.image }} style={styles.avatar} />

                        <View style={{ flex: 1 }}>
                            <Text style={styles.name}>{item.name}</Text>

                            <View style={styles.ratingContainer}>
                                {Array.from({ length: 5 }).map((_, index) => {
                                    const isFilled = index < Math.floor(item.rating);
                                    return (
                                        <Text key={index} style={{ color: COLORS.accent }}>
                                            {isFilled ? "★" : "☆"}
                                        </Text>
                                    );
                                })}
                                <Text style={styles.reviews}>({item.reviews})</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: "flex-end" }}>
                            <Text style={styles.price}>{item.price} €</Text>
                            <Text style={styles.priceNote}>Precio final sin impuestos</Text>
                        </View>
                    </View>

                    {/* Descripción */}
                    <Text style={styles.description}>{item.description}</Text>

                    {/* Botones */}
                    <View style={styles.buttonRow}>
                        <TouchableOpacity onPress={() => router.push("/(web)/chat")} style={[styles.button, styles.chatButton]}>
                            <Text style={styles.buttonText}>Chat</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, styles.hireButton]}>
                            <Text style={[styles.buttonText, { color: COLORS.primary }]}>
                                Contratar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
};

const Services = () => {
    const router = useRouter()
    return (
        <ScrollView contentContainerStyle={{ minHeight: height }}>
            <Header />

            <View style={styles.content}>

                <View style={styles.headerSection}>
                    <Text style={styles.headerTitle}>Buscar profesional</Text>
                </View>

                <View style={styles.searchWrapper}>
                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={18} color="#00000099" style={{ paddingHorizontal: 12 }} />
                        <TextInput
                            placeholder="Buscar..."
                            style={styles.searchInput}
                            placeholderTextColor={COLORS.gray}
                        />
                    </View>

                    <Pressable style={styles.filterButton}>
                        <Ionicons name="filter" size={20} color="#000000" />
                    </Pressable>

                    <Pressable onPress={() => router.push("/(web)/create-service")}>
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

                <OffersList />
            </View>

            <CallToAction />
            <Footer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        // paddingHorizontal: 16,
        justifyContent: "flex-start",
        alignItems: "stretch",
        minHeight: height * 0.75,
        // padding: 40,
        marginTop: 70,
        marginBottom: 20
    },
    headerSection: {
        backgroundColor: "#50B4E8",
        padding: 30,
        width: "100%",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: "800",
        color: "#FFF",
    },
    offersList: {
        gap: 12,
        width: "100%",
        maxWidth: 900,
        alignSelf: "center",
    },
    offerCard: {
        backgroundColor: "#fff",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        padding: 16,
        gap: 8,
    },
    offerHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    name: {
        fontWeight: "500",
        fontSize: 16,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    reviews: {
        color: COLORS.gray,
        fontSize: 12,
    },
    price: {
        fontSize: 20,
        fontWeight: "700",
    },
    priceNote: {
        fontSize: 12,
        color: COLORS.gray,
    },
    description: {
        fontSize: 12,
        color: COLORS.text,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        width: "100%",
        marginTop: 8,
    },
    button: {
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        flex: 1
    },
    chatButton: {
        backgroundColor: COLORS.accent,
    },
    hireButton: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        backgroundColor: "transparent",
    },
    buttonText: {
        fontWeight: "600",
        textAlign: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        gap: 8,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    checkboxChecked: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },
    checkmark: {
        color: "white",
        fontWeight: "bold",
    },
    checkboxLabel: {
        fontSize: 14,
        color: COLORS.text,
    },
    searchWrapper: { flexDirection: "row", alignItems: "center", paddingHorizontal: 10, marginVertical: 20, marginHorizontal: "auto", justifyContent :"space-between", gap: 25 },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 12,
        height: 50,
        gap: 6,
        borderColor: "#ADADAD",
        borderWidth: 1,
        width: 600
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: COLORS.text,
        fontWeight: "400",
        lineHeight: 24,
        letterSpacing: 0,
        width: "100%",
        height: "100%",
        paddingHorizontal: 10,
        borderRadius: 12,
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
});

export default Services;
