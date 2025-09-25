import Header from "@/components/web/header";
import { useAuth } from "@/contexts/AuthContext-web";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const COLORS = {
    primary: "#50B4E8",
    text: "#000",
    gray: "#666",
    cardBg: "#fff",
    background: "#F5F5F5",
};

const ITEMS_PROFILE = [
    { name: "Mi perfil", icon: require("@/assets/icons/profile/user.png"), route: "/(web)/profile/edit" },
    { name: "Contacto", icon: require("@/assets/icons/profile/contacts.png"), route: "/(web)/contact" },
];

const ITEMS_ACCOUNT = [
    { name: "Conviértete en trabajador", icon: require("@/assets/icons/profile/construction-worker.png"), route: "/(web)/profileWorker" },
    { name: "Registrar una empresa", icon: require("@/assets/icons/profile/bricks.png"), route: "/(web)/registerCompany" },
];

const ITEMS_ACTIONS = [
    { name: "Compartir", icon: require("@/assets/icons/profile/share.png"), route: "/(web)/share" },
    { name: "Comentarios", icon: require("@/assets/icons/profile/star.png"), route: "/(web)/feedback" },
    { name: "Cerrar sesión", icon: require("@/assets/icons/profile/log-out.png"), route: "/(web)/login" },
];

export default function ProfileWeb() {
    const router = useRouter();
    const { logout } = useAuth()

    const renderSection = (items: { name: string; icon: any; route: string }[]) => (
        <View style={styles.section}>
            {items.map((item, idx) => (
                <Pressable
                    key={idx}
                    style={styles.itemCard}
                    onPress={() => {
                        if (item.name === "Cerrar sesión") {
                            logout()
                        }

                        // @ts-expect-error
                        router.push(item.route)
                    }}
                >
                    <View style={styles.itemLeft}>
                        <Image source={item.icon} style={styles.itemIcon} />
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                    <Text style={styles.arrow}>&#8250;</Text>
                </Pressable>
            ))}
        </View>
    );

    return (
        <ScrollView>
            <Header />
            <View style={styles.content}>
                <View style={styles.profileHeader}>
                    <Image
                        source={{ uri: "https://i.pravatar.cc/100?img=12" }}
                        style={styles.avatar}
                    />
                    <Text style={styles.userName}>Mafi Mushkil</Text>
                    <Text style={styles.userEmail}>mafimus@example.com</Text>
                </View>

            </View>
            {renderSection(ITEMS_PROFILE)}
            {renderSection(ITEMS_ACCOUNT)}
            {renderSection(ITEMS_ACTIONS)}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        marginTop: 70,
        paddingVertical: 30,
        marginHorizontal: "auto",
        alignItems: "center",
        justifyContent: "center",
        width: "75%"
    },
    profileHeader: {
        alignItems: "center",
        marginBottom: 30,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 12,
    },
    userName: {
        fontSize: 22,
        fontWeight: "700",
        color: COLORS.text,
    },
    userEmail: {
        fontSize: 14,
        color: COLORS.gray,
        marginTop: 4,
    },
    section: {
        marginBottom: 20,
        paddingHorizontal: 20,
        width: "50%",
        marginHorizontal: "auto"
    },
    itemCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: COLORS.cardBg,
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    itemLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
    itemIcon: { width: 24, height: 24, resizeMode: "contain" },
    itemText: { fontSize: 16, fontWeight: "500", color: COLORS.text },
    arrow: { fontSize: 18, color: COLORS.gray },
});
