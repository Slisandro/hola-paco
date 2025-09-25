import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CompleteRegister = () => {
    const router = useRouter();
    
    const handleToHome = () => router.replace("/(private)/(tabs)");

    return (
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <StatusBar style="light" backgroundColor="#50B4E8" />

            <View style={styles.imageContainer}>
                <Image
                    source={require("@/assets/icons/CompleteRegister.png")}
                    style={styles.image}
                    contentFit="contain"
                    transition={300}
                />
            </View>

            <View style={styles.bottomSheet}>
                <Text style={styles.title}>
                    ¡Enhorabuena!
                </Text>

                <Text style={styles.subtitle}>
                    Has completado el registro
                </Text>

                <TouchableOpacity style={styles.signInButton} onPress={handleToHome}>
                    <Text style={styles.signInButtonText}>Aceptar y continuar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#50B4E8",
    },
    imageContainer: {
        flex: 1,
        backgroundColor: "transparent",
        padding: 40
    },
    image: {
        width: "100%",
        height: "100%",
    },
    bottomSheet: {
        height: "auto",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        gap: 15
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
    signInButton: { marginTop: 0, backgroundColor: "#50B4E8", padding: 16, borderRadius: 12 },
    signInButtonText: { color: "#fff", fontSize: 16, textAlign: "center", fontWeight: "600", fontFamily: "Inter" },
})

export default CompleteRegister