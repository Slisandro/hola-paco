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

            <View style={styles.content}>
                <Text style={styles.title}>PREGUNTAS FRECUENTES</Text>
                <Text style={styles.subtitle}>
                    OBTENGA RESPUESTAS A PREGUNTAS FRECUENTES SOBRE NUESTRA APLICACIÓN
                </Text>
                <View style={styles.faqList}>
                    {faqs.map((item, index) => (
                        <FAQItem key={index} item={item} />
                    ))}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>VER TODAS LAS FAQ</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <Image
                source={require("@/assets/images/service-info.png")}
                style={styles.image}
                contentFit="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 40,
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height
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
        flex: 1,
        marginRight: 10,
    },
    faqItem: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 5,
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
