import CallToAction from "@/components/web/call-to-action";
import Footer from "@/components/web/footer";
import Header from "@/components/web/header";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const { height } = Dimensions.get("window");

const COLORS = {
    primary: "#50B4E8",
    accent: "#FFC356",
    text: "#000",
    gray: "#D5D5D5",
};

// Categorías con íconos
const categories = [
    { id: 1, name: "Fontanería", path: require("@/assets/icons/services/fontaneria.png") },
    { id: 2, name: "Limpieza", path: require("@/assets/icons/services/limpieza.png") },
    { id: 3, name: "Electricista", path: require("@/assets/icons/services/electricista.png") },
    { id: 4, name: "Carpintería", path: require("@/assets/icons/services/carpinteria.png") },
    { id: 5, name: "Montaje", path: require("@/assets/icons/services/montaje.png") },
    { id: 6, name: "Jardinería", path: require("@/assets/icons/services/jardineria.png") },
];

// Ofertas de empleo relacionadas con las categorías
type JobOffer = {
    id: string;
    title: string;
    company: string;
    categoryId: number;
    location: string;
    salary: string;
    description: string;
    image: string;
};

const JOBS: JobOffer[] = [
    {
        id: "1",
        title: "Reparación de tuberías",
        company: "Fontaneros SRL",
        categoryId: 1,
        location: "Madrid, España",
        salary: "€60 / día",
        description: "Se busca fontanero con experiencia en reparación de tuberías y fugas.",
        image: "https://i.pravatar.cc/80?img=1",
    },
    {
        id: "2",
        title: "Limpieza de oficinas",
        company: "CleanCo",
        categoryId: 2,
        location: "Barcelona, España",
        salary: "€50 / día",
        description: "Se necesita personal para limpieza de oficinas y espacios comerciales.",
        image: "https://i.pravatar.cc/80?img=2",
    },
    {
        id: "3",
        title: "Instalación eléctrica",
        company: "ElecPro",
        categoryId: 3,
        location: "Valencia, España",
        salary: "€80 / día",
        description: "Electricista certificado para instalaciones y mantenimiento eléctrico.",
        image: "https://i.pravatar.cc/80?img=3",
    },
];

const JobsList: React.FC = () => {
    const router = useRouter();
    return (
        <View style={styles.jobsList}>
            {JOBS.map((job) => {
                const category = categories.find((c) => c.id === job.categoryId);
                return (
                    <View key={job.id} style={styles.jobCard}>
                        {/* Header */}
                        <View style={styles.jobHeader}>
                            <Image source={{ uri: job.image }} style={styles.jobImage} />

                            <View style={{ flex: 1, marginLeft: 8 }}>
                                <Text style={styles.jobTitle}>{job.title}</Text>
                                <Text style={styles.jobCompany}>{job.company}</Text>

                                {/* Categoría con ícono */}
                                {category && (
                                    <View style={styles.jobMetaRow}>
                                        {/* <Image source={category.path} style={styles.categoryIcon} /> */}
                                        <Text style={styles.jobMeta}>{category.name}</Text>
                                    </View>
                                )}

                                <View style={styles.jobMetaRow}>
                                    <Ionicons name="location-outline" size={16} color={COLORS.primary} />
                                    <Text style={styles.jobMeta}>{job.location}</Text>
                                </View>
                            </View>

                            <View style={{ alignItems: "flex-end" }}>
                                <Text style={styles.salary}>{job.salary}</Text>
                            </View>
                        </View>

                        {/* Descripción */}
                        <Text style={styles.jobDescription}>{job.description}</Text>

                        {/* Botones */}
                        <View style={styles.buttonRow}>
                            <TouchableOpacity onPress={() => router.push("/(web)/chat")} style={[styles.button, styles.detailsButton]}>
                                <Text style={styles.buttonText}>Chat</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.button, styles.applyButton]}>
                                <Text style={[styles.buttonText, { color: "#fff" }]}>Enviar oferta</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

const JobOffersPage = () => {
    const router = useRouter();
    return (
        <ScrollView contentContainerStyle={{ minHeight: height }}>
            <Header />

            <View style={styles.content}>
                <View style={styles.headerSection}>
                    <Text style={styles.headerTitle}>Ofertas de empleo</Text>
                </View>

                {/* Buscador */}
                <View style={styles.searchWrapper}>
                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={18} color="#00000099" style={{ paddingHorizontal: 12 }} />
                        <TextInput
                            placeholder="Buscar empleo por título, categoría o ubicación..."
                            style={styles.searchInput}
                            placeholderTextColor={COLORS.gray}
                        />
                    </View>

                    <Pressable style={styles.filterButton}>
                        <Ionicons name="filter" size={20} color="#000000" />
                    </Pressable>
                </View>

                <JobsList />
            </View>

            <CallToAction />
            <Footer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        minHeight: height * 0.75,
        marginTop: 70,
        marginBottom: 20,
    },
    headerSection: {
        backgroundColor: COLORS.primary,
        padding: 30,
        width: "100%",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: "800",
        color: "#FFF",
    },
    jobsList: {
        gap: 12,
        width: "100%",
        maxWidth: 900,
        alignSelf: "center",
    },
    jobCard: {
        backgroundColor: "#fff",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        padding: 16,
        gap: 8,
    },
    jobHeader: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 12,
    },
    jobImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    jobTitle: {
        fontWeight: "700",
        fontSize: 16,
    },
    jobCompany: {
        fontSize: 14,
        color: "#555",
    },
    jobMetaRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginTop: 4,
    },
    jobMeta: {
        fontSize: 12,
        color: "#777",
    },
    categoryIcon: {
        width: 16,
        height: 16,
        resizeMode: "contain",
    },
    salary: {
        fontSize: 16,
        fontWeight: "700",
        color: COLORS.primary,
    },
    jobDescription: {
        fontSize: 13,
        color: COLORS.text,
        marginTop: 8,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        marginTop: 8,
    },
    button: {
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        flex: 1,
    },
    detailsButton: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        backgroundColor: "transparent",
    },
    applyButton: {
        backgroundColor: COLORS.primary,
    },
    buttonText: {
        fontWeight: "600",
        textAlign: "center",
    },
    searchWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        marginVertical: 20,
        marginHorizontal: "auto",
        justifyContent: "space-between",
        gap: 25,
    },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 12,
        height: 50,
        gap: 6,
        borderColor: "#ADADAD",
        borderWidth: 1,
        width: 600,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: COLORS.text,
        fontWeight: "400",
        paddingHorizontal: 10,
    },
    filterButton: {
        marginLeft: 8,
        borderWidth: 1,
        borderColor: "#ADADAD",
        borderRadius: 12,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default JobOffersPage;
