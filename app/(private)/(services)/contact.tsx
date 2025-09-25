import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Message {
    id: string
    text: string
    sender: 'user' | 'provider'
    time: string
    date: string
    read: boolean
}

const messagesData: Message[] = [
    {
        id: '1',
        text: 'Hola, quería confirmar la limpieza para mañana.',
        sender: 'user', // 'user' = logueado, 'provider' = recibido
        time: '09:30',
        date: '2025-09-19',
        read: true,
    },
    {
        id: '2',
        text: '¡Perfecto! Te esperamos a la hora acordada.',
        sender: 'provider',
        time: '09:32',
        date: '2025-09-19',
        read: true,
    },
    {
        id: '3',
        text: 'Gracias!',
        sender: 'user',
        time: '09:35',
        date: '2025-09-19',
        read: false,
    },
    {
        id: '4',
        text: 'Pedido #000124 asignado.',
        sender: 'provider',
        time: '10:10',
        date: '2025-09-20',
        read: false,
    },
]

const groupMessagesByDate = (messages: Message[]): Record<string, Message[]> => {
    const grouped: Record<string, Message[]> = {}

    messages.forEach((msg) => {
        if (!grouped[msg.date]) {
            grouped[msg.date] = []
        }
        grouped[msg.date].push(msg)
    })

    return grouped
}

const Contact = () => {
    const router = useRouter()
    const handleGoBack = () => router.push("/(private)/(services)/serviceDetail")

    const groupedMessages = groupMessagesByDate(messagesData)

    const formatDate = (dateStr: string): string => {
        const date = new Date(dateStr)
        return date.toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
        })
    }

    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar style="dark" />

            <Pressable style={styles.backButton} onPress={handleGoBack}>
                <Ionicons name="arrow-back" size={24} color="#000" />
            </Pressable>

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
                                    msg.sender === 'user' ? styles.userMessage : styles.providerMessage,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.messageText,
                                        msg.sender === 'user' ? styles.userMessageText : styles.providerMessageText,
                                    ]}
                                >
                                    {msg.text}
                                </Text>
                                <View style={styles.messageMeta}>
                                    <Text style={styles.messageTime}>{msg.time}</Text>
                                    {msg.sender === 'user' && (
                                        <Ionicons
                                            name={msg.read ? 'checkmark-done' : 'checkmark'}
                                            size={16}
                                            color={msg.read ? '#34B7F1' : '#ccc'}
                                            style={{ marginLeft: 4 }}
                                        />
                                    )}
                                </View>
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>

            <View style={styles.inputContainer}>
                <Pressable style={styles.attachButton}>
                    <Ionicons name="add" size={24} color="#5137ab" />
                </Pressable>

                <Text style={styles.inputPlaceholder}>Escribe un mensaje...</Text>

                <Pressable style={styles.audioButton}>
                    <MaterialIcons name="keyboard-voice" size={24} color="#5137ab" />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#50B4E8",
    },
    backButton: {
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    content: {
        flex: 1,
        backgroundColor: "#f4f4f6",
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    badgeTitle: {
        fontFamily: "DM Sans",
        fontWeight: "800",
        fontSize: 16,
        letterSpacing: 0,
        color: "#000",
        textAlignVertical: "center",
    },
    regularText: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 0,
        color: "#000",
        textAlignVertical: "center",
    },
    dateGroup: {
        marginBottom: 20,
    },
    dateText: {
        textAlign: "center",
        fontFamily: "DM Sans",
        fontWeight: "700",
        fontSize: 12,
        color: "#999",
        marginBottom: 10,
    },
    messageContainer: {
        maxWidth: "80%",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginBottom: 8,
    },
    userMessage: {
        backgroundColor: "#5137ab",
        alignSelf: "flex-end",
        borderTopRightRadius: 0,
    },
    providerMessage: {
        backgroundColor: "#fff",
        alignSelf: "flex-start",
        borderTopLeftRadius: 0,
    },
    messageText: {
        fontFamily: "DM Sans",
        fontSize: 14,
        lineHeight: 20,
    },
    userMessageText: {
        color: "#fff",
        fontWeight: "400",
    },
    providerMessageText: {
        color: "#000",
        fontWeight: "400",
    },
    messageMeta: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 4,
    },
    messageTime: {
        fontFamily: "DM Sans",
        fontSize: 12,
        color: "#666",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#ddd",
    },
    attachButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#f2f2f2",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
    },
    inputPlaceholder: {
        flex: 1,
        fontFamily: "DM Sans",
        fontSize: 14,
        color: "#999",
    },
    audioButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#f2f2f2",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 8,
    },
})

export default Contact
