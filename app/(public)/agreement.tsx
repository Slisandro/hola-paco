import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Agreement = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("acuerdo");

    const handleGoBack = () => router.back();
    const handleLogin = () => router.replace("/(public)/completeRegister");

    const renderContent = () => {
        switch (activeTab) {
            case "acuerdo":
                return (
                    <>
                        <Text style={styles.sectionTitle}>
                            Somos una comunidad compuesta únicamente por profesionales de primer nivel.
                        </Text>
                        <Text style={styles.sectionText}>
                            Estos términos y condiciones rigen la forma en que le suministramos productos, incluyendo cualquier curso de aprendizaje electrónico.
                            {"\n\n"}
                            Lea atentamente estos términos antes de realizar su pedido. Estos términos le indican quiénes somos, cómo le proporcionaremos los productos, cómo usted y nosotros podemos modificar o rescindir el contrato, qué hacer en caso de problema y otra información importante.
                            {"\n\n"}
                            Quedan reservados todos los derechos no expresamente otorgados en estos términos.
                        </Text>
                    </>
                );
            case "servicios":
                return (
                    <>
                        <Text style={styles.sectionTitle}>
                            Somos una comunidad compuesta únicamente por profesionales de primer nivel.
                        </Text>
                        <Text style={styles.sectionText}>
                            Estos términos y condiciones rigen la forma en que le suministramos productos, incluyendo cualquier curso de aprendizaje electrónico.
                            {"\n\n"}
                            Lea atentamente estos términos antes de realizar su pedido. Estos términos le indican quiénes somos, cómo le proporcionaremos los productos, cómo usted y nosotros podemos modificar o rescindir el contrato, qué hacer en caso de problema y otra información importante.
                            {"\n\n"}
                            Quedan reservados todos los derechos no expresamente otorgados en estos términos.
                        </Text>
                    </>
                );
            case "documentos":
                return (
                    <>
                        <Text style={styles.sectionTitle}>
                            Somos una comunidad compuesta únicamente por profesionales de primer nivel.
                        </Text>
                        <Text style={styles.sectionText}>
                            Estos términos y condiciones rigen la forma en que le suministramos productos, incluyendo cualquier curso de aprendizaje electrónico.
                            {"\n\n"}
                            Lea atentamente estos términos antes de realizar su pedido. Estos términos le indican quiénes somos, cómo le proporcionaremos los productos, cómo usted y nosotros podemos modificar o rescindir el contrato, qué hacer en caso de problema y otra información importante.
                            {"\n\n"}
                            Quedan reservados todos los derechos no expresamente otorgados en estos términos.
                        </Text>
                    </>
                );
            case "banco":
                return (
                    <>
                        <Text style={styles.sectionTitle}>
                            Somos una comunidad compuesta únicamente por profesionales de primer nivel.
                        </Text>
                        <Text style={styles.sectionText}>
                            Estos términos y condiciones rigen la forma en que le suministramos productos, incluyendo cualquier curso de aprendizaje electrónico.
                            {"\n\n"}
                            Lea atentamente estos términos antes de realizar su pedido. Estos términos le indican quiénes somos, cómo le proporcionaremos los productos, cómo usted y nosotros podemos modificar o rescindir el contrato, qué hacer en caso de problema y otra información importante.
                            {"\n\n"}
                            Quedan reservados todos los derechos no expresamente otorgados en estos términos.
                        </Text>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <StatusBar style="dark" />

            {/* Botón Volver */}
            <Pressable style={styles.backButton} onPress={handleGoBack}>
                <Ionicons name="arrow-back" size={24} color="#000" />
            </Pressable>

            {/* Tabs */}
            <View style={styles.tabsContainer}>
                {["acuerdo", "servicios", "documentos", "banco"].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.tab, activeTab === tab && styles.tabActive]}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                activeTab === tab && styles.tabTextActive,
                            ]}
                        >
                            {tab === "acuerdo" && "Acuerdo"}
                            {tab === "servicios" && "Servicios"}
                            {tab === "documentos" && "Documentos"}
                            {tab === "banco" && "Banco"}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Contenido dinámico */}
            <ScrollView style={styles.content}>{renderContent()}</ScrollView>

            <View style={{ height: 120, paddingHorizontal: 30, gap: 10 }}>
                <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
                    <Text style={styles.signInButtonText}>Aceptar y continuar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.signInButton, { backgroundColor: "#FFA962" }]} onPress={handleLogin}>
                    <Text style={styles.signInButtonText}>Rechazar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    backButton: { paddingHorizontal: 20, paddingVertical: 10 },

    tabsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        marginBottom: 10,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: "center",
    },
    tabActive: {
        borderBottomWidth: 2,
        borderBottomColor: "#50B4E8",
    },
    tabText: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 16,
        color: "#7D848D",
    },
    tabTextActive: {
        color: "#50B4E8",
        fontWeight: "600",
    },

    content: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 20
    },
    sectionTitle: {
        fontFamily: "DM Sans",
        fontWeight: "500",
        fontSize: 20,
        lineHeight: 28,
        color: "#000",
        marginBottom: 10
    },
    sectionText: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 30,
        letterSpacing: 0,
        textAlignVertical: "center",
        color: "#000",
    },

    signInButton: { marginTop: 0, backgroundColor: "#50B4E8", padding: 16, borderRadius: 12 },
    signInButtonText: { color: "#fff", fontSize: 16, textAlign: "center", fontWeight: "600", fontFamily: "Inter" },
});

export default Agreement;
