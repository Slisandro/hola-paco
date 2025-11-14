import { Image } from "expo-image";
import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
                    ¿Por qué Hola Paco?
                </Text>
                <FeaturesSection />
            </View>

            <TouchableOpacity style={stylesServicios.boton} activeOpacity={0.85}>
                <Text style={stylesServicios.botonTexto}>Encuentra tu servicio</Text>
            </TouchableOpacity>
        </View>
    );
};


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
    },
    card: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#DDD",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        elevation: 2, // sombra sutil
    },
    cardActivo: {
        backgroundColor: "#FFA858",
        borderColor: "#50B4E8",
        elevation: 5, // más sombra cuando está activo
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

function FeaturesSection() {
    const features = [
        {
            id: 1,
            icon: require("@/assets/images/homepage/guard.png"),
            title: "Servicios profesionales de confianza y verificados",
            description:
                "Expertos comprobados, responsables y listos para ayudarte en lo que necesites",
        },
        {
            id: 2,
            icon: require("@/assets/images/homepage/click.png"),
            title: "Garantía en cada servicio",
            description:
                "Tu tranquilidad está asegurada: cada servicio cuenta con respaldo y compromiso",
        },
        {
            id: 3,
            icon: require("@/assets/images/homepage/files.png"),
            title: "Pago al finalizar",
            description:
                "Olvídate de sorpresas: Paga sólo cuando el trabajo este terminado y estés satisfecho",
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
        width: "100%", // ✅ móvil
        maxWidth: 300, // ✅ web (no más de 280px)
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
        fontSize: 20,
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
        // gap: 40,
        padding: 20,
        marginBottom: 40
    },
});

export default ServiceInfo;
