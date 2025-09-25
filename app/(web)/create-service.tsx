import CallToAction from "@/components/web/call-to-action";
import Footer from "@/components/web/footer";
import Header from "@/components/web/header";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Dimensions,
    FlatList,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

const { height } = Dimensions.get("window");

const COLORS = {
    primary: "#50B4E8",
    accent: "#FFC356",
    text: "#000",
    grayDark: "#282828",
    gray: "#D5D5D5",
    lightGray: "#F5F5F5",
};

const timeOptions = [
    "Urgente (en las próximas 24 horas)",
    "En los próximos días",
    "Dentro de 1 mes o más",
    "Soy flexible",
];

const hourOptions = [
    "Todo el día",
    "Mañana (08:00 - 12:00)",
    "Mediodia (12:00 - 15:00)",
    "Tarde (15:00 - 18:00)",
    "Media tarde (18:00 - 21:00)",
];

const data = [
    { id: "1", title: "Limpieza de alfombras", subtitle: "Servicio de lavado profesional", image: require("@/assets/images/services/services.png") },
    { id: "2", title: "Limpieza de alfombras", subtitle: "Servicio de lavado profesional", image: require("@/assets/images/services/services.png") },
    { id: "3", title: "Limpieza de alfombras", subtitle: "Servicio de lavado profesional", image: require("@/assets/images/services/services.png") },
];

const points = [
    { icon: "checkmark-circle-outline", title: "Solo profesionales verificados", description: "Lorem Ipsum is simply dummy text..." },
    { icon: "refresh-circle-outline", title: "Cancelación y reembolsos flexibles", description: "Lorem Ipsum is simply dummy text..." },
    { icon: "shield-checkmark-outline", title: "Servicio con garantía y seguro", description: "Lorem Ipsum is simply dummy text..." },
    { icon: "alert-circle-outline", title: "¡Materiales adicionales? Sin problema", description: "Lorem Ipsum is simply dummy text..." },
    { icon: "person-circle-outline", title: "Contacta con tu profesional", description: "Lorem Ipsum is simply dummy text..." },
];

const CreateService = () => {
    const router = useRouter();
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const toggleOption = (option: string) => {
        setSelectedOptions((prev) =>
            prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
        );
    };

    return (
        <ScrollView contentContainerStyle={{ minHeight: height }}>
            <Header />

            {/* <View style={styles.content}> */}
            <View style={styles.container}>

                <View style={styles.headerSection}>
                    <Text style={styles.headerTitle}>Solicitar servicio</Text>
                </View>

                {/* MAIN CONTENT */}
                <ScrollView style={styles.scrollContainer}>
                    {/* Dirección */}
                    <Pressable style={styles.inputButton} onPress={() => router.push("/(web)/create-service")}>
                        <EvilIcons name="location" size={24} color={COLORS.grayDark} />
                        <Text style={styles.inputButtonText}>Agregar dirección</Text>
                    </Pressable>

                    {/* Inputs */}
                    <View style={styles.row}>
                        <TextInput style={styles.input} placeholder="Metros cuadrados" />
                        <TextInput style={styles.input} placeholder="Nº de habitaciones" />
                    </View>

                    <View style={styles.row}>
                        <TextInput style={styles.input} placeholder="N° de ventanas" />
                        <TextInput style={styles.input} placeholder="N° de baños" />
                    </View>

                    {/* Fotos */}
                    <Pressable style={styles.inputButton} onPress={() => router.push("/(web)/create-service")}>
                        <EvilIcons name="image" size={24} color={COLORS.grayDark} />
                        <Text style={styles.inputButtonText}>Añadir fotos</Text>
                    </Pressable>

                    {/* Checkboxes */}
                    <Text style={styles.heading}>¿Cuándo necesitas empezar?</Text>
                    {timeOptions.map((option) => (
                        <Pressable key={option} style={styles.checkboxRow} onPress={() => toggleOption(option)}>
                            <View style={[styles.checkbox, selectedOptions.includes(option) && styles.checkboxSelected]} />
                            <Text style={styles.checkboxLabel}>{option}</Text>
                        </Pressable>
                    ))}

                    <Text style={styles.heading}>Horario de preferencia</Text>
                    {hourOptions.map((option) => (
                        <Pressable key={option} style={styles.checkboxRow} onPress={() => toggleOption(option)}>
                            <View style={[styles.checkbox, selectedOptions.includes(option) && styles.checkboxSelected]} />
                            <Text style={styles.checkboxLabel}>{option}</Text>
                        </Pressable>
                    ))}

                    <Recommendations />
                    <PaymentOptions />
                    <PointsToConsider />

                    {/* Botón final (no lo cambiamos) */}
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Añadir servicio</Text>
                    </Pressable>
                </ScrollView>
            </View>
            {/* </View> */}

            <CallToAction />
            <Footer />
        </ScrollView>
    );
};

