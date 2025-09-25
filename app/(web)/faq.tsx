import CallToAction from '@/components/web/call-to-action'
import Footer from '@/components/web/footer'
import Header from '@/components/web/header'
import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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

const FAQ = () => {
    return (
        <ScrollView contentContainerStyle={{ minHeight: height }}>
            <Header />

            <View style={styles.content}>

                <View style={styles.faqList}>
                    {faqs.map((item, index) => (
                        <FAQItem key={index} item={item} />
                    ))}
                </View>

            </View>

            <CallToAction />
            <Footer />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 70,
        paddingVertical: 30,
        paddingHorizontal: 80,
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minHeight: height * 0.75,
    },
    faqList: {
        flex: 1,
        marginRight: 10,
    },
    faqItem: {
        marginVertical: 15,
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
})

export default FAQ