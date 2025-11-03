import { Image, ImageBackground } from "expo-image";
import React, { useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

const categories = [
    { id: 1, name: "Fontanería", path: require("@/assets/icons/services/fontaneria.png") },
    { id: 2, name: "Limpieza", path: require("@/assets/icons/services/limpieza.png") },
    { id: 3, name: "Electricista", path: require("@/assets/icons/services/electricista.png") },
    { id: 4, name: "Carpintería", path: require("@/assets/icons/services/carpinteria.png") },
    { id: 5, name: "Montaje", path: require("@/assets/icons/services/montaje.png") },
    { id: 6, name: "Jardinería", path: require("@/assets/icons/services/jardineria.png") },
];

const HeroSection = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const [windowHeight, setWindowHeight] = React.useState<number | null>(null);

    React.useEffect(() => {
        const { height } = Dimensions.get("window");
        setWindowHeight(height);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require("@/assets/images/hero-background.png")}
                style={StyleSheet.absoluteFillObject}
                contentFit="cover"
            />

            {/* @ts-ignore */}
            <View style={[styles.container, { minHeight: windowHeight ? windowHeight : "100vh" }]}>

                <View style={{ flexDirection: "row", alignItems: "center", height: "100%" }}>
                    <View style={{ width: "50%", gap: 30, height: "100%", justifyContent: "center", paddingHorizontal: 90 }}>
                        <Text
                            style={{
                                fontSize: 40,
                                fontWeight: 700,
                                color: "white",
                            }}
                        >
                            Encuentra y contrata al instante servicios confiables para tu hogar o negocio
                        </Text>
                        <View style={{ gap: 10 }}>
                            <Pressable
                                onPress={handleOpenModal}
                                style={{
                                    paddingVertical: 10,
                                    paddingLeft: 18,
                                    backgroundColor: "white",
                                    borderRadius: 12,
                                    width: "75%"
                                }}
                            >
                                <Text style={{ opacity: .5, fontSize: 18, fontWeight: 500 }}>Seleccionar ubicación</Text>
                            </Pressable>

                            <Pressable
                                onPress={handleOpenModal}
                                style={{
                                    paddingVertical: 10,
                                    paddingLeft: 18,
                                    backgroundColor: "white",
                                    borderRadius: 12,
                                    width: "75%"
                                }}
                            >
                                <Text style={{ opacity: .5, fontSize: 18, fontWeight: 500 }}>Ciudad</Text>
                            </Pressable>

                            <Pressable
                                onPress={handleOpenModal}
                                style={{
                                    paddingVertical: 10,
                                    paddingLeft: 18,
                                    backgroundColor: "white",
                                    borderRadius: 12,
                                    width: "75%"
                                }}
                            >
                                <Text style={{ opacity: .5, fontSize: 18, fontWeight: 500 }}>Selecciona el servicio</Text>
                            </Pressable>
                        </View>

                        <Pressable
                            onPress={handleOpenModal}
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal: 30,
                                borderRadius: 4,
                                alignSelf: "flex-start",
                                backgroundColor: "#FFA962",
                                marginTop: 0
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                    fontWeight: 500,
                                    fontSize: 18
                                }}
                            >
                                CONTRATA AHORA
                            </Text>
                        </Pressable>

                    </View>

                    <View
                        style={{
                            width: "50%", height: "100%"
                        }}
                    >
                        <Image
                            source={require("@/assets/images/paco-home.png")}
                            style={{
                                width: "100%",
                                height: "90%",
                                marginTop: "auto"
                            }}
                            contentFit="contain"
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
        paddingBottom: 0,
        gap: 30,
        justifyContent: "center",
        backgroundColor: "#0C85BEDD",
    },
    title: {
        fontSize: 34,
        textAlign: "center",
        color: "#fff",
    },
    inputsContainer: {
        flexDirection: "row",
        marginBottom: 20,
        gap: 20,
        marginHorizontal: "auto",
    },
    input: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        color: "#1E1E1E",
        width: 250
    },
    categoriesWrapper: {
        height: 150,
        width: "100%",
        justifyContent: "center"
    },
    categoriesContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingHorizontal: 16,
        marginHorizontal: "auto"
    },
    categoryCard: {
        width: 150,
        height: 150,
        borderRadius: 12,
        overflow: "hidden",
    },
    categoryCardActive: {
        borderWidth: 2,
        borderColor: "#FFA962",
    },
    categoryImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.35)",
        borderRadius: 12,
    },
    categoryText: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center",
        position: "absolute",
        zIndex: 2,
        fontSize: 14,
        paddingHorizontal: 4,
        bottom: 15
    },
    categoryTextActive: {
        color: "#FFD700",
    },
});

export default HeroSection;
