import { useAccount } from '@/contexts/AccountContext';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Image } from "expo-image";
import { useRouter } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { ColorValue, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ITEMS_PROFILE = [
    {
        name: "Mi perfil",
        description: "Personaliza tu información",
        icon: <FontAwesome5 name="user" size={24} color="#286d83" />,
        route: "/(profile)/profile",
        bgColor: "#b9e9fe"
    },
    {
        name: "Contacto",
        description: "Actualiza tus detalles",
        icon: <FontAwesome5 name="envelope" size={24} color="white" />,
        route: "/(profile)/contact",
        bgColor: "#26a6e7"
    },
];

const ITEMS_ACTIONS = [
    {
        name: "Compartir",
        description: "Invitá a tus amigos",
        icon: <FontAwesome name="share" size={24} color="#25a1e1" />,
        route: "/(private)/(profile)/registerCompany",
        bgColor: "#89edee"
    },
    {
        name: "Dejar opinión",
        description: "Comparte tu experiencia",
        icon: <MaterialIcons name="history-toggle-off" size={26} color="#795548" />,
        route: "/(private)/(profile)/registerCompany",
        bgColor: "#fdcc65",
    },
    {
        name: "Cerrar sesión",
        description: "Salir de tu cuenta",
        icon: <MaterialCommunityIcons name="logout" size={24} color="white" />,
        route: "/(public)/auth",
        bgColor: "#feaa46",
    },
];

interface Item {
    name: string,
    description: string,
    icon: any,
    route: any,
    bgColor: ColorValue
}

export default function ProfileScreen() {
    const router = useRouter();
    const { accountType } = useAccount();

    const ITEMS_ACCOUNT = [
        {
            name: accountType === "profesional"
                ? "Historial de clientes"
                : "Historial de profesionales",
            icon: (
                <Image
                    source={require("@/assets/icons/profile/historial.png")}
                    style={{ width: 24, height: 26 }}
                />
            ),
            route: "/(profile)/history",
            description: "Revisa tus interacciones anteriores",
            bgColor: "#E67E22", // Verde pastel
        },
        accountType === "profesional"
            ? {
                name: "Métodos de pagos",
                icon: <FontAwesome5 name="credit-card" size={22} color="#F9A825" />,
                route: "/(private)/(profile)/paymentMethod",
                description: "Administra tus formas de cobro",
                bgColor: "#F4F6F7",
            }
            : {
                name: "Conviértete en trabajador",
                icon: (
                    <Image
                        source={require("@/assets/icons/profile/llave-inglesa.png")}
                        style={{ width: 24, height: 24 }}
                    />
                ),
                route: "/(private)/(profile)/profileWorker",
                description: "Ofrece tus servicios en la app",
                bgColor: "#1B4965", 
            },
        {
            name: "Registrar una empresa",
            icon: (
                <Image
                    source={require("@/assets/icons/profile/company.png")}
                    style={{ width: 28, height: 28 }}
                />
            ),
            route: "/(private)/(profile)/registerCompany",
            description: "Completa el formulario",
            bgColor: "#2C7A7B",
        },
    ];


    const renderSection = (items: Item[]) =>
        items.map((item, index) => (
            <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => item.route && router.push(item.route)}
            >
                <View style={styles.itemLeft}>
                    <View
                        style={{
                            backgroundColor: item.bgColor,
                            padding: 10,
                            borderRadius: 10,
                            marginRight: 10,
                            width: 50,
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {item.icon}
                    </View>
                    <View style={{ gap: 4 }}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={[styles.itemText, { fontWeight: 400, fontSize: 14 }]}>{item.description}</Text>
                    </View>
                </View>
                <FontAwesome5 name="arrow-right" size={16} color="#0F0F0F50" />
            </TouchableOpacity>
        ));

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <StatusBar style="dark" />
                <View style={[styles.header, { position: "relative" }]}>
                    <View style={{ position: "relative", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", width: "100%", paddingHorizontal: 20, paddingTop: 15, gap: 6 }}>
                        <Image
                            source={require("@/assets/images/logo.png")}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 60,
                            }}
                            contentFit="contain"
                        />
                        <View>
                            <Text style={{ fontWeight: 800, fontSize: 20, fontFamily: "Roboto Flex" }}>¡Hola Mafi!</Text>
                            <Text style={{ fontWeight: 600, fontSize: 16, fontFamily: "Roboto Flex" }}>Bienvenido de nuevo </Text>
                        </View>
                    </View>
                    <View style={[styles.profileImageWrapper]}>
                        <Image
                            source={{ uri: "https://i.pravatar.cc/100" }}
                            style={styles.profileImage}
                            contentFit="contain"
                        />

                    </View>
                    <Text style={styles.titleHeader}>Mafi Mushkil</Text>
                    <Text style={[styles.titleHeader, { fontSize: 18, fontWeight: 400 }]}>mafimus@example.com</Text>
                    <TouchableOpacity style={styles.changeBgButton}>
                        <Text style={styles.changeBgText}>Editar Perfil</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <View style={styles.section}>{renderSection(ITEMS_PROFILE)}</View>
                    <View style={styles.section}>{renderSection(ITEMS_ACCOUNT)}</View>
                    <View style={styles.section}>{renderSection(ITEMS_ACTIONS)}</View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#FFFF",
        paddingBottom: 50
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#d6fcff"
    },
    header: {
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#82dafe",
        gap: 10
    },
    titleHeader: {
        fontFamily: "Roboto Flex",
        fontWeight: "700",
        fontSize: 22,
        lineHeight: 22,
        letterSpacing: 0,
        color: "#000",
    },
    profileImageWrapper: {
        alignItems: "center",
        // marginVertical: 10,
        borderWidth: 2,
        borderColor: "#FFFFFF",
        borderRadius: 60,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    changeBgButton: {
        backgroundColor: "white",
        paddingVertical: 10,
        borderRadius: 12,
        alignItems: "center",
        width: "50%",
        marginBottom: 10,
        marginHorizontal: "auto",
        borderWidth: 1,
        borderColor: "#FFFFFF66"
    },
    changeBgText: {
        color: "#50B4E8",
        fontWeight: "600",
        fontSize: 16,
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
        width: 40,
        height: 40,
        marginRight: 12,
        resizeMode: "contain",
    },
    itemText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#1d253b",
    },
    itemArrow: {
        fontSize: 18,
        color: "#999",
    },
});
