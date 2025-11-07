import { Image, ImageBackground } from "expo-image";
import React, { useState } from "react";
import { Dimensions, Platform, Pressable, StyleSheet, Text, View } from "react-native";

const categories = [
    { id: 1, name: "Fontanería", path: require("@/assets/icons/services/fontaneria.png") },
    { id: 2, name: "Limpieza", path: require("@/assets/icons/services/limpieza.png") },
    { id: 3, name: "Electricista", path: require("@/assets/icons/services/electricista.png") },
    { id: 4, name: "Carpintería", path: require("@/assets/icons/services/carpinteria.png") },
    { id: 5, name: "Montaje", path: require("@/assets/icons/services/montaje.png") },
    { id: 6, name: "Jardinería", path: require("@/assets/icons/services/jardineria.png") },
];

const HeroSection = ({ handleOpenModal }: { handleOpenModal: () => void }) => {
    const screenWidth = Dimensions.get("window").width;
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    React.useEffect(() => {
        const { width, height } = Dimensions.get("window");
        setWindowSize({ width, height });

        const handleResize = () => {
            const { width, height } = Dimensions.get("window");
            setWindowSize({ width, height });
        };

        if (Platform.OS === "web") {
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    // Breakpoint example
    const isSmallScreen = windowSize.width < 768;
    const isTablet = screenWidth >= 600 && screenWidth < 1024;

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require("@/assets/images/hero-background.png")}
                style={StyleSheet.absoluteFillObject}
                contentFit="cover"
            />

            <View
                style={[
                    styles.container,
                    // @ts-expect-error
                    { minHeight: windowSize.height ? windowSize.height : "100vh" },
                ]}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        height: "100%",
                        paddingHorizontal: isSmallScreen ? 20 : 90,
                        gap: isSmallScreen ? 20 : 30,
                    }}
                >
                    {/* Texto y botones */}
                    <View
                        style={{
                            width: isSmallScreen ? "100%" : "50%",
                            justifyContent: "center",
                            gap: 20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: isSmallScreen ? 28 : 40,
                                fontWeight: 700,
                                color: "white",
                                textAlign: isSmallScreen ? "center" : "left",
                                width: isSmallScreen ? "100%" : "80%"
                            }}
                        >
                            Servicios a domicilio fáciles, rápidos y de confianza
                        </Text>

                        <Text
                            style={{
                                fontSize: isSmallScreen ? 24 : 28,
                                fontWeight: 600,
                                color: "white",
                                textAlign: isSmallScreen ? "center" : "left",
                                width: isSmallScreen ? "100%" : "80%"
                            }}
                        >
                            Encuentra y contrata en segundos limpieza, fontanería, electricidad, carpintería y mucho más en tu ciudad
                        </Text>

                        <View
                            style={{
                                gap: 10,
                                flexDirection: "column",
                                alignItems: isSmallScreen ? "center" : "flex-start",
                            }}
                        >
                            {["Seleccionar ubicación", "Ciudad", "Selecciona el servicio"].map((text, i) => (
                                <Pressable
                                    key={i}
                                    style={{
                                        paddingVertical: 10,
                                        paddingHorizontal: 18,
                                        backgroundColor: "white",
                                        borderRadius: 12,
                                        width: isSmallScreen ? "100%" : "75%",
                                    }}
                                    onPress={handleOpenModal}
                                >
                                    <Text style={{ opacity: 0.5, fontSize: 18, fontWeight: 500 }}>{text}</Text>
                                </Pressable>
                            ))}
                        </View>

                        <Pressable
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal: 30,
                                borderRadius: 4,
                                backgroundColor: "#FFA962",
                                alignSelf: isSmallScreen ? "center" : "flex-start",
                                marginTop: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontWeight: 500,
                                    fontSize: 18,
                                    textAlign: "center",
                                }}
                                onPress={handleOpenModal}
                            >
                                CONTRATA AHORA
                            </Text>
                        </Pressable>
                    </View>

                    {/* Imagen */}

                    <View
                        style={{
                            width: isSmallScreen ? "100%" : isTablet ? "45%" : "40%",
                            marginTop: isSmallScreen ? 20 : 0,
                            justifyContent: "flex-end",
                            alignItems: "center",
                            position: "relative",
                            height: "100%"
                        }}
                    >
                        <Image
                            source={require("@/assets/images/paco-home.png")}
                            style={{
                                width: isSmallScreen ? "80%" : "100%",
                                aspectRatio: 0.975,
                                objectFit: "contain",
                                position: "absolute",
                                bottom: 0
                            }}
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
        paddingVertical: 24,
        paddingBottom: 0,
        gap: 30,
        justifyContent: "center",
        backgroundColor: "#0C85BEDD",
    },
});

export default HeroSection;
