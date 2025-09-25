import CallToAction from '@/components/web/call-to-action'
import Footer from '@/components/web/footer'
import Header from '@/components/web/header'
import { ImageBackground } from 'expo-image'
import { useRouter } from 'expo-router'
import React from 'react'
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

const { height } = Dimensions.get("window");

const Register = () => {
    const router = useRouter();

    const handleRegisterAsProffesional = () => router.push("/(web)/register-as-professional");
    const handleRegisterAsUser = () => router.push("/(web)/register-as-user");

    return (
        <ScrollView contentContainerStyle={{ minHeight: height }}>
            <Header />

            <ImageBackground
                source={require("@/assets/images/login-background.png")}
                style={StyleSheet.absoluteFillObject}
                contentFit="cover"
            />

            <View style={styles.content}>

                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontWeight: 700, fontSize: 24 }}>REGISTRATE</Text>
                    <Text style={{ fontWeight: 500, fontSize: 24 }}>Elige tu categoría de cuenta:</Text>
                </View>

                <View style={{ flexDirection: "row", gap: 50 }}>

                    <View style={styles.card}>
                        <Text style={{ fontWeight: 500, fontSize: 18 }}>Usuario</Text>
                        <Text style={{ fontWeight: 400, fontSize: 16, width: "50%", marginHorizontal: "auto", textAlign: "center" }}>El servicio que necesitas está a un click</Text>

                        <Pressable onPress={handleRegisterAsUser} style={{ backgroundColor: "#50B4E8", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 }}>
                            <Text style={{ fontWeight: 500, fontSize: 10, color: "white" }}>CREAR CUENTA DE USUARIO</Text>
                        </Pressable>
                    </View>

                    <View style={styles.card}>
                        <Text style={{ fontWeight: 500, fontSize: 18 }}>Profesional</Text>
                        <Text style={{ fontWeight: 400, fontSize: 16, width: "50%", marginHorizontal: "auto", textAlign: "center" }}>¿Listo para el siguiente nivel?</Text>

                        <Pressable onPress={handleRegisterAsProffesional} style={{ backgroundColor: "#50B4E8", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 }}>
                            <Text style={{ fontWeight: 500, fontSize: 10, color: "white" }}>CREAR CUENTA DE PROFESIONAL</Text>
                        </Pressable>
                    </View>

                </View>
            </View>

            <CallToAction />
            <Footer />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
        gap: 30,
        justifyContent: "center",
        alignItems: "center",
        minHeight: height * 0.75,
        marginTop: 70,
        backgroundColor: "#50B4E899",
    },
    card: {
        backgroundColor: "#FFA962",
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 12,
        gap: 15,
        alignItems: "center",
        width: 270
    }
})

export default Register