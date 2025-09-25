import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Initial OnBoarding
export default function Onboarding() {
    const router = useRouter()
    const handleAppleLogin = () => router.replace("/agreement");

    const handleGoogleLogin = () => router.replace("/agreement");

    const handleGoToRegister = () => router.push("/(public)/auth/sign-up");
    const handleGoToSignInWithEmail = () => router.push("/(public)/auth/login");

    return (
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <StatusBar style="dark"/>

            <Text
                style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: 28,
                    lineHeight: 40,
                    letterSpacing: 0,
                    textAlign: "center",
                    textAlignVertical: "center",
                    color: "#FFFFFF",
                    marginVertical: 40
                }}
            >
                ¡Bienvenido de nuevo!
            </Text>

            <View style={styles.bottomSheet}>
                <Pressable style={[styles.button, styles.appleButton]} onPress={handleAppleLogin}>
                    <AntDesign name="apple" size={24} color="black" style={styles.icon} />
                    <Text style={styles.buttonText}>Iniciar sesión con Apple</Text>
                </Pressable>

                <Pressable style={[styles.button, styles.googleButton]} onPress={handleGoogleLogin}>
                    <Image
                        source={require("@/assets/icons/Google.png")}
                        style={[styles.icon, { width: 24, height: 24 }]}
                    />
                    <Text style={styles.buttonText}>Iniciar sesión con Google</Text>
                </Pressable>

                <View style={styles.divider}>
                    <View style={styles.line} />
                    <Text style={styles.text}>Ó</Text>
                    <View style={styles.line} />
                </View>

                <Pressable
                    style={styles.buttonEmail}
                    onPress={handleGoToSignInWithEmail}
                >
                    <Text style={styles.buttonEmailText}>Continuar con el correo electrónico</Text>
                </Pressable>

                <Text style={styles.textAction}>
                    ¿No tienes cuenta? &nbsp;
                    <Text
                        style={styles.textActionBold}
                        onPress={handleGoToRegister}
                    >
                        Regístrate
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#50B4E8",
    },
    bottomSheet: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 20,
        gap: 10
    },
    title: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: 0,
        textAlign: "center",
        textAlignVertical: "center",
    },
    subtitle: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#000",
    },
    containerButton: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: 75,
        width: 75
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        width: "100%",
        borderWidth: 1,
        borderColor: "#ADADAD"
    },
    appleButton: {
        backgroundColor: "transparent",
    },
    googleButton: {
        backgroundColor: "transparent",
    },
    icon: {
        marginRight: 10,
    },
    buttonText: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
    },
    divider: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 40
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#C4C4C4",
    },
    text: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: "500",
        color: "#C4C4C4",
    },
    buttonEmail: {
        backgroundColor: "#50B4E8",
        paddingHorizontal: 12,
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 6,
    },
    buttonEmailText: {
        fontFamily: "DM Sans",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color: "#FFF",
    },
    textAction: {
        textAlign: "center",
        color: "#616161",
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: 14,
        marginTop: 15
    },
    textActionBold: {
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 16,
        textAlign: "right",
        color: "#000000"
    }
});
