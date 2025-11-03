import React from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function BannerDiagonalReverse() {
    const screenWidth = Dimensions.get("window").width;

    // Breakpoints
    const isMobile = screenWidth < 600;
    const isTablet = screenWidth >= 600 && screenWidth < 1024;

    // Altura adaptable
    const bannerHeight = isMobile ? 220 : isTablet ? 260 : 220;
    
    return (
        <View style={[styles.container, { height: bannerHeight }]}>
            {/* Fondos diagonales */}
            <View style={styles.orangeBg} />
            <View style={[styles.blueBg, { transform: [{ skewX: isMobile ? "-10deg" : "-15deg" }] }]} />

            {/* Contenido */}
            <View style={[styles.content, { paddingHorizontal: isMobile ? 20 : isTablet ? 40 : 80 }]}>
                {/* Imagen del personaje */}
                <Image
                    source={require("@/assets/images/homepage/paco-download.png")}
                    style={[
                        styles.image,
                        {
                            width: isMobile ? 140 : isTablet ? 200 : 260,
                            height: isMobile ? 140 : isTablet ? 200 : 260,
                            right: isMobile ? 60 : isTablet ? 200 : 300,
                            bottom: isMobile ? -20 : 0,
                        },
                    ]}
                />

                {/* Texto */}
                <View
                    style={[
                        styles.textContainer,
                        {
                            marginLeft: isMobile ? "15%" : isTablet ? "18%" : "20%",
                            width: isMobile ? "80%" : isTablet ? "60%" : "50%",
                        },
                    ]}
                >
                    <Text
                        style={[
                            styles.title,
                            {
                                fontSize: isMobile ? 16 : isTablet ? 10 : 22,
                                lineHeight: isMobile ? 22 : isTablet ? 26 : 30,
                                textAlign: isMobile ? "center" : "left",
                                maxWidth: isMobile ? "100%" : 420,
                            },
                        ]}
                    >
                        Descarga la app y vive la experiencia de un hogar impecable
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
                                { fontSize: isMobile ? 12 : 13 },
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
        backgroundColor: "#FF9E5E",
    },
    orangeBg: {
        flex: 1,
        backgroundColor: "#007ACC",
    },
    blueBg: {
        flex: 0.3,
        backgroundColor: "#FF9E5E",
        marginLeft: -50,
    },
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
        zIndex: 10,
        resizeMode: "contain",
    },
    textContainer: {
        flex: 1,
    },
    title: {
        color: "#fff",
        fontWeight: "700",
        textTransform: "uppercase",
    },
    button: {
        backgroundColor: "#FFB87A",
        marginTop: 14,
        borderRadius: 6,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "700",
    },
});
