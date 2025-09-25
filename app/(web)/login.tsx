import React, { useState } from "react";
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import CallToAction from "@/components/web/call-to-action";
import Footer from "@/components/web/footer";
import Header from "@/components/web/header";
import { useAuth } from "@/contexts/AuthContext-web";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("window");

const Login: React.FC = () => {
    const { isAuthenticated, login, logout } = useAuth();
    const router = useRouter()
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleAppleLogin = () => login();
    const handleGoogleLogin = () => login();

    return (
        <ScrollView contentContainerStyle={{ minHeight: height }}>
            <Header />

            <View style={styles.content}>
                <View style={styles.headerSection}>
                    <Text style={styles.headerTitle}>Ingresé a su cuenta</Text>
                </View>

                <View style={styles.form}>
                    <TextInput placeholder="Email" style={styles.input} />
                    <TextInput placeholder="Contraseña" style={styles.input} secureTextEntry />


                    <View style={styles.divider}>
                        <View style={styles.line} />
                        <Text style={styles.dividerText}>Ó</Text>
                        <View style={styles.line} />
                    </View>

                    <Pressable style={[styles.button, styles.appleButton]} onPress={handleAppleLogin}>
                        <AntDesign name="apple" size={24} color="black" style={styles.icon} />
                        <Text style={styles.buttonText}>Iniciar sesión con Apple</Text>
                    </Pressable>

                    <Pressable style={[styles.button, styles.googleButton]} onPress={handleGoogleLogin}>
                        <Image
                            source={require("@/assets/icons/Google.png")}
                            style={styles.socialIcon}
                        />
                        <Text style={styles.buttonText}>Iniciar sesión con Google</Text>
                    </Pressable>

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
                            styles.buttonAction,
                            !acceptedTerms && { backgroundColor: "#ccc" }
                        ]}
                        onPress={() => login()}
                        disabled={!acceptedTerms}
                    >
                        <Text style={[styles.buttonText, { color: "white" }]}>Ingresar cuenta</Text>
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
    button: { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 6, paddingHorizontal: 16, borderRadius: 8, width: "auto", borderWidth: 1, borderColor: "#ADADAD", gap: 10 },
    buttonText: {
        // color: "#FFF",
        fontWeight: "600",
    },
    appleButton: { backgroundColor: "transparent" },
    googleButton: { backgroundColor: "transparent" },
    icon: { marginRight: 10 },
    socialIcon: { width: 24, height: 24 },
    divider: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 10, marginHorizontal: 40 },
    line: { flex: 1, height: 1, backgroundColor: "#C4C4C4" },
    dividerText: { marginHorizontal: 10, fontSize: 16, fontWeight: "500", color: "#C4C4C4" },
    buttonAction: {
        backgroundColor: "#50B4E8",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
    }
});

export default Login;
