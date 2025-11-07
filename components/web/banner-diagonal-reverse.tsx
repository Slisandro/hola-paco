import { LinearGradient } from "expo-linear-gradient";
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
            <LinearGradient
                colors={["#007ACC", "#004F8A"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.orangeBg}
            />

            <LinearGradient
                colors={["#FFB87A", "#FF8C42"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={[
                    styles.blueBg,
                    { transform: [{ skewX: isMobile ? "-10deg" : "-15deg" }] },
                ]}
            />

            {/* Contenido */}
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
                                fontSize: isMobile ? 16 : isTablet ? 18 : 26,
                                lineHeight: isMobile ? 22 : isTablet ? 26 : 30,
                                textAlign: isMobile ? "center" : "center",
                                maxWidth: isMobile ? "100%" : "75%",
                                marginHorizontal: "auto",
                                textTransform: "uppercase"
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
                            style={
                                [
                                    styles.buttonText,
                                    {
                                        fontSize: isMobile ? 12 : 20,
                                        textTransform: "uppercase",
                                        marginTop: 20,
                                        marginHorizontal: "auto"
                                    }
                                ]
                            }
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
    orangeBg: {
        flex: 1,
    },
    blueBg: {
        flex: 0.3,
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
