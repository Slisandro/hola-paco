import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPasswordScreen() {
    const router = useRouter();

    const handleAppleLogin = () => console.log("Iniciar sesión con Apple");
    const handleGoogleLogin = () => console.log("Iniciar sesión con Google");
    
    const handleGoToRegister = () => router.push("/auth/sign-up");
    const handleCodeOTP = () => router.push("/auth/otp");
    const handleSendInstructions = () => router.replace("/(private)/(tabs)");
    const handleGoBack = () => router.back();

    return (
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <StatusBar style="dark" />

            {/* Back button */}
            <Pressable style={styles.backButton} onPress={handleGoBack}>
                <Ionicons name="arrow-back" size={24} color="#000" />
            </Pressable>

            <View style={styles.innerContainer}>
                <Text style={styles.title}>Recupera tu cuenta</Text>

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

                    <Pressable style={styles.otpButton} onPress={handleCodeOTP}>
                        <Text style={styles.otpButtonText}>Recibir código OTP</Text>
                    </Pressable>

                    <TouchableOpacity style={styles.sendButton} onPress={handleSendInstructions}>
                        <Text style={styles.sendButtonText}>Enviar instrucciones</Text>
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
                        <AntDesign name="apple" size={24} color="black" />
                        <Text style={styles.buttonText}>Iniciar sesión con Apple</Text>
                    </Pressable>

                    <Pressable style={[styles.button, styles.googleButton]} onPress={handleGoogleLogin}>
                        <Image source={require("@/assets/icons/Google.png")} style={styles.socialIcon} />
                        <Text style={styles.buttonText}>Iniciar sesión con Google</Text>
                    </Pressable>
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
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F7F7F9",
        borderRadius: 14,
        paddingHorizontal: 12
    },
    input: { flex: 1, paddingVertical: 16, fontSize: 16, fontFamily: "Inter", color: "#000" },
    icon: { marginRight: 10 },

    otpButton: { alignSelf: "flex-end", marginVertical: 8 },
    otpButtonText: { fontFamily: "Inter", fontWeight: "500", fontSize: 14, color: "#0D6EFD" },

    sendButton: { marginTop: 20, backgroundColor: "#50B4E8", padding: 16, borderRadius: 12 },
    sendButtonText: { color: "#fff", fontSize: 16, textAlign: "center", fontWeight: "600", fontFamily: "Inter" },

    textAction: { textAlign: "center", color: "#616161", fontFamily: "Inter", fontSize: 14, marginTop: 15 },
    textActionBold: { fontFamily: "Inter", fontWeight: "500", fontSize: 14, color: "#0D6EFD" },

    divider: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 10 },
    line: { flex: 1, height: 1, backgroundColor: "#C4C4C4" },
    dividerText: { marginHorizontal: 10, fontSize: 16, fontWeight: "500", color: "#C4C4C4" },

    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        width: "100%",
        borderWidth: 1,
        borderColor: "#ADADAD",
        gap: 10,
        marginTop: 10
    },
    appleButton: { backgroundColor: "transparent" },
    googleButton: { backgroundColor: "transparent" },
    buttonText: { color: "#000", fontSize: 16, fontWeight: "600", textAlign: "center" },
    socialIcon: { width: 24, height: 24 },
});
