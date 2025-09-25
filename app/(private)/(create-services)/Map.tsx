import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

interface Location {
    latitude: number;
    longitude: number;
}

const COLORS = {
    primary: "#50B4E8",
    accent: "#FFC356",
    text: "#000",
    gray: "#D5D5D5",
    lightGray: "#F5F5F5",
};

const Map = () => {
    const [location, setLocation] = useState<Location | null>(null);
    const router = useRouter();

    const handleGoBack = () => router.push("/(private)/(create-services)/address");

    const handleGetLocation = async () => {
        let pos = await Location.getCurrentPositionAsync({});

        setLocation({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
        });
    };

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") return;
            handleGetLocation();
        })();
    }, []);

    if (!location) return null;

    const leafletHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
                <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
                <style>
                    html, body, #map { margin:0; padding:0; height:100%; }
                </style>
            </head>
            <body>
                <div id="map"></div>
                <script>
                // 👇 Aquí quitamos los controles de zoom
                var map = L.map('map', { zoomControl: false }).setView([${location.latitude}, ${location.longitude}], 14);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19
                }).addTo(map);

                L.marker([${location.latitude}, ${location.longitude}]).addTo(map);
                </script>
            </body>
        </html>
    `;

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <View style={styles.container}>
                <View style={styles.containerHeader}>

                    <View style={styles.header}>
                        <Pressable style={styles.backButton} onPress={handleGoBack}>
                            <Ionicons name="arrow-back" size={24} color="#000" />
                        </Pressable>

                    </View>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="search-outline" size={20} color={COLORS.gray} />
                        <TextInput
                            style={styles.input}
                            placeholder="Introducir dirección"
                            placeholderTextColor={COLORS.gray}
                        />
                    </View>
                </View>

                <WebView originWhitelist={["*"]} source={{ html: leafletHTML }} style={styles.map} />

                <TouchableOpacity
                    style={styles.locationButton}
                    onPress={handleGetLocation}
                >
                    <Ionicons name="locate" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#fff" },
    container: { flex: 1, backgroundColor: "#FFFFFF" },
    containerHeader: {
        position: "absolute",
        top: 10,
        left: 10,
        right: 10,
        flexDirection: "row",
        alignItems: "center",
        zIndex: 10,
    },
    header: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    inputWrapper: {
        flex: 1,
        marginLeft: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    backButton: {
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 16,
        color: "#000",
    },
    map: { flex: 1 },
    locationButton: {
        position: "absolute",
        bottom: 30,
        right: 20,
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        padding: 14,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 4,
    },
});

export default Map;
