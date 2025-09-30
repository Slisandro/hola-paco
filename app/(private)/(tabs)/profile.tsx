import { useAccount } from '@/contexts/AccountContext';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ITEMS_PROFILE = [
    {
        name: "Mi perfil",
        icon: require("@/assets/icons/profile/user.png"),
        route: "/(profile)/profile"
    },
    {
        name: "Contacto",
        icon: require("@/assets/icons/profile/contacts.png"),
        route: "/(profile)/contact"
    },
];

const ITEMS_ACTIONS = [
    {
        name: "Compartir",
        icon: require("@/assets/icons/profile/share.png"),
        route: "/(private)/(profile)/registerCompany"
    },
    {
        name: "Comentarios",
        icon: require("@/assets/icons/profile/star.png"),
        route: "/(private)/(profile)/registerCompany"
    },
    {
        name: "Cerrar sesión",
        icon: require("@/assets/icons/profile/log-out.png"),
        route: "/(public)/auth"
    },
];

export default function ProfileScreen() {
    const router = useRouter();
    const { accountType } = useAccount();

    const ITEMS_ACCOUNT = [
        {
            name: accountType === "profesional"
                ? "Historial de clientes"
                : "Historial de profesionales contratados",
            icon: require("@/assets/icons/profile/history.png"),
            route: "/(profile)/history"
        },
        accountType === "profesional" ? {
            name: "Métodos de pagos",
            icon: require("@/assets/icons/profile/wallet.png"),
            route: "/(private)/(profile)/paymentMethod"
        } : {
            name: "Conviértete en trabajador",
            icon: require("@/assets/icons/profile/construction-worker.png"),
            route: "/(private)/(profile)/profileWorker"
        },
        {
            name: "Registrar una empresa",
            icon: require("@/assets/icons/profile/bricks.png"),
            route: "/(private)/(profile)/registerCompany"
        },
    ];

    const renderSection = (items: { name: string, icon: any, route: any }[]) =>
        items.map((item, index) => (
            <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => item.route && router.push(item.route)}
            >
                <View style={styles.itemLeft}>
                    <Image source={item.icon} style={styles.itemIcon} />
                    <Text style={styles.itemText}>{item.name}</Text>
                </View>
                <FontAwesome5 name="arrow-right" size={16} color="#0F0F0F50" />
            </TouchableOpacity>
        ));

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Mafi Mushkil</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.section}>{renderSection(ITEMS_PROFILE)}</View>
                <View style={styles.section}>{renderSection(ITEMS_ACCOUNT)}</View>
                <View style={styles.section}>{renderSection(ITEMS_ACTIONS)}</View>
            </View>
        </SafeAreaView>
    );
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
    header: {
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF"
    },
    titleHeader: {
        fontFamily: "Roboto Flex",
        fontWeight: "700",
        fontSize: 22,
        lineHeight: 22,
        letterSpacing: 0,
        color: "#000",
    },
    section: {
        marginBottom: 20,
        backgroundColor: "#F9F9F9",
        borderRadius: 12,
        overflow: "hidden",
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 18,
        paddingHorizontal: 14,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#E0E0E0",
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    itemIcon: {
        width: 22,
        height: 22,
        marginRight: 12,
        resizeMode: "contain",
    },
    itemText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
    },
    itemArrow: {
        fontSize: 18,
        color: "#999",
    },
});
