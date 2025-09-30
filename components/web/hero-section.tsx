import { ImageBackground } from "expo-image";
import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const categories = [
    { id: 1, name: "Fontanería", path: require("@/assets/icons/services/fontaneria.jpg") },
    { id: 2, name: "Limpieza", path: require("@/assets/icons/services/limpieza.jpg") },
    { id: 3, name: "Electricista", path: require("@/assets/icons/services/electricista.jpg") },
    { id: 4, name: "Carpintería", path: require("@/assets/icons/services/carpinteria.jpg") },
    { id: 5, name: "Montaje", path: require("@/assets/icons/services/montaje.jpg") },
    { id: 6, name: "Jardinería", path: require("@/assets/icons/services/jardineria.jpg") },
];

const HeroSection = () => {
    const [selected, setSelected] = useState(1);
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
            <View style={[styles.container, { minHeight: windowHeight ? windowHeight - 70 : "100vh" }]}>
                <Text style={styles.title}>
                    Encuentra y contrata de inmediato {"\n"} un servicio de limpieza confiable.
                </Text>

                <View style={styles.inputsContainer}>
                    <TextInput placeholder="Seleccionar ubicación" style={styles.input} />
                    <TextInput placeholder="Ciudad" style={styles.input} />
                </View>

                <View style={styles.categoriesWrapper}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.categoriesContainer}
                    >
                        {categories.map((cat) => (
                            <TouchableOpacity
                                key={cat.id}
                                style={[
                                    styles.categoryCard,
                                    selected === cat.id && styles.categoryCardActive,
                                ]}
                                onPress={() => setSelected(cat.id)}
                            >
                                <ImageBackground
                                    source={cat.path}
                                    style={styles.categoryImage}
                                    imageStyle={{ borderRadius: 12 }}
                                    contentFit="cover"
                                >
                                    <View style={styles.overlay} />
                                    <Text
                                        style={[
                                            styles.categoryText,
                                            selected === cat.id && styles.categoryTextActive,
                                        ]}
                                    >
                                        {cat.name}
                                    </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
        gap: 30,
        justifyContent: "center",
        marginTop: 70,
        backgroundColor: "#50B4E8CC",
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
