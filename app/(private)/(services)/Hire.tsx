import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const COLORS = {
    primary: "#50B4E8",
    accent: "#FFC356",
    text: "#000",
    gray: "#D5D5D5",
    lightGray: "#F5F5F5",
};

const Hire = () => {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedHour, setSelectedHour] = useState("09:00 AM");
    const [location, setLocation] = useState("827 Los Obispos, Madrid");

    const handleGoBack = () => router.push("/(private)/(services)/professional")
    const handleToDetail = () => router.push("/(private)/(services)/serviceDetail")

    // Días del mes para el mes actual
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }).map((_, i) => {
        const d = new Date(currentYear, currentMonth, i + 1);
        const weekdayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
        return {
            label: d.getDate().toString(),
            weekday: weekdayNames[d.getDay()],
            date: d,
        }
    });

    // Horarios de 1 hora de 9 AM a 6 PM
    const hours = Array.from({ length: 10 }).map((_, i) => {
        let hour = 9 + i;
        let suffix = hour >= 12 ? "PM" : "AM";
        let displayHour = hour > 12 ? hour - 12 : hour;
        return `${displayHour.toString().padStart(2, "0")}:00 ${suffix}`;
    });

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <View style={styles.container}>

                {/* HEADER */}
                <View style={styles.header}>
                    <Pressable style={styles.backButton} onPress={handleGoBack}>
                        <Ionicons name="arrow-back" size={24} color="#000" />
                    </Pressable>
                    <View style={{ flexDirection: "row", gap: 15, padding: 15 }}>
                        <Image
                            source={{ uri: "https://i.pravatar.cc/100" }}
                            style={styles.profileImage}
                            contentFit="cover"
                        />
                        <View style={{ justifyContent: "center", gap: 6 }}>
                            <View style={styles.ratingRow}>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Ionicons
                                        key={index}
                                        name={index < Math.floor(4.5) ? "star" : "star-outline"}
                                        size={20}
                                        color={COLORS.accent}
                                    />
                                ))}
                                <Text style={styles.ratingText}>(10)</Text>
                            </View>
                            <Text style={styles.titleProfessional}>Lauridiv</Text>
                            <Text style={styles.descriptionProfessional}>Limpieza</Text>
                        </View>
                    </View>
                </View>

                {/* SELECTOR DE MES Y DÍA */}
                <View style={styles.selectorContainer}>
                    <Text style={styles.selectorTitle}>Selecciona una fecha</Text>
                    <View style={styles.monthHeader}>
                        <Pressable>
                            <Ionicons name="chevron-back" size={20} color={COLORS.text} />
                        </Pressable>
                        <Text style={styles.monthText}>{monthNames[currentMonth]}</Text>
                        <Pressable>
                            <Ionicons name="chevron-forward" size={20} color={COLORS.text} />
                        </Pressable>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                        {days.map((day, i) => {
                            const selected = selectedDate.toDateString() === day.date.toDateString();
                            return (
                                <Pressable
                                    key={i}
                                    onPress={() => setSelectedDate(day.date)}
                                    style={[styles.dayItem, selected && styles.dayItemSelected]}
                                >
                                    <Text style={[styles.weekdayText, selected && styles.weekdayTextSelected]}>
                                        {day.weekday}
                                    </Text>
                                    <Text style={[styles.dayText, selected && styles.dayTextSelected]}>
                                        {day.label}
                                    </Text>
                                </Pressable>
                            );
                        })}
                    </ScrollView>
                </View>

                {/* SELECTOR DE HORARIO */}
                <View style={styles.selectorContainer}>
                    <Text style={styles.selectorTitle}>Selecciona un horario</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {hours.map((hour, i) => {
                            const selected = selectedHour === hour;
                            return (
                                <Pressable
                                    key={i}
                                    onPress={() => setSelectedHour(hour)}
                                    style={[styles.hourItem, selected && styles.hourItemSelected]}
                                >
                                    <Text style={[styles.hourText, selected && styles.hourTextSelected]}>
                                        {hour}
                                    </Text>
                                </Pressable>
                            );
                        })}
                    </ScrollView>
                </View>

                <View style={styles.inputWrapper}>
                    <Ionicons name="location-sharp" size={20} color="#50B4E8" style={{ marginHorizontal: 10 }} />
                    <TextInput
                        style={styles.textInput}
                        value={location}
                        onChangeText={setLocation}
                        placeholderTextColor="#7D848D"
                    />
                </View>

                <View style={{ paddingHorizontal: 15, marginTop: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={styles.price}>
                        80 € &nbsp;
                        <Text style={styles.textPrice}>/ dia</Text>
                    </Text>

                    <Pressable style={[styles.chatButton]}>
                        <Text
                            style={styles.chatButtonText}
                            onPress={handleToDetail}
                        >
                            Contratar {">>>"}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff"
    },
    backButton: {
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    container: { flex: 1, backgroundColor: "#FFFFFF", justifyContent: "space-between", paddingBottom: 20 },
    header: { backgroundColor: COLORS.primary, paddingBottom: 0 },
    profileImage: { width: 110, height: 110, borderRadius: 60, borderWidth: 2, borderColor: COLORS.primary },
    ratingRow: { flexDirection: "row", alignItems: "center", gap: 4 },
    ratingText: { fontFamily: "DM Sans", fontWeight: "400", fontSize: 16, lineHeight: 20, color: COLORS.gray },
    titleProfessional: { fontFamily: "Quicksand", fontWeight: "700", fontSize: 24, lineHeight: 24 },
    descriptionProfessional: { fontFamily: "Quicksand", fontWeight: "600", fontSize: 18, lineHeight: 18 },

    selectorContainer: { marginTop: 15, gap: 15, paddingHorizontal: 15 },
    monthHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 5 },
    monthText: { fontFamily: "DM Sans", fontWeight: "500", fontSize: 16 },

    dayItem: { paddingHorizontal: 18, paddingVertical: 12, backgroundColor: COLORS.lightGray, borderRadius: 12, marginRight: 10, alignItems: "center" },
    dayItemSelected: { backgroundColor: COLORS.accent },
    weekdayText: { fontFamily: "DM Sans", fontWeight: "400", fontSize: 12, color: COLORS.gray },
    weekdayTextSelected: { color: "#fff", fontWeight: "500" },
    dayText: { fontFamily: "DM Sans", fontWeight: "500", fontSize: 16, color: COLORS.text },
    dayTextSelected: { color: "#fff" },

    selectorTitle: { fontFamily: "DM Sans", fontWeight: "500", fontSize: 16, color: COLORS.text },
    hourItem: { paddingHorizontal: 14, paddingVertical: 14, backgroundColor: COLORS.lightGray, borderRadius: 12, marginRight: 10 },
    hourItemSelected: { backgroundColor: COLORS.accent },
    hourText: { fontFamily: "DM Sans", fontWeight: "400", fontSize: 14, color: COLORS.text },
    hourTextSelected: { color: "#fff", fontWeight: "500" },

    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#50B4E8",
        borderRadius: 12,
        height: 50,
        marginVertical: 15,
        marginHorizontal: 15
    },
    textInput: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 16,
        color: "#000",
    },

    price: {
        fontFamily: "DM Sans",
        fontWeight: "700",   // Bold
        fontSize: 25,
        letterSpacing: 0,    // no es obligatorio, ya es 0 por defecto
        color: "#000",       // define un color para asegurar visibilidad
    },
    textPrice: {
        fontFamily: "Quicksand",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 0,
        color: "#000",
    },

    chatButton: {
        backgroundColor: COLORS.accent,
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: "center",
        marginTop: 4,
        paddingHorizontal: 16
    },
    chatButtonText: {
        fontFamily: "DM Sans",
        fontWeight: "600",
        fontSize: 20,
        color: COLORS.text,
        textAlign: "center",
        textAlignVertical: "center",
    },
});

export default Hire;
