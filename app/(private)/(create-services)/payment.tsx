import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
    primary: "#50B4E8",
    accent: "#FFC356",
    text: "#000",
    gray: "#D5D5D5",
    lightGray: "#F5F5F5",
};

const Payment = () => {
    const router = useRouter();
    const [method, setMethod] = useState<"card" | "cash" | null>(null);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [ccv, setCcv] = useState("");

    const handleGoBack = () => router.push("/(private)/(create-services)/create-service");

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <View style={styles.container}>

                {/* Header */}
                <View style={styles.header}>
                    <Pressable style={styles.backButton} onPress={handleGoBack}>
                        <Ionicons name="arrow-back" size={24} color="#000" />
                    </Pressable>
                    <Text style={styles.title}>Método de pago</Text>
                    <View />
                </View>

                {/* Selección de método */}
                <View style={styles.methodsContainer}>
                    <Pressable
                        style={[styles.methodButton, method === "card" && styles.methodSelected]}
                        onPress={() => setMethod("card")}
                    >
                        <Text style={[styles.methodText, method === "card" && styles.methodTextSelected]}>Tarjeta</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.methodButton, method === "cash" && styles.methodSelected]}
                        onPress={() => setMethod("cash")}
                    >
                        <Text style={[styles.methodText, method === "cash" && styles.methodTextSelected]}>Efectivo</Text>
                    </Pressable>
                </View>

                {/* Imagen de tarjeta */}
                {method === "card" && (
                    <Image
                        source={require("@/assets/images/card.png")}
                        style={{ width: "100%", height: 200, marginVertical: 15 }}
                        contentFit="cover"
                    />
                )}

                {/* Formulario */}
                {method === "card" && (
                    <View style={styles.viewContainer}>
                        <View style={styles.form}>
                            <TextInput
                                style={styles.input}
                                placeholder="Nombre de la tarjeta"
                                placeholderTextColor={COLORS.gray}
                                value={name}
                                onChangeText={setName}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Número de tarjeta"
                                placeholderTextColor={COLORS.gray}
                                keyboardType="numeric"
                                value={number}
                                onChangeText={setNumber}
                            />

                            <View style={styles.row}>
                                <TextInput
                                    style={[styles.input, styles.inputHalf]}
                                    placeholder="Fecha de expiración"
                                    placeholderTextColor={COLORS.gray}
                                    value={expiry}
                                    onChangeText={setExpiry}
                                />
                                <TextInput
                                    style={[styles.input, styles.inputHalf]}
                                    placeholder="CCV"
                                    placeholderTextColor={COLORS.gray}
                                    secureTextEntry
                                    keyboardType="numeric"
                                    value={ccv}
                                    onChangeText={setCcv}
                                />
                            </View>
                        </View>
                    </View>
                )}

                {/* Botón fijo abajo */}
                {method && (
                    <Pressable style={styles.button} onPress={handleGoBack}>
                        <Text style={styles.buttonText}>Confirmar pago {method === "cash" ? "en efectivo" : ""}</Text>
                    </Pressable>
                )}

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#fff" },
    container: { flex: 1, justifyContent: "flex-start", paddingBottom: 20 },
    header: {
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    backButton: { height: 40, justifyContent: "center", paddingHorizontal: 10 },
    title: { fontFamily: "DM Sans", fontWeight: "800", fontSize: 25, lineHeight: 40, textAlign: "center" },

    methodsContainer: { flexDirection: "row", justifyContent: "space-around", marginVertical: 20 },
    methodButton: {
        flex: 1,
        marginHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.gray,
        alignItems: "center",
    },
    methodSelected: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
    methodText: { fontSize: 16, fontWeight: "600", color: COLORS.text },
    methodTextSelected: { color: "#fff" },

    viewContainer: { paddingHorizontal: 20, flex: 1 },
    form: { gap: 15 },
    input: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 15,
        color: COLORS.text,
        borderWidth: 1,
        borderColor: COLORS.gray,
    },
    row: { flexDirection: "row", justifyContent: "space-between", gap: 10 },
    inputHalf: { flex: 1 },

    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 20,
    },
    buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});

export default Payment;
