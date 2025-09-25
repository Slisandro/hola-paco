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
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [ccv, setCcv] = useState("");

    const handleGoBack = () => router.push("/(private)/(create-services)/create-service");

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <View style={styles.container}>

                <View style={styles.header}>
                    <Pressable style={styles.backButton} onPress={handleGoBack}>
                        <Ionicons name="arrow-back" size={24} color="#000" />
                    </Pressable>

                    <Text style={styles.title}>Método de pago</Text>

                    <View />
                </View>

                <Image
                    source={require("@/assets/images/card.png")}
                    style={{ width: "100%", height: 250 }}
                    contentFit="cover"
                />

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

                    {/* Botón fijo abajo */}
                    <Pressable style={styles.button} onPress={handleGoBack}>
                        <Text style={styles.buttonText}>Confirmar pago</Text>
                    </Pressable>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff"
    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between",
        paddingBottom: 20
    },
    header: {
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    backButton: {
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    title: {
        fontFamily: "DM Sans",
        fontWeight: "800",
        fontSize: 25,
        lineHeight: 40,
        textAlign: "center",
        textAlignVertical: "center",
    },
    viewContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
        justifyContent: "space-between", // mantiene inputs arriba y botón abajo
    },

    form: {
        flex: 1,
        gap: 15, // espacio uniforme entre inputs
    },

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

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },

    inputHalf: {
        flex: 1,
    },

    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
})

export default Payment