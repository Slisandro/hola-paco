import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = {
    primary: "#50B4E8",
    accent: "#FFC356",
    text: "#000",
    gray: "#7D848D",
    lightGray: "#F5F5F5",
};

const METHODS = [
    { id: "card", label: "Tarjeta de crédito/débito" },
    { id: "cash", label: "Efectivo" },
];

export default function PaymentMethodsScreen() {
    const router = useRouter();
    const [selectedMethods, setSelectedMethods] = useState<string[]>([]);

    const toggleMethod = (id: string) => {
        setSelectedMethods((prev) =>
            prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
        );
    };

    const handleSave = () => {
        console.log("Métodos guardados:", selectedMethods);
        router.back(); // 🔹 vuelve a la pantalla anterior después de guardar
    };

    const renderItem = ({ item }: { item: { id: string; label: string } }) => {
        const isChecked = selectedMethods.includes(item.id);

        return (
            <Pressable style={styles.card} onPress={() => toggleMethod(item.id)}>
                <Text style={styles.label}>{item.label}</Text>
                <View
                    style={[
                        styles.checkbox,
                        isChecked && { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
                    ]}
                >
                    {isChecked && <Ionicons name="checkmark" size={18} color="#fff" />}
                </View>
            </Pressable>
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={COLORS.text} />
                </Pressable>
                <Text style={styles.headerTitle}>Métodos de pago</Text>
            </View>

            {/* Listado */}
            <FlatList
                data={METHODS}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
            />

            {/* Botón Guardar */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={[styles.saveButton, selectedMethods.length === 0 && styles.saveButtonDisabled]}
                    disabled={selectedMethods.length === 0}
                    onPress={handleSave}
                >
                    <Text style={styles.saveButtonText}>Guardar</Text>
                </TouchableOpacity>
            </View>
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    label: {
        fontFamily: "DM Sans",
        fontSize: 16,
        color: COLORS.text,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: COLORS.gray,
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: "#fff",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: COLORS.lightGray,
    },
    saveButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
    },
    saveButtonDisabled: {
        backgroundColor: COLORS.gray,
    },
    saveButtonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Quicksand",
        fontWeight: "700",
    },
});
