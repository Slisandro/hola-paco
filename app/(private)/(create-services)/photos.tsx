import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = {
    primary: "#50B4E8",
    accent: "#FFC356",
    text: "#000",
    gray: "#D5D5D5",
    lightGray: "#F5F5F5",
};

const mockPhotos = [
    { id: "1", uri: "https://via.placeholder.com/150", progress: 100 },
    { id: "2", uri: "https://via.placeholder.com/150", progress: 60 },
    { id: "3", uri: "https://via.placeholder.com/150", progress: 60 },
    { id: "4", uri: "https://via.placeholder.com/150", progress: 90 },
    { id: "5", uri: "https://via.placeholder.com/150", progress: 60 },
];

const Photos = () => {
    const router = useRouter();
    const handleGoBack = () => router.push("/(private)/(create-services)/create-service");
    const handleRemove = (id: string) => null;

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Pressable style={styles.backButton} onPress={handleGoBack}>
                        <Ionicons name="arrow-back" size={24} color="#000" />
                    </Pressable>

                    <Text style={styles.title}>Solicitar servicio</Text>

                    <View />
                </View>

                <View style={styles.viewContainer}>

                    <View style={styles.uploadBox}>
                        <Ionicons name="cloud-upload-outline" size={40} color={COLORS.gray} />
                        <Text style={styles.uploadText}>Arrastra las imágenes aquí o</Text>
                        <Pressable style={styles.uploadButton}>
                            <Text style={styles.uploadButtonText}>Subir imágenes</Text>
                        </Pressable>
                    </View>

                    <FlatList
                        data={mockPhotos}
                        keyExtractor={(item) => item.id}
                        numColumns={3}
                        contentContainerStyle={styles.grid}
                        renderItem={({ item }) => (
                            <View style={styles.photoWrapper}>
                                <Image source={{ uri: item.uri }} style={styles.photo} />

                                <View style={styles.progressBar}>
                                    <View
                                        style={[styles.progressFill, { width: `${item.progress}%` }]}
                                    />
                                </View>

                                <Pressable
                                    style={styles.removeButton}
                                    onPress={() => handleRemove(item.id)}
                                >
                                    <Ionicons name="close" size={16} color="#fff" />
                                </Pressable>
                            </View>
                        )}
                    />

                    <Text style={styles.hint}>
                        JPG o PNG hasta 10 MB • Hasta 8 fotos
                    </Text>

                    <View style={styles.footer}>
                        <Pressable style={styles.doneButton} onPress={handleGoBack}>
                            <Text style={styles.doneText}>Hecho</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 10,
    },
    header: {
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    backButton: {
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    title: {
        fontFamily: "DM Sans",
        fontWeight: "800",
        fontSize: 25,
        lineHeight: 40,
        textAlign: "center",
        textAlignVertical: "center",
    },
    viewContainer: {
        flex: 1,
        height: "100%",
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
        justifyContent: "space-between",
        gap: 10
    },
    uploadBox: {
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderStyle: "dashed",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        marginHorizontal: 20,
    },
    uploadText: {
        marginVertical: 10,
        color: COLORS.text,
    },
    uploadButton: {
        backgroundColor: COLORS.lightGray,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 5,
    },
    uploadButtonText: {
        color: COLORS.text,
        fontWeight: "600",
    },
    grid: {
        padding: 10,
    },
    photoWrapper: {
        flex: 1 / 3,
        margin: 5,
        position: "relative",
    },
    photo: {
        width: "100%",
        aspectRatio: 1,
        borderRadius: 8,
    },
    progressBar: {
        height: 5,
        backgroundColor: COLORS.gray,
        borderRadius: 3,
        marginTop: 4,
    },
    progressFill: {
        height: 5,
        backgroundColor: COLORS.primary,
        borderRadius: 3,
    },
    removeButton: {
        position: "absolute",
        top: 5,
        right: 5,
        backgroundColor: "rgba(0,0,0,0.6)",
        borderRadius: 10,
        padding: 2,
    },
    footer: {
        paddingHorizontal: 20,
        gap: 10,
    },
    hint: {
        textAlign: "center",
        color: COLORS.text,
    },
    doneButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 14,
        marginTop: 16,
    },
    doneText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    }
});

export default Photos;
