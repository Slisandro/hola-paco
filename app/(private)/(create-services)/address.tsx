import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
    primary: "#50B4E8",
    accent: "#FFC356",
    text: "#000",
    gray: "#D5D5D5",
    lightGray: "#F5F5F5",
};

const mockAddresses = [
    { id: "1", title: "N-35 Karakoram Hwy", subtitle: "Madina Colony Dub 2, Mansehra" },
    { id: "2", title: "N-35 Karakoram Hwy", subtitle: "Madina Colony Dub 2, Mansehra" },
    { id: "3", title: "N-35 Karakoram Hwy", subtitle: "Madina Colony Dub 2, Mansehra" },
];

const Address = () => {
    const router = useRouter();

    const handleGoBack = () => router.push("/(private)/(create-services)/create-service");
    const handleToMap = () => router.push("/(private)/(create-services)/Map")

    const handleSelectAddress = (item: any) => console.log("Seleccionado:", item);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <View style={styles.container}>

                <View style={styles.header}>
                    <Pressable style={styles.backButton} onPress={handleGoBack}>
                        <Ionicons name="arrow-back" size={24} color="#000" />
                    </Pressable>

                    <Text style={styles.title}>Dirección</Text>

                    <View />
                </View>

                <View style={styles.viewContainer}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.inputWrapper}>
                            <Ionicons name="search-outline" size={20} color={COLORS.gray} />
                            <TextInput
                                style={styles.input}
                                placeholder="Introducir dirección"
                                placeholderTextColor={COLORS.gray}
                            />
                        </View>

                        <Pressable style={styles.mapOption} onPress={handleToMap}>
                            <Ionicons name="map-outline" size={20} color={COLORS.primary} />
                            <Text style={styles.mapText}>Elija en el mapa</Text>
                        </Pressable>

                        <FlatList
                            data={mockAddresses}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleSelectAddress(item)} style={styles.addressItem}>
                                    <Text style={styles.addressTitle}>{item.title}</Text>
                                    <Text style={styles.addressSubtitle}>{item.subtitle}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                    <Pressable style={styles.doneButton} onPress={handleGoBack}>
                        <Text style={styles.doneText}>Hecho</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff"
    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
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
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.lightGray,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 12,
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 16,
        color: COLORS.text,
    },
    viewContainer: {
        flex: 1,
        height: "100%",
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
        justifyContent: "space-between",
    },
    mapOption: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        marginVertical: 10
    },
    mapText: {
        color: COLORS.primary,
        fontSize: 16,
        marginLeft: 6,
    },
    addressItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    addressTitle: {
        fontSize: 16,
        color: COLORS.text,
        fontWeight: "500",
    },
    addressSubtitle: {
        fontSize: 14,
        color: "#666",
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

export default Address;
