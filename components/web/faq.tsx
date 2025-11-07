import { Image } from "expo-image";
import React, { useState } from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const { height, width } = Dimensions.get("window");

const faqs = [
    { question: "¿Qué no limpias?", answer: "Respuesta a qué no limpiamos." },
    {
        question: "¿Necesito estar en casa para cada servicio de limpieza?",
        answer: "Respuesta sobre presencia en casa.",
    },
    { question: "¿Cómo funcionará nuestra relación?", answer: "Respuesta sobre la relación con el servicio." },
    { question: "¿A qué hora llega tu equipo?", answer: "Respuesta sobre horario del equipo." },
];

const FAQItem = ({ item }: { item: any }) => {
    const [open, setOpen] = useState(false);
    return (
        <View style={styles.faqItem}>
            <TouchableOpacity onPress={() => setOpen(!open)}>
                <Text style={styles.question}>{item.question}</Text>
            </TouchableOpacity>
            {open && <Text style={styles.answer}>{item.answer}</Text>}
        </View>
    );
};

export default function FAQSection() {
    const isSmall = width < 800;

    return (
        <View
            style={[
                styles.container,
                { flexDirection: isSmall ? "column" : "row", height: isSmall ? "auto" : height * 0.9 },
            ]}
        >
            <Image
                source={require("@/assets/images/paco-home.png")}
                style={{
                    width: isSmall ? "70%" : "45%",
                    height: isSmall ? 220 : "100%",
                    marginTop: isSmall ? 20 : "auto",
                    transform: [{ scaleX: -1 }], // reemplazo seguro de rotateY
                }}
                contentFit="contain"
            />

            <View style={[styles.content, { width: isSmall ? "90%" : "40%" }]}>
                <Text style={styles.subtitle}>PREGUNTAS FRECUENTES</Text>
                <Text style={styles.title}>
                    Obtenga respuestas a preguntas frecuentes sobre nuestra aplicación
                </Text>

                <View style={styles.faqList}>
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} item={faq} />
                    ))}
                </View>

                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.texto}>VER TODOS LOS SERVICIOS</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "700",
        textAlign: "center",
    },
    boton: {
        marginTop: 30,
        backgroundColor: "#0077B6",
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 8,
    },
    container: {
        paddingVertical: 40,
        paddingHorizontal: 40,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        paddingBottom: 0
    },
    content: {
        justifyContent: "center",
    },
    subtitle: {
        fontSize: 13,
        fontWeight: "400",
        color: "#737373",
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#000",
        marginTop: 8,
    },
    faqList: {
        marginTop: 20,
    },
    faqItem: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        paddingVertical: 10,
    },
    question: {
        fontWeight: "600",
        fontSize: 16,
    },
    answer: {
        marginTop: 5,
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
    },
});
