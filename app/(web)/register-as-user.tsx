import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import CallToAction from "@/components/web/call-to-action";
import Footer from "@/components/web/footer";
import Header from "@/components/web/header";

const { height } = Dimensions.get("window");

const RegisterAsProfessional: React.FC = () => {
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    return (
        <ScrollView contentContainerStyle={{ minHeight: height }}>
            <Header />

            <View style={styles.content}>
                <View style={styles.headerSection}>
                    <Text style={styles.headerTitle}>Crear cuenta de usuario</Text>
                </View>

                <View style={styles.form}>
                    <TextInput placeholder="Nombre" style={styles.input} />
                    <TextInput placeholder="Apellido" style={styles.input} />
                    <TextInput placeholder="Email" style={styles.input} />
                    <TextInput placeholder="Contraseña" style={styles.input} secureTextEntry />
                    <TextInput placeholder="Repetir contraseña" style={styles.input} secureTextEntry />

                    {/* Checkbox de términos y condiciones */}
                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setAcceptedTerms(!acceptedTerms)}
                    >
                        <View style={[styles.checkbox, acceptedTerms && styles.checkboxChecked]}>
                            {acceptedTerms && <Text style={styles.checkmark}>✓</Text>}
                        </View>
                        <Text style={styles.checkboxText}>Acepto los términos y condiciones</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            !acceptedTerms && { backgroundColor: "#ccc" }
                        ]}
                        disabled={!acceptedTerms}
                    >
                        <Text style={styles.buttonText}>Crear cuenta</Text>
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
        width: 400,
        marginHorizontal: "auto",
        paddingVertical: 40,
        gap: 15,
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 8,
        width: 400,
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginTop: 10,
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
    button: {
        backgroundColor: "#50B4E8",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "600",
    },
});

export default RegisterAsProfessional;
