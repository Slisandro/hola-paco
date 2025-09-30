import { Image } from "expo-image";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { height } = Dimensions.get("window");

const testimonials = [
    {
        id: 1,
        name: "Tatiane Torff",
        role: "Customer",
        avatar: require("@/assets/images/logo.png"),
        text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    },
    {
        id: 2,
        name: "Leo Bator",
        role: "Customer",
        avatar: require("@/assets/images/logo.png"),
        text: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
        id: 3,
        name: "Ashlynn Culhane",
        role: "Customer",
        avatar: require("@/assets/images/logo.png"),
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const Testimonials = () => {
    const [windowHeight, setWindowHeight] = React.useState<number | null>(null);

    React.useEffect(() => {
        const { height } = Dimensions.get("window");
        setWindowHeight(height);
    }, []);

    return (
        <View style={[styles.section, { height: windowHeight }]}>
            <View style={{ gap: 10, alignItems: "center" }}>
                <Text style={styles.subtitle}>COMENTARIOS DE LOS CLIENTES</Text>
                <Text style={styles.title}>QUÉ OPINAN NUESTROS CLIENTES</Text>
            </View>

            <View
                style={styles.testimonialsContainer}
            >
                {testimonials.map((t) => (
                    <View key={t.id} style={styles.card}>
                        <Image source={t.avatar} style={styles.avatar} contentFit="cover" />
                        <Text style={styles.text}>{t.text}</Text>
                        <Text style={styles.name}>{t.name}</Text>
                        <Text style={styles.role}>{t.role}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        paddingVertical: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        gap: 40
    },
    subtitle: {
        fontSize: 12,
        color: "#888",
        letterSpacing: 1,
        marginBottom: 4,
    },
    title: {
        fontSize: 22,
        color: "#000",
        textAlign: "center",
        marginBottom: 24,
    },
    testimonialsContainer: {
        paddingHorizontal: 16,
        gap: 30,
        flexDirection: "row"
    },
    card: {
        width: 250,
        backgroundColor: "#f9f9f9",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
        justifyContent: "space-between",
        height: 250,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 12,
    },
    text: {
        fontSize: 14,
        color: "#555",
        textAlign: "center",
        marginBottom: 12,
    },
    name: {
        fontSize: 14,
        color: "#000",
    },
    role: {
        fontSize: 12,
        color: "#888",
    },
});

export default Testimonials;
