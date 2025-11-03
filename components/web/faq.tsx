import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { height } = Dimensions.get("window");

const faqs = [
    { question: "¿Qué no limpias?", answer: "Respuesta a qué no limpiamos." },
    { question: "¿Necesito estar en casa para cada servicio de limpieza?", answer: "Respuesta sobre presencia en casa." },
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
    return (
        <View style={styles.container}>
            <Image
                source={require("@/assets/images/paco-home.png")}
                style={{
                    width: "50%",
                    height: "100%",
                    marginTop: "auto",
                    transform: [{ rotateY: "180deg" }]
                }}
                contentFit="contain"
            />
            <View
                style={{
                    width: "40%",
                    height: "90%",
                }}>
                <Text
                    style={{
                        fontSize: 13,
                        fontWeight: 400,
                        color: "#737373"
                    }}>
                    PREGUNTAS FRECUENTES
                </Text>
                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: "#000000",
                        width: "100%"
                    }}>
                    Obtenga respuestas a preguntas frecuentes sobre nuestra aplicación
                </Text>

                <View style={styles.faqList}>
                    {faqs.map(faq => (
                        <FAQItem item={faq} />
                    ))}
                </View>


                <TouchableOpacity style={styles.boton}>
                    <Text
                        style={[
                            styles.texto,
                            { fontWeight: 700, color: "white" }
                        ]}
                    >
                        VER TODOS LOS SERVICIOS
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 12,
        color: "#333",
        fontWeight: "500",
        textAlign: "center",
    },
    boton: {
        // marginTop: 30,
        backgroundColor: "#0077B6",
        color: "#fff",
        fontWeight: "700",
        textTransform: "uppercase",
        fontSize: 12,
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 8,
    },
    container: {
        paddingVertical: 20,
        paddingBottom: 0,
        paddingHorizontal: 40,
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: height * .9
    },
    content: {
        width: '50%',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        color: '#555',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 20,
    },
    faqList: {
        // flex: 1,
        marginRight: 10,
        marginTop: 20
    },
    faqItem: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        padding: 15
    },
    question: {
        fontWeight: '600',
        fontSize: 16,
    },
    answer: {
        marginTop: 5,
        fontSize: 14,
        color: '#555',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#50B4E8',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
    imagesContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    image: {
        width: '50%',
        height: "70%",
        borderRadius: 10,
        marginBottom: 10,
    },
});
