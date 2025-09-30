import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Pressable, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
    const router = useRouter();

    const handleGoBack = () => router.push("/(private)/(tabs)/profile");

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <Pressable style={styles.backButton} onPress={handleGoBack}>
                <Ionicons name="arrow-back" size={24} color="#000" />
            </Pressable>

            <View style={styles.container}>
                {/* Imagen de perfil */}
                <View style={styles.profileImageWrapper}>
                    <Image
                        source={{ uri: "https://i.pravatar.cc/100" }}
                        style={styles.profileImage}
                        contentFit="contain"
                    />
                </View>

                {/* Botón cambiar fondo */}
                <TouchableOpacity style={styles.changeBgButton}>
                    <Text style={styles.changeBgText}>Cambiar</Text>
                </TouchableOpacity>

                {/* Lista de items */}
                <View style={styles.itemsContainer}>
                    <ProfileItem label="Nombre" value="Juan Perez" />
                    <ProfileItem label="Email" value="juanperez@mail.com" />
                    <ProfileItem label="Teléfono" value="+34 600 123 456" />
                    <ProfileItem label="Método de pago predeterminado" value={
                        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                            <Text style={styles.itemValue}>VISA</Text>
                            <Ionicons name="chevron-forward" size={20} color="#000" />
                        </View>
                    } />
                    <ProfileItem
                        label="Cupones y crédito"
                        value={<Switch value={true} />}
                    />
                    <ProfileItem
                        label="Editar perfil"
                        value={<Ionicons name="chevron-forward" size={20} color="#000" />}
                    />
                    <ProfileItem
                        label="Eliminar cuenta"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const ProfileItem = ({ label, value }: { label: string, value?: any }) => (
    <View style={styles.itemRow}>
        <Text style={styles.itemLabel}>{label}</Text>
        {typeof value === "string" ? (
            <Text style={styles.itemValue}>{value}</Text>
        ) : (
            value
        )}
    </View>
);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: "#F3F5FD",
    },
    backButton: {
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    profileImageWrapper: {
        alignItems: "center",
        marginVertical: 10,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "#50B4E8",
    },
    changeBgButton: {
        backgroundColor: "#50B4E8",
        paddingVertical: 10,
        borderRadius: 12,
        alignItems: "center",
        width: "50%",
        marginBottom: 10,
        marginHorizontal: "auto"
    },
    changeBgText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
    itemsContainer: {
        gap: 16,
    },
    itemRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10
    },
    itemLabel: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
    },
    itemValue: {
        fontSize: 16,
        color: "#555",
    },
});

export default Profile;
