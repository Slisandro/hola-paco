import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const steps = [
    {
        id: 1,
        title: "ELIGE UN SERVICIO",
        description: "Introduce Lo Que Quieres Limpiar",
    },
    {
        id: 2,
        title: "SELECCIONE AL PROFESIONAL",
        description: "Compara Por Precio, Valoraciones Y Comentarios De Los Clientes",
    },
    {
        id: 3,
        title: "CONTRATA CON UN SOLO CLIC",
        description: "El Profesional Contratado Llegará Puntual A La Hora Seleccionada.",
    },
];

const StepCards = () => {
    const [windowHeight, setWindowHeight] = React.useState<number | null>(null);

    React.useEffect(() => {
        const { height } = Dimensions.get("window");
        setWindowHeight(height);
    }, []);

    return (
        // @ts-expect-error
        <View style={[styles.container, { height: windowHeight ? windowHeight * .75 : "75vh" }]}>
            <Text style={styles.heading}>DISFRUTA DE HOLA PACO</Text>
            <View style={styles.cardsContainer}>
                {steps.map((step) => (
                    <View key={step.id} style={styles.card}>
                        <View style={styles.circle}>
                            <Text style={styles.circleText}>{step.id}</Text>
                        </View>
                        <Text style={styles.cardTitle}>{step.title}</Text>
                        <Text style={styles.cardDescription}>{step.description}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        alignItems: "center",
        backgroundColor: "#fff",
    },
    heading: {
        fontWeight: "700",
        fontSize: 16,
        marginBottom: 24,
    },
    cardsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        paddingHorizontal: 60,
    },
    card: {
        width: 200,
        height: 250,
        borderWidth: 1,
        borderColor: "#B0D4E8",
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#fff",
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#FFB97D",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
    },
    circleText: {
        color: "#000",
        fontWeight: "700",
        fontSize: 24,
    },
    cardTitle: {
        fontWeight: "700",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 12,
        textAlign: "center",
        color: "#555",
        fontWeight: "400",
    },
});

export default StepCards;
