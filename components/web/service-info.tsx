import { Image } from "expo-image";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const ServiceInfo = () => {
    const [windowHeight, setWindowHeight] = React.useState<number | null>(null);

    React.useEffect(() => {
        const { height } = Dimensions.get("window");
        setWindowHeight(height);
    }, []);

    return (
        <View
            style={[
                styles.section,
                // @ts-ignore
                { minHeight: windowHeight ? windowHeight * 0.7 : "70vh" },
            ]}
        >
            <View style={{ marginTop: 30, gap: 20 }}>
                <Text style={[styles.heading, { fontSize: 28, color: "#000000" }]}>
                    ¿Por qué elegir nuestros servicios?
                </Text>
                <FeaturesSection />
            </View>
        </View>
    );
};

function FeaturesSection() {
    const features = [
        {
            id: 1,
            icon: require("@/assets/images/homepage/guard.png"),
            title: "VERIFICADO Y SEGURO",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            id: 2,
            icon: require("@/assets/images/homepage/click.png"),
            title: "FÁCIL Y RÁPIDO",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            id: 3,
            icon: require("@/assets/images/homepage/files.png"),
            title: "CONTROL DE GASTOS",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
    ];

    return (
        <View style={stylesFeature.container}>
            {features.map((item) => (
                <View key={item.id} style={stylesFeature.card}>
                    <Image source={item.icon} style={stylesFeature.icon} contentFit="contain" />
                    <Text style={stylesFeature.title}>{item.title}</Text>
                    <Text style={stylesFeature.description}>{item.description}</Text>
                </View>
            ))}
        </View>
    );
}

const stylesFeature = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap", // ✅ permite que se ajusten al ancho
        justifyContent: "center", // ✅ centrado en pantallas grandes o chicas
        alignItems: "flex-start",
        gap: 24, // espacio entre cards
        paddingVertical: 30,
        paddingHorizontal: 16,
        width: "100%",
    },
    card: {
        width: "90%", // ✅ móvil
        maxWidth: 280, // ✅ web (no más de 280px)
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#FFF",
        borderRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        paddingVertical: 25,
        paddingHorizontal: 20,
        gap: 10
    },
    icon: {
        width: 80,
        height: 80,
        marginBottom: 12,
        tintColor: "#FF9E5E",
    },
    title: {
        fontWeight: "700",
        textAlign: "center",
        color: "#000",
        marginVertical: 8,
        fontSize: 18,
    },
    description: {
        fontWeight: "400",
        textAlign: "center",
        color: "#555",
        fontSize: 14,
    },
});

const styles = StyleSheet.create({
    heading: {
        marginHorizontal: "auto",
        fontWeight: "700",
        fontSize: 20,
        color: "white",
        textAlign: "center",
        textTransform: "uppercase",
    },
    section: {
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        padding: 20,
    },
});

export default ServiceInfo;
