import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
    primary: "#50B4E8",
    accent: "#FFC356",
    text: "#000",
    gray: "#D5D5D5",
    lightGray: "#F5F5F5",
};

const Payment = () => {
    const router = useRouter();
    const handleGoBack = () => router.push("/(private)/(create-services)/create-service");

    const [type, setType] = useState("boleta"); // boleta | factura
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleAddService = () => {
        if (!termsAccepted) {
            alert("Debes aceptar los términos y condiciones");
            return;
        }
        // enviar datos
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <View style={styles.container}>

                <View style={styles.header}>
                    <Pressable style={styles.backButton} onPress={handleGoBack}>
                        <Ionicons name="arrow-back" size={24} color="#000" />
                    </Pressable>

                    <Text style={styles.title}>Datos de facturación</Text>
                    <View />
                </View>

                <View style={styles.viewContainer}>
                    <View style={styles.container}>
                        <View style={styles.row}>
                            <Pressable style={styles.radio} onPress={() => setType("boleta")}>
                                <View style={[styles.circle, type === "boleta" && styles.checked]} />
                                <Text style={styles.radioLabel}>Boleta</Text>
                            </Pressable>
                            <Pressable style={styles.radio} onPress={() => setType("factura")}>
                                <View style={[styles.circle, type === "factura" && styles.checked]} />
                                <Text style={styles.radioLabel}>Factura</Text>
                            </Pressable>
                        </View>

                        <TextInput
                            style={styles.input}
                            placeholder="Razón social"
                            placeholderTextColor={COLORS.gray}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="RUC/DNI"
                            placeholderTextColor={COLORS.gray}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Dirección fiscal"
                            placeholderTextColor={COLORS.gray}
                        />

                        <Pressable
                            style={styles.radio}
                            onPress={() => setTermsAccepted(!termsAccepted)}
                        >
                            <View style={[styles.circle, termsAccepted && styles.checked]} />
                            <Text style={styles.radioLabel}>Aceptar los términos y condiciones</Text>
                        </Pressable>
                    </View>

                    <Pressable style={styles.button} onPress={handleAddService}>
                        <Text style={styles.buttonText}>Añadir servicio</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  backButton: {
    height: 40,
    justifyContent: "center",
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
  },
  viewContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: COLORS.primary,
    marginRight: 8,
  },
  checked: {
    backgroundColor: COLORS.primary,
  },
  radioLabel: {
    fontSize: 15,
    color: COLORS.text,
  },
  input: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});


export default Payment