import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
    const router = useRouter();
    const [secure, setSecure] = useState(true);
    const [checked, setChecked] = useState(false);

    const handleAppleLogin = () => router.replace("/(public)/agreement");
    const handleGoogleLogin = () => router.replace("/(public)/agreement");

    const handleGoToRegister = () => router.push("/(public)/auth/sign-up");
    const handleForgotPassword = () => router.push("/(public)/auth/forgot-password");
    const handleLogin = () => router.replace("/(public)/agreement");

    return (
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <StatusBar style="dark" />
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Inicia sesión en tu cuenta</Text>

                {/* Inputs */}
                <View style={styles.inputsContainer}>
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

                    {/* Remember Me + Forgot Password */}
                    <View style={styles.rowBetween}>
                        <Pressable style={styles.checkboxContainer} onPress={() => setChecked(!checked)}>
                            <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
                                {checked && <Ionicons name="checkmark" size={16} color="white" />}
                            </View>
                            <Text style={styles.label}>Acuerdate de mi</Text>
                        </Pressable>

                        <Pressable onPress={handleForgotPassword}>
                            <Text style={styles.forgotPassword}>¿Has olvidado tu contraseña?</Text>
                        </Pressable>
                    </View>

                    <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
                        <Text style={styles.signInButtonText}>Iniciar sesión</Text>
                    </TouchableOpacity>

                    <Text style={styles.textAction}>
                        ¿No tienes cuenta?{" "}
                        <Text style={styles.textActionBold} onPress={handleGoToRegister}>
                            Regístrate
                        </Text>
                    </Text>

                    {/* Divider */}
                    <View style={styles.divider}>
                        <View style={styles.line} />
                        <Text style={styles.dividerText}>Ó</Text>
                        <View style={styles.line} />
                    </View>

                    {/* Social Login */}
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
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    innerContainer: { flex: 1, justifyContent: "center", paddingHorizontal: 20, gap: 30 },

    title: { fontFamily: "Montserrat", fontWeight: "500", fontSize: 22, lineHeight: 32, color: "#000" },

    inputsContainer: { gap: 20 },
    inputWrapper: { flexDirection: "row", alignItems: "center", backgroundColor: "#F7F7F9", borderRadius: 14, paddingHorizontal: 12 },
    input: { flex: 1, paddingVertical: 16, fontSize: 16, fontFamily: "Inter", color: "#000" },
    icon: { marginRight: 10 },

    rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    forgotPassword: { textAlign: "right", color: "#0D6EFD", fontFamily: "Inter", fontSize: 14 },

    checkboxContainer: { flexDirection: "row", alignItems: "center", gap: 8 },
    checkbox: { width: 20, height: 20, borderWidth: 2, borderColor: "#C4C4C4", borderRadius: 4, justifyContent: "center", alignItems: "center" },
    checkboxChecked: { backgroundColor: "#50B4E8", borderColor: "#50B4E8" },
    label: { fontFamily: "DM Sans", fontWeight: "500", fontSize: 14, lineHeight: 22, color: "#000" },

    signInButton: { marginTop: 20, backgroundColor: "#50B4E8", padding: 16, borderRadius: 12 },
    signInButtonText: { color: "#fff", fontSize: 16, textAlign: "center", fontWeight: "600", fontFamily: "Inter" },

    textAction: { textAlign: "center", color: "#616161", fontFamily: "Inter", fontWeight: "400", fontSize: 14, marginTop: 15 },
    textActionBold: { fontFamily: "Inter", fontWeight: "500", fontSize: 14, lineHeight: 16, color: "#0D6EFD" },

    divider: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 10, marginHorizontal: 40 },
    line: { flex: 1, height: 1, backgroundColor: "#C4C4C4" },
    dividerText: { marginHorizontal: 10, fontSize: 16, fontWeight: "500", color: "#C4C4C4" },

    button: { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8, width: "100%", borderWidth: 1, borderColor: "#ADADAD", gap: 10 },
    appleButton: { backgroundColor: "transparent" },
    googleButton: { backgroundColor: "transparent" },
    buttonText: { color: "#000", fontSize: 16, fontWeight: "600", textAlign: "center" },
    socialIcon: { width: 24, height: 24 },
});
