import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function BannerDiagonalReverse() {
    const screenWidth = Dimensions.get("window").width;

    // Breakpoints
    const isMobile = screenWidth < 600;
    const isTablet = screenWidth >= 600 && screenWidth < 1024;

    // Altura adaptable
    const bannerHeight = isMobile ? 260 : isTablet ? 300 : 260;

    return (
        <View style={[styles.container, { height: bannerHeight }]}>
            {/* LEFT: gradiente azul */}
            <LinearGradient
                colors={["#007ACC", "#004F8A"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.blueBg}
            />

            {/* RIGHT: gradiente naranja (diagonal) */}
            <LinearGradient
                colors={["#FFB87A", "#FF8C42"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={[
                    styles.orangeBg,
                    { transform: [{ skewX: isMobile ? "-10deg" : "-15deg" }] },
                ]}
            />

            {/* CONTENIDO (usa exactamente tu bloque) */}
            <View
                style={[
                    styles.content,
                    { paddingHorizontal: isMobile ? 20 : isTablet ? 40 : 80 },
                ]}
            >
                {/* Imagen del personaje */}
                <Image
                    source={require("@/assets/images/homepage/paco-download.png")}
                    style={[
                        styles.image,
                        {
                            width: isMobile ? 140 : isTablet ? 200 : 260,
                            height: isMobile ? 140 : isTablet ? 200 : 260,
                            right: isMobile ? "8%" : isTablet ? "18%" : "22%", // porcentajes para responsivo
                            bottom: isMobile ? -20 : -6,
                        },
                    ]}
                />

                {/* Texto */}
                <View
                    style={[
                        styles.textContainer,
                        {
                            marginLeft: isMobile ? "6%" : isTablet ? "10%" : "12%",
                            width: isMobile ? "86%" : isTablet ? "58%" : "50%",
                            alignItems: isMobile ? "center" : "flex-start",
                        },
                    ]}
                >
                    <Text
                        style={[
                            styles.title,
                            {
                                fontSize: isMobile ? 16 : isTablet ? 18 : 26,
                                lineHeight: isMobile ? 22 : isTablet ? 26 : 30,
                                textAlign: isMobile ? "center" : "left",
                                maxWidth: isMobile ? "100%" : "50%",
                                textTransform: "uppercase",
                            },
                        ]}
                    >
                        DESCARGA LA APP Y VIVE LA EXPERIENCIA DE UN HOGAR IMPECABLE
                    </Text>

                    <Pressable
                        style={[
                            styles.button,
                            {
                                alignSelf: isMobile ? "center" : "flex-start",
                                paddingHorizontal: isMobile ? 14 : 20,
                                paddingVertical: isMobile ? 8 : 10,
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles.buttonText,
                                {
                                    fontSize: isMobile ? 12 : 16,
                                    textTransform: "uppercase",
                                    color: "white",
                                    margin: 4
                                },
                            ]}
                        >
                            AGENDA TU SERVICIO AHORA
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        overflow: "visible",
        flexDirection: "row",
        backgroundColor: "#FFB87A",
    },

    /* Blue left background */
    blueBg: {
        flex: 1.0,
    },

    /* Orange right diagonal */
    orangeBg: {
        flex: 0.45,
        marginLeft: -60,
    },

    /* Content sits above the backgrounds */
    content: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        zIndex: 10,
    },

    image: {
        position: "absolute",
        zIndex: 20,
        resizeMode: "contain",
        // sombra sutil (iOS/Android)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
    },

    textContainer: {
        flex: 1,
        zIndex: 30,
    },

    title: {
        color: "#fff",
        fontWeight: "800",
    },

    button: {
        backgroundColor: "#FFB87A",
        marginTop: 14,
        borderRadius: 8,
    },

    buttonText: {
        color: "#0B1A2A",
        fontWeight: "800",
    },
});
