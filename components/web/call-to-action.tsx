import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const COLORS = {
    primary: "#50B4E8",
    textLight: "#fff",
    accent: "#FFC356",
};

const CallToAction = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                ¿LISTO PARA EMPEZAR?{"\n"}
                EMPIEZA TU PRUEBA GRATUITA HOY MISMO.
            </Text>

            <View style={styles.buttons}>
                <Pressable style={styles.buttonSecondary}>
                    <Text style={styles.buttonSecondaryText}>Ver documentos</Text>
                </Pressable>

                <Pressable style={styles.buttonPrimary}>
                    <Text style={styles.buttonPrimaryText}>Comenzar</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: COLORS.textLight,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    buttons: {
        flexDirection: "row",
        gap: 10,
    },
    buttonPrimary: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonPrimaryText: {
        color: COLORS.primary,
        fontWeight: "bold",
    },
    buttonSecondary: {
        borderWidth: 1,
        borderColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonSecondaryText: {
        color: "#fff",
    },
});

export default CallToAction;
