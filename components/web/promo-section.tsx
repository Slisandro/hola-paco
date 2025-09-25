import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function PromoSection() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    ÚNETE A HOLA PACO HOY Y HAZ QUE TU NEGOCIO CREZCA SIN LÍMITES
                </Text>

                <Text style={styles.subtitle}>
                    Únete ahora y disfruta con 0% de comisión en tus ganancias!
                </Text>

                <Text style={styles.sectionTitle}>Eres protagonista en BeeReno</Text>
                <Text style={styles.paragraph}>
                    Crea tu perfil único y demuestra tu talento. Conéctate con clientes reales desde el primer día y deja que tu trabajo hable por ti.
                </Text>

                <Text style={styles.sectionTitle}>Conversa, cierra y gana</Text>
                <Text style={styles.paragraph}>
                    Nuestro chat en vivo te permite enviar propuestas, agendar citas y confirmar precios en minutos. Una experiencia sin fricciones, diseñada para que trabajes fácil y seguro.
                </Text>

                <Text style={styles.sectionTitle}>Hazte notar y brilla</Text>
                <Text style={styles.paragraph}>
                    Conviértete en un "Beepro" y consigue reseñas de 5 estrellas. Aumenta tu visibilidad y destaca frente a cientos de clientes que buscan justo lo que ofreces.
                </Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>REGÍSTRATE</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require("@/assets/images/logo.png")}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        flexDirection: "row",
        height
    },
    textContainer: {
        flex: 1,
        maxWidth: 600,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 15,
    },
    paragraph: {
        fontSize: 14,
        marginBottom: 10,
        lineHeight: 20,
    },
    button: {
        backgroundColor: "#50B4E8",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginTop: 20,
        alignSelf: "flex-start",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
    imageContainer: {
        marginTop: 20,
        width: width * 0.5,
        height: 300,
        borderRadius: 12,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
});
