import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    FlatList,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    {
        id: "1",
        title: "Limpieza de alfombras",
        subtitle: "Servicio de lavado profesional",
        image: require("@/assets/images/services/services.png"),
    },
    {
        id: "2",
        title: "Limpieza de alfombras",
        subtitle: "Servicio de lavado profesional",
        image: require("@/assets/images/services/services.png"),
    },
    {
        id: "3",
        title: "Limpieza de alfombras",
        subtitle: "Servicio de lavado profesional",
        image: require("@/assets/images/services/services.png"),
    },
];

const points = [
    {
        icon: "checkmark-circle-outline",
        title: "Solo profesionales verificados",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
        icon: "refresh-circle-outline",
        title: "Cancelación y reembolsos flexibles",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
        icon: "shield-checkmark-outline",
        title: "Servicio con garantía y seguro",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
        icon: "alert-circle-outline",
        title: "¡Materiales adicionales? Sin problema",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
        icon: "person-circle-outline",
        title: "Contacta con tu profesional",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
];

const CreateService = () => {
    const router = useRouter();
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleGoBack = () => router.push("/(private)/(services)/professional");
    const handleToAddress = () => router.push("/(private)/(create-services)/address");
    //handleToPhotos
    const handleToPhotos = () => router.push("/(private)/(create-services)/photos");

    const toggleOption = (option: string) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((o) => o !== option)
                : [...prev, option]
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Pressable style={styles.backButton} onPress={handleGoBack}>
                        <Ionicons name="arrow-back" size={24} color="#000" />
                    </Pressable>

                    <Text style={styles.title}>Solicitar servicio</Text>

                    <View />
                </View>

                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <Pressable style={styles.inputButton} onPress={handleToAddress}>
                        <EvilIcons name="location" size={24} color={COLORS.grayDark} />
                        <Text style={styles.inputButtonText}>Agregar dirección</Text>
                    </Pressable>

                    <View style={styles.row}>
                        <TextInput style={styles.input} placeholder="Metros cuadrados" />
                        <TextInput style={styles.input} placeholder="Nº de habitaciones" />
                    </View>

                    <View style={styles.row}>
                        <TextInput style={styles.input} placeholder="N° de ventanas" />
                        <TextInput style={styles.input} placeholder="N° de baños" />
                    </View>

                    <Pressable style={styles.inputButton} onPress={handleToPhotos}>
                        <EvilIcons name="image" size={24} color={COLORS.grayDark} />
                        <Text style={styles.inputButtonText}>Añadir fotos</Text>
                    </Pressable>

                    <Text style={styles.heading}>
                        ¿Cuándo necesitas empezar con el servicio?
                    </Text>

                    <View style={styles.checkboxContainer}>
                        {timeOptions.map((option) => (
                            <Pressable
                                key={option}
                                style={styles.checkboxRow}
                                onPress={() => toggleOption(option)}
                            >
                                <View
                                    style={[
                                        styles.checkbox,
                                        selectedOptions.includes(option) && styles.checkboxSelected,
                                    ]}
                                />
                                <Text style={styles.checkboxLabel}>{option}</Text>
                            </Pressable>
                        ))}
                    </View>

                    <Text style={styles.heading}>
                        Horario de preferencia para la limpieza
                    </Text>

                    <View style={styles.checkboxContainer}>
                        {hourOptions.map((option) => (
                            <Pressable
                                key={option}
                                style={styles.checkboxRow}
                                onPress={() => toggleOption(option)}
                            >
                                <View
                                    style={[
                                        styles.checkbox,
                                        selectedOptions.includes(option) && styles.checkboxSelected,
                                    ]}
                                />
                                <Text style={styles.checkboxLabel}>{option}</Text>
                            </Pressable>
                        ))}
                    </View>

                    <Recommendations />
                    <PaymentOptions />
                    <PointsToConsider />
                    <AddServiceButton />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const Card = ({ item }: { item: any }) => (
    <View style={styles.card}>
        <View style={{ width: 125, height: 125, position: "relative" }}>
            <Image source={item.image} style={styles.cardImage} contentFit="contain" />
            <Pressable style={styles.plusButton}>
                <Ionicons name="add" size={20} color="#fff" />
            </Pressable>
        </View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
    </View>
);

const Recommendations = () => {
    return (
        <View>
            <Text style={styles.heading}>Otros clientes también añadieron</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <Card item={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 15 }}
            />
        </View>
    );
};

const PointsToConsider = () => (
    <View style={{ marginTop: 20 }}>
        <Text style={styles.heading}>Puntos a tener en cuenta</Text>

        {points.map((point) => (
            <View key={point.title} style={styles.pointRow}>
                {/* @ts-ignore */}
                <Ionicons name={point.icon} size={24} color={COLORS.primary} />
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
        { icon: "card-outline", label: "Añadir un método de pago", path: "/(private)/(create-services)/payment" },
        { icon: "pricetag-outline", label: "Agregar cupón", path: "/(private)/(create-services)/billing" },
        { icon: "document-text-outline", label: "Agregar datos de facturación", path: "/(private)/(create-services)/billing" },
    ];


    return (
        <View style={{ marginVertical: 0 }}>
            {options.map((option) => (
                <Pressable
                    key={option.label}
                    style={styles.paymentRow}
                    onPress={() => router.push(
                        option.path as
                        "/(private)/(create-services)/payment" |
                        "/(private)/(create-services)/billing"
                    )}
                >
                    <Ionicons name={option.icon as any} size={24} color={COLORS.grayDark} />
                    <Text style={styles.paymentLabel}>{option.label}</Text>
                    <Ionicons name="chevron-forward" size={20} color={COLORS.grayDark} />
                </Pressable>
            ))}
        </View>
    );
};

const AddServiceButton = () => {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.text}>Añadir servicio</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between"
    },
    header: {
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    backButton: {
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    title: {
        fontFamily: "DM Sans",
        fontWeight: "800",
        fontSize: 25,
        lineHeight: 40,
        textAlign: "center",
        textAlignVertical: "center",
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
        gap: 15,
        paddingBottom: 20,
    },
    inputButton: {
        backgroundColor: "#50B4E81A",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 14,
        borderRadius: 10,
        gap: 10,
    },
    inputButtonText: {
        fontSize: 16,
        color: COLORS.grayDark,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
    input: {
        flex: 1,
        backgroundColor: "#50B4E81A",
        paddingHorizontal: 10,
        paddingVertical: 16,
        borderRadius: 10,
    },
    checkboxContainer: {
        flexDirection: "column",
        gap: 10,
    },
    checkboxRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: COLORS.grayDark,
        borderRadius: 4,
    },
    checkboxSelected: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },
    checkboxLabel: {
        fontSize: 14,
        color: COLORS.grayDark,
    },

    heading: {
        fontSize: 16,
        fontWeight: "600",
        marginTop: 8,
        marginBottom: 6
    },
    card: {
        width: 140,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
        elevation: 2, // sombra en Android
        shadowColor: "#000", // sombra en iOS
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    cardImage: {
        width: 125,
        height: 125
    },
    plusButton: {
        position: "absolute",
        bottom: 8,
        right: 8,
        backgroundColor: "#50B4E8",
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: "700",
        marginTop: 8,
        marginHorizontal: 8,
    },
    cardSubtitle: {
        fontSize: 12,
        color: "#555",
        marginBottom: 8,
        marginHorizontal: 8,
    },

    pointRow: {
        flexDirection: "row",
        marginVertical: 10,
        alignItems: "flex-start",
        gap: 10,
    },
    pointTitle: {
        fontSize: 14,
        fontWeight: "700",
        color: COLORS.grayDark,
    },
    pointDescription: {
        fontSize: 12,
        color: "#555",
        marginTop: 2,
    },

    paymentRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        marginBottom: 10,
    },

    paymentLabel: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: COLORS.grayDark,
    },

    button: {
        backgroundColor: "#4AA3F0", // azul similar al de la imagen
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, // para Android
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});

export default CreateService;
