import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ServiceDetail = () => {
    const router = useRouter();

    const handleGoBack = () => router.push("/(private)/(services)/Hire");
    const handleGoChat = () => router.push("/(private)/(services)/contact");

    const images = [
        "https://i.pravatar.cc/90?img=6",
        "https://i.pravatar.cc/50?img=1",
        "https://i.pravatar.cc/60?img=2",
        "https://i.pravatar.cc/70?img=3",
        "https://i.pravatar.cc/80?img=4",
        "https://i.pravatar.cc/90?img=5",
    ];

    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar style="dark" />

            <Pressable style={styles.backButton} onPress={handleGoBack}>
                <Ionicons name="arrow-back" size={24} color="#000" />
            </Pressable>
            <ScrollView>

                <View style={styles.content}>
                    <View style={styles.headerRow}>
                        <Text style={styles.orderText}>Pedido #000123</Text>
                        <Pressable style={styles.statusBadge}>
                            <Text style={styles.statusText}>Programado</Text>
                        </Pressable>
                    </View>

                    <View style={styles.sectionWrapper}>
                        <View style={styles.card}>
                            <Text style={styles.sectionTitle}>Resumen</Text>
                            <Text style={styles.regularText}>Tipo: Limpieza profunda</Text>
                            <Text style={styles.regularText}>Baños: 2</Text>
                            <Text style={styles.regularText}>Cuartos: 3</Text>

                            <View style={styles.rowBetween}>
                                <Text style={styles.regularText}>Tamaño: 90m2</Text>
                                <Text style={styles.priceText}>180 €</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <Text style={styles.sectionTitle}>Programación</Text>
                            <Text style={styles.regularText}>Jueves, 2 de septiembre</Text>
                            <Text style={styles.regularText}>10:20 a.m. - 1:30 p.m.</Text>
                        </View>

                        <View style={styles.card}>
                            <Text style={styles.sectionTitle}>Dirección</Text>
                            <Text style={styles.regularText}>Calle 123, Madrid</Text>
                        </View>

                        <View style={styles.card}>
                            <Text style={styles.sectionTitle}>Imágenes</Text>
                            <View style={styles.imageGrid}>
                                {images.map((img, index) => (
                                    <Image
                                        key={index}
                                        source={{ uri: img }}
                                        style={styles.imageItem}
                                        contentFit="cover"
                                    />
                                ))}
                            </View>
                        </View>

                        <View style={{ gap: 10 }}>
                            <View style={{ flexDirection: "row", gap: 10 }}>
                                <Pressable style={[styles.reprogramButton, styles.halfButton]}>
                                    <Text style={styles.actionText}>Reprogramar</Text>
                                </Pressable>

                                <Pressable style={[styles.defaultButton, styles.halfButton]}>
                                    <Text style={styles.actionText}>Cancelar</Text>
                                </Pressable>
                            </View>

                            <Pressable onPress={handleGoChat} style={[styles.defaultButton, styles.fullButton]}>
                                <Text style={styles.actionText}>Contactar proveedor</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#50B4E8"
    },
    backButton: {
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    content: {
        flex: 1,
        paddingBottom: 20,
        backgroundColor: "#FFFFFF"
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    orderText: {
        fontFamily: "DM Sans",
        fontWeight: "800",
        fontSize: 18,
        lineHeight: 40,
        letterSpacing: 0,
        color: "#000",
        textAlignVertical: "center",
    },
    statusBadge: {
        backgroundColor: "#50B4E8",
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    statusText: {
        fontFamily: "DM Sans",
        fontWeight: "700",
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0,
        color: "#FFFFFF",
        textAlign: "center",
        textAlignVertical: "center",
    },
    sectionWrapper: {
        paddingHorizontal: 15,
        gap: 15,
    },
    card: {
        borderWidth: 1,
        borderColor: "#B6B7B9",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 12,
    },
    sectionTitle: {
        fontFamily: "DM Sans",
        fontWeight: "800",
        fontSize: 18,
        lineHeight: 40,
        letterSpacing: 0,
        color: "#000",
        textAlignVertical: "center",
    },
    regularText: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 0,
        color: "#000",
        textAlignVertical: "center",
    },
    priceText: {
        fontFamily: "DM Sans",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 25,
        letterSpacing: 0,
        color: "#000",
        textAlign: "right",
        textAlignVertical: "center",
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
    },
    imageGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 10,
        width: "100%",
    },
    imageItem: {
        width: 100,
        height: 100,
        aspectRatio: 1,
        borderRadius: 8,
        backgroundColor: "#EAEAEA",
        marginBottom: 8,
    },
    reprogramButton: {
        borderRadius: 10,
        backgroundColor: "#FFA962",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 7,
        paddingHorizontal: 13,
        height: 46,
    },
    defaultButton: {
        borderRadius: 10,
        backgroundColor: "#50B4E8",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 7,
        paddingHorizontal: 13,
        height: 46,
    },
    halfButton: {
        flex: 1,
    },
    fullButton: {
        width: "100%",
    },
    actionText: {
        fontFamily: "DM Sans",
        fontWeight: "700",
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0,
        color: "#FFFFFF",
        textAlign: "center",
        textAlignVertical: "center",
    },
})

export default ServiceDetail
