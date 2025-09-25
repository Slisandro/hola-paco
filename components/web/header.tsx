import { useAuth } from "@/contexts/AuthContext-web";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ITEMS = [
    { name: "HOME", path: "/(web)" },
    { name: "SERVICIOS", path: "/(web)/services" },
    { name: "TRABAJO", path: "/(web)/offer" },
    { name: "TESTIMONIOS", path: "/(web)" },
    { name: "CONTACTAR", path: "/(web)" },
];

// Simulación de usuario logueado
const user = {
    loggedIn: false,
    name: "Paco",
    avatar: "https://i.pravatar.cc/40?img=5",
};

const Header = () => {
    const router = useRouter();  
    const { isAuthenticated } = useAuth();


    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
                <Text style={styles.logoText}>
                    <Text style={{ color: "#50B4E8" }}>Hola {user.loggedIn ? user.name : "Paco"}</Text>
                </Text>
            </View>

            <View style={styles.menu}>
                {ITEMS.map((item) => (
                    // @ts-expect-error
                    <TouchableOpacity key={item.name} onPress={() => router.push(item.path)}>
                        <Text style={styles.menuItem}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.buttons}>
                {isAuthenticated ? (
                    <>
                        <TouchableOpacity onPress={() => router.push("/(web)/chats")}>
                            <Ionicons name="chatbubble-outline" size={24} color="#50B4E8" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.push("/(web)/profile")}>
                            <Image source={{ uri: user.avatar }} style={styles.avatar} />
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <TouchableOpacity
                            style={styles.accessButton}
                            onPress={() => router.push("/(web)/login")}
                        >
                            <Text style={styles.accessText}>ACCESO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.registerButton}
                            onPress={() => router.push("/(web)/register")}
                        >
                            <Text style={styles.registerText}>REGISTRARSE</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        zIndex: 100,
    },
    logoContainer: { flexDirection: "row", alignItems: "center", gap: 6 },
    logo: { width: 50, height: 45, resizeMode: "contain" },
    logoText: { fontSize: 20, fontWeight: "bold" },
    menu: { flexDirection: "row", gap: 20 },
    menuItem: { fontSize: 10, color: "#333", fontWeight: "600" },
    buttons: { flexDirection: "row", gap: 12, alignItems: "center" },
    accessButton: { borderWidth: 1, borderColor: "#50B4E8", borderRadius: 20, paddingHorizontal: 12, paddingVertical: 8 },
    accessText: { color: "#50B4E8", fontWeight: "600", fontSize: 10 },
    registerButton: { backgroundColor: "#50B4E8", borderRadius: 20, paddingHorizontal: 12, paddingVertical: 8 },
    registerText: { color: "#fff", fontWeight: "600", fontSize: 10 },
    avatar: { width: 32, height: 32, borderRadius: 16 },
});

export default Header;
