import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
    const router = useRouter();
    const [secure, setSecure] = useState(true);
    const [confirmSecure, setConfirmSecure] = useState(true);
    const [checked, setChecked] = useState(false);

    const handleGoToLogin = () => router.push("/(public)/auth/login");
    const handleSignUp = () => router.replace("/(private)/(tabs)");
    const handleGoBack = () => router.back();

    return (
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <StatusBar style="dark" />
            <Pressable style={styles.backButton} onPress={handleGoBack}>
                <Ionicons name="arrow-back" size={24} color="#000" />
            </Pressable>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Crea tu cuenta</Text>

                {/* Inputs */}
                <View style={styles.inputsContainer}>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="person-outline" size={18} color="#7D848D" style={styles.icon} />
                        <TextInput
                            placeholder="Nombre completo"
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Ionicons name="mail-outline" size={18} color="#7D848D" style={styles.icon} />
                        <TextInput
                            placeholder="Correo electrónico"
                            keyboardType="email-address"
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Ionicons name="lock-closed-outline" size={18} color="#7D848D" style={styles.icon} />
                        <TextInput
                            placeholder="Contraseña"
                            secureTextEntry={secure}
                            style={styles.input}
                        />
                        <TouchableOpacity onPress={() => setSecure(!secure)}>
                            <Ionicons name={secure ? "eye-off" : "eye"} size={18} color="#7D848D" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Ionicons name="lock-closed-outline" size={18} color="#7D848D" style={styles.icon} />
                        <TextInput
                            placeholder="Confirmar contraseña"
                            secureTextEntry={confirmSecure}
                            style={styles.input}
                        />
                        <TouchableOpacity onPress={() => setConfirmSecure(!confirmSecure)}>
                            <Ionicons name={confirmSecure ? "eye-off" : "eye"} size={18} color="#7D848D" />
                        </TouchableOpacity>
                    </View>

                    {/* Remember Me */}
                    <Pressable style={styles.checkboxContainer} onPress={() => setChecked(!checked)}>
                        <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
                            {checked && <Ionicons name="checkmark" size={16} color="white" />}
                        </View>
                        <Text style={styles.label}>Acepto los términos y condiciones</Text>
                    </Pressable>

                    <TouchableOpacity style={styles.signInButton} onPress={handleSignUp}>
                        <Text style={styles.signInButtonText}>Registrarse</Text>
                    </TouchableOpacity>

                    <Text style={styles.textAction}>
                        ¿Ya tienes cuenta?{" "}
                        <Text style={styles.textActionBold} onPress={handleGoToLogin}>
                            Iniciar sesión
                        </Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },

    backButton: { paddingHorizontal: 20, paddingVertical: 10 },

    innerContainer: { flex: 1, justifyContent: "center", paddingHorizontal: 20, gap: 30 },

    title: { fontFamily: "Montserrat", fontWeight: "500", fontSize: 22, lineHeight: 32, color: "#000" },

    inputsContainer: { gap: 20 },
    inputWrapper: { flexDirection: "row", alignItems: "center", backgroundColor: "#F7F7F9", borderRadius: 14, paddingHorizontal: 12 },
    input: { flex: 1, paddingVertical: 16, fontSize: 16, fontFamily: "Inter", color: "#000" },
    icon: { marginRight: 10 },

    checkboxContainer: { flexDirection: "row", alignItems: "center", gap: 8 },
    checkbox: { width: 20, height: 20, borderWidth: 2, borderColor: "#C4C4C4", borderRadius: 4, justifyContent: "center", alignItems: "center" },
    checkboxChecked: { backgroundColor: "#50B4E8", borderColor: "#50B4E8" },
    label: { fontFamily: "DM Sans", fontWeight: "500", fontSize: 14, lineHeight: 22, color: "#000" },

    signInButton: { marginTop: 20, backgroundColor: "#50B4E8", padding: 16, borderRadius: 12 },
    signInButtonText: { color: "#fff", fontSize: 16, textAlign: "center", fontWeight: "600", fontFamily: "Inter" },

    textAction: { textAlign: "center", color: "#616161", fontFamily: "Inter", fontWeight: "400", fontSize: 14, marginTop: 15 },
    textActionBold: { fontFamily: "Inter", fontWeight: "500", fontSize: 14, lineHeight: 16, color: "#0D6EFD" },
});
