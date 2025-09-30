import { useAccount } from '@/contexts/AccountContext'
import { Ionicons } from '@expo/vector-icons'
import { ImageBackground } from 'expo-image'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ITEMS = [
    { name: "Fontanería", icon: require("@/assets/icons/services/fontaneria.jpg") },
    { name: "Limpieza", icon: require("@/assets/icons/services/limpieza.jpg") },
    { name: "Electricista", icon: require("@/assets/icons/services/electricista.jpg") },
    { name: "Carpintería", icon: require("@/assets/icons/services/carpinteria.jpg") },
    { name: "Montaje", icon: require("@/assets/icons/services/montaje.jpg") },
    { name: "Jardinería", icon: require("@/assets/icons/services/jardineria.jpg") },
]

const ProfileWorker = () => {
    const { accountType, setAccountType } = useAccount();
    const router = useRouter();
    const [selected, setSelected] = useState<number>(0);
    const [providerName, setProviderName] = useState("");
    const [address, setAddress] = useState("");

    const handleGoBack = () => router.push("/(private)/(tabs)/profile");
    const handleToHome = () => {
        setAccountType("profesional")
        router.push("/(private)/(tabs)/profile")
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <Pressable style={styles.backButton} onPress={handleGoBack}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </Pressable>
                <Text style={styles.dmSansTitle}>Registro de proveedor</Text>
                <View />
            </View>

            <ScrollView style={styles.container}>
                <Text style={styles.title}>Seleccionar tus servicios</Text>

                <View style={styles.grid}>
                    {ITEMS.map((item, index) => {
                        const isSelected = selected === index;
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.itemBox}
                                onPress={() => setSelected(Number(index))}
                            >
                                <ImageBackground
                                    source={item.icon}
                                    style={styles.itemImage}
                                    imageStyle={{ borderRadius: 12 }}
                                    contentFit="cover"
                                >
                                    <View style={[styles.overlay, isSelected && { backgroundColor: 'rgba(255,165,98,0.4)' }]} />
                                    <Text style={styles.itemText}>{item.name}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        )
                    })}
                </View>

                <View>
                    <TextInput
                        placeholder="Razón social / Nombre del proveedor"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="RUC / DNI"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Dirección"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Ciudad"
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity style={styles.signInButton} onPress={handleToHome}>
                    <Text style={styles.signInButtonText}>Crear cuenta</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#fff" },
    container: { flex: 1, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: "#F3F5FD", gap: 15 },
    header: { height: 60, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    dmSansTitle: { fontFamily: "DM Sans", fontWeight: "800", fontSize: 22, lineHeight: 40, color: "#000", textAlign: "center" },
    backButton: { height: 40, justifyContent: "center", paddingHorizontal: 10 },
    title: { fontFamily: "DM Sans", fontWeight: "800", fontSize: 20, lineHeight: 40, color: "#000" },
    grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginBottom: 20 },
    itemBox: { width: "30%", aspectRatio: 1, borderRadius: 12, overflow: 'hidden', marginBottom: 12 },
    itemImage: { flex: 1, justifyContent: "center", alignItems: "center" },
    overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.25)", borderRadius: 12 },
    itemText: {
        position: "absolute", color: "#fff", fontWeight: "700", textAlign: "center", zIndex: 2, fontSize: 14, paddingHorizontal: 4,
        bottom: 15
    },
    input: { backgroundColor: "#50B4E81A", borderWidth: 1, borderColor: "#DEDEDE", borderRadius: 8, paddingHorizontal: 14, paddingVertical: 16, fontSize: 14, marginBottom: 12, color: "#000", fontFamily: "Roboto Flex" },
    signInButton: { marginTop: 0, backgroundColor: "#50B4E8", padding: 16, borderRadius: 12 },
    signInButtonText: { color: "#fff", fontSize: 16, textAlign: "center", fontWeight: "600", fontFamily: "Inter" },
})

export default ProfileWorker
