import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Contact = () => {
    const router = useRouter();

    const handleGoBack = () => router.push("/(tabs)/profile");

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <Pressable style={styles.backButton} onPress={handleGoBack}>
                <Ionicons name="arrow-back" size={24} color="#000" />
            </Pressable>
            <View style={styles.container}>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#F3F5FD"
    },
    backButton: {
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
})

export default Contact