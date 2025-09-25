import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const COLORS = {
    background: "#D9D9D9",
    text: "#000",
    primary: "#50B4E8",
    accent: "#FF8C42",
};

const sections = [
  [
    { label: "Sobre nosotros", path: "/about-us" },
    { label: "Contacto", path: "/contact" },
    { label: "Preguntas frecuentes", path: "/faq" },
    { label: "Empresas de limpieza", path: "/cleaning-companies" },
    { label: "Testimonios", path: "/testimonials" },
    { label: "Trabaja con nosotros", path: "/jobs" },
    { label: "Mapa del sitio", path: "/sitemap" },
    { label: "Blog", path: "/blog" },
  ],
  [
    { label: "Todos los servicios", path: "/(web)/services" },
    { label: "Personal de limpieza", path: "/(web)/cleaning-staff" },
    { label: "Limpieza general", path: "/(web)/general-cleaning" },
    { label: "Limpieza después de obra", path: "/(web)/post-construction" },
    { label: "Limpieza de fin de arrendamiento", path: "/(web)/end-of-lease" },
    { label: "Limpieza de tapicería y alfombras", path: "/(web)/upholstery" },
    { label: "Limpieza de ventanas", path: "/(web)/window-cleaning" },
    { label: "Limpieza de hornos y frigoríficos", path: "/(web)/kitchen-appliances" },
    { label: "Limpieza de baños", path: "/(web)/bathroom-cleaning" },
  ],
  [
    { label: "Condiciones de uso", path: "/(web)/terms" },
    { label: "Condiciones cliente y contratista", path: "/(web)/terms-client" },
    { label: "Política de confidencialidad", path: "/(web)/confidentiality" },
    { label: "Política de privacidad", path: "/(web)/privacy" },
    { label: "Política de cookies", path: "/(web)/cookies" },
    { label: "Política de cancelación", path: "/(web)/cancellation" },
  ],
];

function RightSection() {
  const router = useRouter();

  return (
    <View style={styles.rightSection}>
      {sections.map((section, index) => (
        <View key={index} style={{ gap: 4 }}>
          {section.map((item, idx) => (
            // @ts-expect-error
            <Pressable key={idx} onPress={() => router.push(item.path)}>
              <Text style={styles.link}>{item.label}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
}


const Footer = () => {
    return (
        <View style={styles.container}>

            <View style={styles.leftSection}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require("@/assets/images/logo.png")}
                        style={styles.logo}
                    />
                    <Text style={styles.logoText}>
                        <Text style={{ color: "#50B4E8" }}>Hola Paco</Text>
                    </Text>
                </View>

                <Pressable style={styles.whatsappButton}>
                    <Ionicons name="logo-whatsapp" size={26} color="#fff" />
                    <Text style={styles.whatsappText}>+34 123 345 678</Text>
                </Pressable>

                <Text style={styles.contact}>Lun - Vie 9:00 - 18:00</Text>
                <Text style={styles.contact}>info@holapaco.es</Text>
                <Text style={styles.contact}>
                    Calle de Madrid 25, Madrid, M 28001
                </Text>
            </View>

            <RightSection />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 20
    },
    leftSection: {
        flex: 1,
        marginBottom: 20,
        justifyContent: "space-between",
        gap: 10,
        paddingHorizontal: 20
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    logo: {
        width: 55,
        height: 50,
        resizeMode: "contain",
    },
    logoText: {
        fontSize: 26,
        fontWeight: "bold",
    },
    rightSection: {
        paddingVertical: 15,
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    whatsappButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.accent,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 6,
        marginBottom: 10,
        alignSelf: "flex-start",
    },
    whatsappText: {
        color: "#fff",
        marginLeft: 8,
        fontWeight: "bold",
        fontSize: 20
    },
    contact: {
        fontSize: 13,
        // marginBottom: 4,
        color: COLORS.primary,
    },
    link: {
        fontSize: 10,
        marginBottom: 4,
        color: COLORS.text,
    },
});

export default Footer;
