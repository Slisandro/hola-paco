import { useAuth } from "@/contexts/AuthContext-web";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ITEMS = [
    { name: "HOME", path: "/(web)" },
    { name: "SERVICIOS", path: "/(web)/services" },
    { name: "TRABAJO", path: "/(web)/offer" },
    { name: "TESTIMONIOS", path: "/(web)" },
    { name: "CONTACTAR", path: "/(web)" },
];

const user = {
    loggedIn: false,
    name: "Paco",
    avatar: "https://i.pravatar.cc/40?img=5",
};

const Header = () => {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    const [windowWidth, setWindowWidth] = useState(Dimensions.get("window").width);

    useEffect(() => {
        const handleResize = () => setWindowWidth(Dimensions.get("window").width);
        if (Platform.OS === "web") {
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const isSmallScreen = windowWidth < 768;
    const isMediumScreen = windowWidth < 1100;

    return (
        <View style={[styles.container, { paddingHorizontal: isSmallScreen ? 20 : 80 }]}>
            <View style={styles.logoContainer}>
                <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
                <Text style={[styles.logoText, { fontSize: isSmallScreen ? 16 : 20 }]}>
                    <Text style={{ color: "white" }}>Hola {user.loggedIn ? user.name : "Paco"}</Text>
                </Text>
            </View>

            <View style={[styles.menu, { flexDirection: isSmallScreen ? "column" : "row", gap: isSmallScreen ? 10 : 20 }]}>
                {!isMediumScreen && ITEMS.map((item) => (
                    // @ts-expect-error
                    <TouchableOpacity key={item.name} onPress={() => router.push(item.path)}>
                        <Text style={[styles.menuItem, { fontSize: isSmallScreen ? 12 : 14 }]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))}

                <View style={[styles.buttons, { flexDirection: "row", gap: isSmallScreen ? 8 : 12 }]}>
                    {isAuthenticated ? (
                        <>
                            <TouchableOpacity onPress={() => router.push("/(web)/chats")}>
                                <Ionicons name="chatbubble-outline" size={isSmallScreen ? 20 : 24} color="#50B4E8" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push("/(web)/profile")}>
                                <Image source={{ uri: user.avatar }} style={[styles.avatar, { width: isSmallScreen ? 28 : 32, height: isSmallScreen ? 28 : 32 }]} />
                            </TouchableOpacity>
                        </>
                    ) : (
                        <>
                            <TouchableOpacity
                                style={[styles.accessButton, { paddingHorizontal: isSmallScreen ? 8 : 12, paddingVertical: isSmallScreen ? 6 : 8 }]}
                                onPress={() => router.push("/(web)/login")}
                            >
                                <Text style={[styles.accessText, { fontSize: isSmallScreen ? 10 : 12 }]}>ACCESO</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.registerButton, { paddingHorizontal: isSmallScreen ? 8 : 12, paddingVertical: isSmallScreen ? 6 : 8 }]}
                                onPress={() => router.push("/(web)/register")}
                            >
                                <Text style={[styles.registerText, { fontSize: isSmallScreen ? 10 : 12 }]}>REGISTRARSE</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
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
        elevation: 4,
        zIndex: 100,
    },
    logoContainer: { flexDirection: "row", alignItems: "center", gap: 6 },
    logo: { width: 50, height: 45, resizeMode: "contain" },
    logoText: { fontWeight: "bold" },
    menu: { alignItems: "center" },
    menuItem: { color: "white", fontWeight: "600" },
    buttons: { alignItems: "center" },
    accessButton: { borderWidth: 1, borderColor: "white", borderRadius: 20 },
    accessText: { color: "white", fontWeight: "600" },
    registerButton: { backgroundColor: "#FFA962", borderRadius: 20 },
    registerText: { color: "#fff", fontWeight: "600" },
    avatar: { borderRadius: 16 },
});

export default Header;
