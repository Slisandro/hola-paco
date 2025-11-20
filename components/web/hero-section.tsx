import { Image, ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Platform, Pressable, StyleSheet, Text, View } from "react-native";

const categories = [
    {
        id: 1,
        label: "Fontanería",
        value: "fontaneria",
        nombre: "Fontanería",
        icono: require("@/assets/icons/services/fontaneria.png"),
        iconoSelected: require("@/assets/icons/services/fontaneria_selected.png"),
        path: "/(web)/fontaneria"
    },
    {
        id: 2,
        label: "Limpieza",
        value: "limpieza",
        nombre: "Limpieza",
        icono: require("@/assets/icons/services/limpieza.png"),
        iconoSelected: require("@/assets/icons/services/limpieza_selected.png"),
        path: "/(web)/limpieza"
    },
    {
        id: 3,
        label: "Electricista",
        value: "electricista",
        nombre: "Electricista",
        icono: require("@/assets/icons/services/electricista.png"),
        iconoSelected: require("@/assets/icons/services/electricista_selected.png"),
        path: "/(web)/services/fontaneria"
    },
    {
        id: 4,
        label: "Jardinería",
        value: "jardineria",
        nombre: "Jardinería",
        icono: require("@/assets/icons/services/jardineria.png"),
        iconoSelected: require("@/assets/icons/services/jardineria_selected.png"),
        path: "/(web)/jardineria"
    },
    {
        id: 5,
        label: "Montaje",
        value: "montaje",
        nombre: "Montaje",
        icono: require("@/assets/icons/services/montaje.png"),
        iconoSelected: require("@/assets/icons/services/montaje_selected.png"),
        path: "/(web)/services/fontaneria"
    },
    {
        id: 6,
        label: "Carpintería",
        value: "carpinteria",
        nombre: "Carpintería",
        icono: require("@/assets/icons/services/carpinteria.png"),
        iconoSelected: require("@/assets/icons/services/carpinteria_selected.png"),
        path: "/(web)/services/fontaneria"
    },
];

const HeroSection = ({ handleOpenModal }: { handleOpenModal: () => void }) => {
    const screenWidth = Dimensions.get("window").width;
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [seleccionado, setSeleccionado] = useState(1);
    const router = useRouter();

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
                            zIndex: 100
                        }}
                    >
                        <Text
                            style={{
                                fontSize: isSmallScreen ? 20 : isTablet ? 34 : 50,
                                fontWeight: 700,
                                color: "white",
                                width: "100%",
                                textAlign: isSmallScreen ? "center" : "left"
                            }}
                        >
                            Servicios a domicilio fáciles, rápidos y de confianza
                        </Text>

                        <Text
                            style={{
                                fontSize: isSmallScreen ? 18 : isTablet ? 22 : 28,
                                fontWeight: 600,
                                color: "white",
                                width: "100%",
                                marginHorizontal: "auto",
                                textAlign: isSmallScreen ? "center" : "left"
                            }}
                        >
                            Encuentra y contrata en segundos limpieza, fontanería, electricidad, carpintería y mucho más en tu ciudad
                        </Text>

                        <View
                            style={{
                                gap: 10,
                                flexDirection: "column",
                                width: "100%",
                                marginTop: 15,
                                alignItems: isSmallScreen ? "center" : "flex-start"
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
                                        width: "75%",
                                    }}
                                    onPress={handleOpenModal}
                                >
                                    <Text style={{ opacity: 0.5, fontSize: isSmallScreen ? 14 : isTablet ? 16 : 18, fontWeight: 500 }}>{text}</Text>
                                </Pressable>
                            ))}

                            <Pressable
                                style={{
                                    paddingVertical: 10,
                                    paddingHorizontal: 30,
                                    backgroundColor: "#FFA962",
                                    width: "75%",
                                    marginTop: 10,
                                    borderRadius: 12,
                                }}
                            >
                                <Text
                                    style={{
                                        color: "white",
                                        fontWeight: 500,
                                        fontSize: isSmallScreen ? 14 : isTablet ? 16 : 18,
                                        textAlign: "center",
                                    }}
                                    onPress={handleOpenModal}
                                >
                                    CONTRATA AHORA
                                </Text>
                            </Pressable>
                        </View>

                    </View>
                    <Image
                        source={require("@/assets/images/paco-home.png")}
                        style={{
                            marginTop: "auto",
                            width: "100%",
                            maxWidth: "50%",
                            maxHeight: "100%",
                            aspectRatio: 1,
                            objectFit: "contain",
                            position: isSmallScreen ? "absolute" : "relative",
                            bottom: 0,
                            right: 0,
                            zIndex: 10
                        }}
                    />
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
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0C85BEDD",
    },
});

export default HeroSection;


const stylesServicios = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        alignItems: "center",
        gap: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 30,
        textAlign: "center",
        color: "#333",
    },
    lista: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 900,
        flexWrap: "wrap",
        marginHorizontal: "auto",
        marginTop: 10
    },
    card: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#DDD",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        elevation: 2,
    },
    cardActivo: {
        backgroundColor: "#FFA858",
        borderColor: "#50B4E8",
        elevation: 5, 
    },
    icono: {
        width: 50,
        height: 50,
        marginBottom: 6,
    },
    texto: {
        fontSize: 12,
        color: "#333",
        fontWeight: "500",
        textAlign: "center",
    },
    textoActivo: {
        color: "#fff",
    },
    boton: {
        marginTop: 30,
        backgroundColor: "#0077B6",
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 8,
    },
    botonTexto: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "700",
        textAlign: "center",
    },
});