const Recommendations = () => (
    <View>
        <Text style={styles.heading}>Otros clientes también añadieron</Text>
        <FlatList
            data={data}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ justifyContent: "space-between", width: "100%" }}
        />
    </View>
);

const Card = ({ item }: { item: any }) => (
    <View style={styles.card}>
        <Image source={item.image} style={styles.cardImage} contentFit="cover" />
        <Pressable style={styles.plusButton}>
            <Ionicons name="add" size={20} color="#fff" />
        </Pressable>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
    </View>
);

const PointsToConsider = () => (
    <View style={{ marginTop: 20 }}>
        <Text style={styles.heading}>Puntos a tener en cuenta</Text>
        {points.map((point) => (
            <View key={point.title} style={styles.pointRow}>
                <Ionicons name={point.icon as any} size={24} color={COLORS.primary} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.pointTitle}>{point.title}</Text>
                    <Text style={styles.pointDescription}>{point.description}</Text>
                </View>
            </View>
        ))}
    </View>
);

const PaymentOptions = () => {
    const router = useRouter();
    const options = [
        { icon: "card-outline", label: "Añadir un método de pago", path: "/(web)/create-services" },
        { icon: "pricetag-outline", label: "Agregar cupón", path: "/(web)/create-services" },
        { icon: "document-text-outline", label: "Agregar datos de facturación", path: "/(web)/create-services" },
    ];

    return (
        <View style={{ marginVertical: 10 }}>
            {options.map((option) => (
                <Pressable key={option.label} style={styles.paymentRow} onPress={() => router.push(option.path as any)}>
                    <Ionicons name={option.icon as any} size={24} color={COLORS.grayDark} />
                    <Text style={styles.paymentLabel}>{option.label}</Text>
                    <Ionicons name="chevron-forward" size={20} color={COLORS.grayDark} />
                </Pressable>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 16,
        justifyContent: "flex-start",
        alignItems: "stretch",
        minHeight: height * 0.75,
        // padding: 40,
        marginTop: 70,
        marginBottom: 20
    },
    headerSection: {
        backgroundColor: "#50B4E8",
        padding: 30,
        width: "100%",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: "800",
        color: "#FFF",
    },
    scrollContainer: { width: "50%", flex: 1, paddingVertical: 50, marginHorizontal: "auto" },

    inputButton: {
        backgroundColor: "#50B4E81A",
        flexDirection: "row",
        alignItems: "center",
        padding: 14,
        borderRadius: 12,
        marginBottom: 12,
    },
    inputButtonText: { fontSize: 16, color: COLORS.grayDark, marginLeft: 6 },

    row: { flexDirection: "row", gap: 12, marginVertical: 8 },
    input: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.gray,
    },

    checkboxRow: { flexDirection: "row", alignItems: "center", gap: 8, marginVertical: 6 },
    checkbox: { width: 22, height: 22, borderWidth: 2, borderColor: COLORS.grayDark, borderRadius: 12 },
    checkboxSelected: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
    checkboxLabel: { fontSize: 15 },

    heading: { fontSize: 17, fontWeight: "700", marginVertical: 10 },

    card: {
        width: 200, // un poco más compacta
        backgroundColor: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        marginBottom: 10,
    },
    cardImage: {
        width: "100%",
        height: 110, // menos alto para que se vea más proporcionado
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    plusButton: {
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
        elevation: 3,
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: "700",
        marginHorizontal: 10,
        marginTop: 10,
    },
    cardSubtitle: {
        fontSize: 13,
        color: "#555",
        marginBottom: 20,
        marginHorizontal: 10,
    },

    pointRow: { flexDirection: "row", gap: 10, marginVertical: 10 },
    pointTitle: { fontSize: 15, fontWeight: "700" },
    pointDescription: { fontSize: 13, color: "#555" },

    paymentRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 14,
        backgroundColor: "#F9F9F9",
        borderRadius: 10,
        marginBottom: 10,
    },
    paymentLabel: { flex: 1, marginLeft: 10, fontSize: 16 },

    button: { backgroundColor: COLORS.primary, padding: 12, borderRadius: 8, alignItems: "center", marginTop: 20 },
    text: { color: "#fff", fontSize: 16, fontWeight: "600" },
});

export default CreateService;
