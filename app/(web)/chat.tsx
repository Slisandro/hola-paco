import Header from "@/components/web/header";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    Dimensions,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

interface Message {
    id: string;
    text: string;
    sender: "user" | "provider";
    time: string;
    date: string;
    read: boolean;
}

const messagesData: Message[] = [
    { id: "1", text: "Hola, quería confirmar la limpieza para mañana.", sender: "user", time: "09:30", date: "2025-09-19", read: true },
    { id: "2", text: "¡Perfecto! Te esperamos a la hora acordada.", sender: "provider", time: "09:32", date: "2025-09-19", read: true },
    { id: "3", text: "Gracias!", sender: "user", time: "09:35", date: "2025-09-19", read: false },
    { id: "4", text: "Pedido #000124 asignado.", sender: "provider", time: "10:10", date: "2025-09-20", read: false },
];

const groupMessagesByDate = (messages: Message[]): Record<string, Message[]> => {
    const grouped: Record<string, Message[]> = {};
    messages.forEach((msg) => {
        if (!grouped[msg.date]) grouped[msg.date] = [];
        grouped[msg.date].push(msg);
    });
    return grouped;
};

const ChatPage = () => {
    const router = useRouter();
    const groupedMessages = groupMessagesByDate(messagesData);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("es-ES", { day: "numeric", month: "long" });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />

            <ScrollView style={styles.content}>
                
                <View style={{ paddingHorizontal: 20, marginBottom: 15 }}>
                    <View style={{ borderWidth: 1, borderColor: "#d9cbfd", justifyContent: "space-between", alignItems: "center", paddingVertical: 12, paddingHorizontal: 12, flexDirection: "row", borderRadius: 12 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
                            <View style={{ width: 36, height: 36, alignItems: "center", justifyContent: "center", padding: 4, borderRadius: 12, backgroundColor: "#5137aa" }}>
                                <Entypo name="calendar" size={20} color="white" />
                            </View>
                            <View>
                                <Text style={styles.badgeTitle}>Pedido #000123</Text>
                                <Text style={styles.regularText}>Programado</Text>
                            </View>
                        </View>

                        <Pressable>
                            <Text style={[styles.regularText, { color: "#5137aa", fontSize: 16 }]}>Ver detalles</Text>
                        </Pressable>
                    </View>
                </View>

                {Object.keys(groupedMessages).map((date) => (
                    <View key={date} style={styles.dateGroup}>
                        <Text style={styles.dateText}>{formatDate(date)}</Text>

                        {groupedMessages[date].map((msg) => (
                            <View
                                key={msg.id}
                                style={[
                                    styles.messageContainer,
                                    msg.sender === "user" ? styles.userMessage : styles.providerMessage,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.messageText,
                                        msg.sender === "user" ? styles.userMessageText : styles.providerMessageText,
                                    ]}
                                >
                                    {msg.text}
                                </Text>
                                <View style={styles.messageMeta}>
                                    <Text style={styles.messageTime}>{msg.time}</Text>
                                    {msg.sender === "user" && (
                                        <Ionicons
                                            name={msg.read ? "checkmark-done" : "checkmark"}
                                            size={16}
                                            color={msg.read ? "#34B7F1" : "#ccc"}
                                            style={{ marginLeft: 4 }}
                                        />
                                    )}
                                </View>
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>

            {/* Barra de mensaje */}
            <View style={styles.inputContainer}>
                <Pressable style={styles.attachButton}>
                    <Ionicons name="add" size={24} color="#5137ab" />
                </Pressable>

                <TextInput style={styles.inputField} placeholder="Escribe un mensaje..." />

                <Pressable style={styles.audioButton}>
                    <MaterialIcons name="keyboard-voice" size={24} color="#5137ab" />
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    content: { flex: 1, backgroundColor: "#f4f4f6", paddingVertical: 20, paddingHorizontal: 15, minHeight: height * 0.75, marginTop: 70 },
    badgeTitle: {
        fontWeight: "800",
        fontSize: 16,
        letterSpacing: 0,
        color: "#000",
        textAlignVertical: "center",
    },
    regularText: {
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 0,
        color: "#000",
        textAlignVertical: "center",
    },
    chatHeader: { backgroundColor: "#50B4E8", flexDirection: "row", alignItems: "center", padding: 16, gap: 12, borderRadius: 12 },
    chatTitle: { color: "#fff", fontWeight: "700", fontSize: 18 },
    dateGroup: { marginVertical: 10 },
    dateText: { textAlign: "center", fontWeight: "700", fontSize: 12, color: "#999", marginBottom: 10 },
    messageContainer: { maxWidth: "80%", paddingVertical: 8, paddingHorizontal: 12, borderRadius: 12, marginBottom: 8 },
    userMessage: { backgroundColor: "#5137ab", alignSelf: "flex-end", borderTopRightRadius: 0 },
    providerMessage: { backgroundColor: "#fff", alignSelf: "flex-start", borderTopLeftRadius: 0 },
    messageText: { fontSize: 14, lineHeight: 20 },
    userMessageText: { color: "#fff" },
    providerMessageText: { color: "#000" },
    messageMeta: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginTop: 4 },
    messageTime: { fontSize: 12, color: "#666" },
    inputContainer: { flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 8, backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: "#ddd" },
    attachButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: "#f2f2f2", justifyContent: "center", alignItems: "center", marginRight: 8 },
    inputField: { flex: 1, fontSize: 14, paddingHorizontal: 12 },
    audioButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: "#f2f2f2", justifyContent: "center", alignItems: "center", marginLeft: 8 },
});

export default ChatPage;
