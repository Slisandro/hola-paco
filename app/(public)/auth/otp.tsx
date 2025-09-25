import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
    const router = useRouter();

    const handleLogin = () => router.replace("/(public)/agreement");
    const handleGoBack = () => router.back();

    return (
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <StatusBar style="dark" />

            <Pressable style={styles.backButton} onPress={handleGoBack}>
                <Ionicons name="arrow-back" size={24} color="#000" />
            </Pressable>

            <View style={styles.innerContainer}>
                <Text style={styles.title}>Código de autenticación</Text>

                <Text style={{
                    fontFamily: "DM Sans",
                    fontWeight: "400",
                    fontSize: 16,
                    lineHeight: 24,
                    letterSpacing: 0,
                    textAlignVertical: "center",
                }}>
                    Ingrese el código de 5 dígitos que acabamos de enviar por mensaje de texto a su correo electrónico jhon@gmail.com
                </Text>

                {/* Inputs */}
                <View style={styles.inputsContainer}>
                    <OTPInput />

                    <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
                        <Text style={styles.signInButtonText}>Confirmar</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={[styles.signInButton, { backgroundColor: "#FFA962" }]} onPress={handleLogin}>
                        <Text style={styles.signInButtonText}>Reenviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}


function OTPInput() {
    const [code, setCode] = useState(["", "", "", "", ""]);
    const inputs = useRef([]);

    // @ts-expect-error
    const handleChange = (text, index) => {
        if (!/^\d*$/.test(text)) return; // solo números
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        // mover foco al siguiente input
        if (text && index < inputs.current.length - 1) {
            // @ts-expect-error
            inputs.current[index + 1].focus();
        }
    };

    // @ts-expect-error
    const handleKeyPress = ({ nativeEvent }, index) => {
        if (nativeEvent.key === "Backspace" && !code[index] && index > 0) {
            // @ts-expect-error
            inputs.current[index - 1].focus();
        }
    };

    return (
        <View style={stylesOTP.container}>
            {code.map((digit, index) => (
                <TextInput
                    key={index}
                    // @ts-expect-error
                    ref={(ref) => (inputs.current[index] = ref)}
                    value={digit}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    keyboardType="number-pad"
                    maxLength={1}
                    style={stylesOTP.input}
                />
            ))}
        </View>
    );
}

const stylesOTP = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
    },
    input: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "#C4C4C4",
        borderRadius: 8,
        textAlign: "center",
        fontSize: 20,
        fontFamily: "DM Sans",
    },
});


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },

    backButton: { paddingHorizontal: 20, paddingVertical: 10 },

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

    signInButton: { marginTop: 0, backgroundColor: "#50B4E8", padding: 16, borderRadius: 12 },
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
