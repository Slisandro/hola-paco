import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Second screen OnBoarding
export default function Onboarding2() {
    const router = useRouter();

    const handleBack = () => router.push("/");
    const handleRegisterAsUser = () => router.push("/(public)/auth");
    const handleRegisterAsProfessional = () => router.push("/(public)/auth/sign-up");

    return (
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <StatusBar style="light" backgroundColor="#50B4E8" />

            <Image
                source={require("@/assets/images/logo.png")}
                style={styles.image}
                contentFit="contain"
                transition={300}
            />

            <View>
                <Text style={styles.title}>Regístrate</Text>
                <Text style={styles.subtitle}>Elige tu categoría de cuenta:</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>USUARIO</Text>
                <Text style={styles.cardText}>El servicio que necesitas a un click</Text>
                <Pressable onPress={handleRegisterAsUser} style={[styles.buttonPrimary, { backgroundColor: "#FC9701" }]}>
                    <Text style={styles.buttonPrimaryText}>Crear cuenta de usuario</Text>
                </Pressable>
            </View>

            <View style={[styles.card, styles.cardProfessional]}>
                <Text style={styles.cardTitle}>PROFESIONAL</Text>
                <Text style={styles.cardText}>
                    ¿Listo para el siguiente nivel?{"\n"}
                    ¡Conviértete en PacoPro!
                </Text>
                <Pressable onPress={handleRegisterAsProfessional} style={styles.buttonPrimary}>
                    <Text style={[styles.buttonPrimaryText, { color: "#fff" }]}>Crear cuenta de usuario</Text>
                </Pressable>
            </View>

            <Pressable onPress={handleBack} style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>Volver</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#50B4E8",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
    image: {
        width: 150,
        height: 150,
    },
    title: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: 22,
        lineHeight: 32,
        letterSpacing: 0,
        textAlign: "center",
        color: "#000",
    },
    subtitle: {
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 32,
        letterSpacing: 0,
        textAlign: "center",
        color: "#000",
    },
    card: {
        padding: 16,
        backgroundColor: "#fff",
        width: "75%",
        borderRadius: 12
    },
    cardProfessional: {
        backgroundColor: "#FC9701",
        marginTop: 16,
        width: "75%",
        borderRadius: 12
    },
    cardTitle: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: 15,
        lineHeight: 29,
        letterSpacing: 0,
        textAlign: "center",
        color: "#000",
    },
    cardText: {
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: 15,
        lineHeight: 29,
        letterSpacing: 0,
        textAlign: "center",
        color: "#000",
        marginBottom: 8,
    },
    buttonPrimary: {
        backgroundColor: "#50B4E8",
        paddingHorizontal: 10,
        paddingVertical: 6,
        alignItems: "center",
        borderRadius: 6,
    },
    buttonPrimaryText: {
        fontFamily: "DM Sans",
        fontWeight: "700",
        fontSize: 15,
        lineHeight: 22,
        letterSpacing: 0,
        textAlign: "center",
        color: "#000",
    },
    buttonSecondary: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 12,
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 6,
        marginTop: 16,
        width: "50%"
    },
    buttonSecondaryText: {
        fontFamily: "DM Sans",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color: "#50B4E8",
    },
});
