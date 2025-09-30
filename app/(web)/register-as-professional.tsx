import { ImageBackground } from "expo-image";
import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import CallToAction from "@/components/web/call-to-action";
import Footer from "@/components/web/footer";
import Header from "@/components/web/header";

const { height } = Dimensions.get("window");

interface Category {
    id: number;
    name: string;
    path: any;
}

const categories: Category[] = [
    { id: 1, name: "Fontanería", path: require("@/assets/icons/services/fontaneria.jpg") },
    { id: 2, name: "Limpieza", path: require("@/assets/icons/services/limpieza.jpg") },
    { id: 3, name: "Electricista", path: require("@/assets/icons/services/electricista.jpg") },
    { id: 4, name: "Carpintería", path: require("@/assets/icons/services/carpinteria.jpg") },
    { id: 5, name: "Montaje", path: require("@/assets/icons/services/montaje.jpg") },
    { id: 6, name: "Jardinería", path: require("@/assets/icons/services/jardineria.jpg") },
];

const RegisterAsProfessional: React.FC = () => {
    const [selected, setSelected] = useState<number[]>([1]);
    const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

    const toggleSelect = (id: number) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
        );
    };

    return (
        <ScrollView contentContainerStyle={{ minHeight: height }}>
            <Header />

            <View style={styles.content}>
                <View style={styles.headerSection}>
                    <Text style={styles.headerTitle}>Crear cuenta profesional</Text>
                </View>

                <View style={styles.form}>
                    <TextInput placeholder="Razón social / Nombre comercial" style={styles.input} />
                    <TextInput placeholder="RUC / DNI" style={styles.input} />
                    <TextInput placeholder="Dirección" style={styles.input} />
                    <TextInput placeholder="Ciudad" style={styles.input} />
                    <TextInput placeholder="Email" style={styles.input} />
                    <TextInput placeholder="Contraseña" style={styles.input} />

                    <Text style={styles.servicesTitle}>Servicios</Text>

                    <View style={styles.categoriesContainer}>
                        {categories.map((cat) => (
                            <TouchableOpacity
                                key={cat.id}
                                style={[styles.categoryCard, selected.includes(cat.id) && styles.categoryCardActive]}
                                onPress={() => toggleSelect(cat.id)}
                            >
                                <ImageBackground
                                    source={cat.path}
                                    style={styles.categoryImage}
                                    imageStyle={{ borderRadius: 12 }}
                                    contentFit="cover"
                                >
                                    <View style={styles.overlay} />
                                    <Text
                                        style={[
                                            styles.categoryText,
                                            selected.includes(cat.id) && styles.categoryTextActive,
                                        ]}
                                    >
                                        {cat.name}
                                    </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setAcceptedTerms((prev) => !prev)}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.checkbox, acceptedTerms && styles.checkboxChecked]}>
                            {acceptedTerms && <Text style={styles.checkmark}>✓</Text>}
                        </View>
                        <Text style={styles.checkboxText}>Acepto los términos y condiciones</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Crear cuenta</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <CallToAction />
            <Footer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    content: {
        marginTop: 70,
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        minHeight: height * 0.75,
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
    form: {
        width: 420,
        justifyContent: "center",
        marginHorizontal: "auto",
        paddingVertical: 40,
        gap: 20,
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#ADADAD",
        borderRadius: 8,
        width: "100%",
        fontSize: 14,
    },
    servicesTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 12,
    },
    categoriesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 12,
        marginBottom: 20,
    },
    categoryCard: {
        width: 120,
        height: 120,
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 12,
    },
    categoryCardActive: {
        borderWidth: 2,
        borderColor: "#FFA962",
    },
    categoryImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.35)",
        borderRadius: 12,
    },
    categoryText: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center",
        position: "absolute",
        zIndex: 2,
        fontSize: 14,
        paddingHorizontal: 4,
        bottom: 15,
    },
    categoryTextActive: {
        color: "#FFD700",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 20,
    },
    checkbox: {
        width: 22,
        height: 22,
        borderWidth: 2,
        borderColor: "#50B4E8",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxChecked: {
        backgroundColor: "#50B4E8",
    },
    checkmark: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    checkboxText: {
        fontSize: 14,
        color: "#333",
    },
    submitButton: {
        backgroundColor: "#50B4E8",
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center",
    },
    submitButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});

export default RegisterAsProfessional;
