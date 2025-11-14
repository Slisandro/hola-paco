import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { useRouter } from "expo-router";
import React from "react";

import { Pressable, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";

const COLORS = {
  background: "#D9D9D9",
  text: "#000",
  primary: "#50B4E8",
  accent: "#FF8C42",
};

const sections = [
  [
    { label: "Explora" },
    { label: "Cómo funciona" },
    { label: "Dónde estamos" },
    { label: "Profesionales de confianza" },
    { label: "Reseñas" },
    { label: "Preguntas frecuentes" },
    { label: "Mapa del sitio" },
    { label: "Blog" },
  ],
  [
    { label: "Legal" },
    { label: "Términos y condiciones" },
    { label: "Política de Privacidad" },
    { label: "Terminos y condiciones para prestadores de servicios" },
    { label: "Política de Cookies" },
    { label: "Libro de reclamaciones" },
  ],

];

const popular_1 = [
  { label: "Montaje" },
  { label: "Belleza" },
  { label: "Limpieza" },
  { label: "Decoración" },
  { label: "Eficiencia energética" },
  { label: "Jardinería" }
]

const popular_2 = [
  { label: "Instalación" },
  { label: "Lavandería" },
  { label: "Mantenimiento" },
  { label: "Mudanzas" },
  { label: "Reparación" },
  { label: "Limpieza de tapicería" }
]

const cities = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza", "Malaga", "Murcia"]

function RightSection() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  // BREAKPOINTS
  const isMobile = width < 600;
  const isTablet = width >= 600 && width < 900;
  const isDesktop = width >= 900;

  // COLUMN WIDTHS
  const columnWidth = isMobile ? "100%" : isTablet ? "45%" : "22%";

  return (
    <View
      style={[
        styles.rightContainer,
        {
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 30 : 20,
        },
      ]}
    >
      {sections.map((section, index) => (
        <View key={index} style={{ width: columnWidth, gap: 6 }}>
          {section.map((item, idx) => (
            // @ts-expect-error
            <Pressable key={idx} onPress={() => router.push(item.path)}>
              <Text
                style={[
                  styles.link,
                  idx === 0 && styles.linkTitle,
                  isMobile && { fontSize: 15 },
                ]}
              >
                {item.label}
              </Text>
            </Pressable>
          ))}
        </View>
      ))}

      {/* SERVICIOS POPULARES */}
      <View style={{ width: columnWidth, gap: 10 }}>
        <Text style={styles.linkTitle}>Nuestros Servicios más solicitados</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ gap: 4 }}>
            {popular_1.map((item, idx) => (
              // @ts-expect-error
              <Pressable key={idx} onPress={() => router.push(item.path)}>
                <Text style={styles.link}>{item.label}</Text>
              </Pressable>
            ))}
          </View>

          <View style={{ gap: 4 }}>
            {popular_2.map((item, idx) => (
              // @ts-expect-error
              <Pressable key={idx} onPress={() => router.push(item.path)}>
                <Text style={styles.link}>{item.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>

      {/* CIUDADES */}
      <View style={{ width: columnWidth, gap: 6 }}>
        <Text style={styles.linkTitle}>Ciudades populares</Text>
        {cities.map((item, idx) => (
          <Pressable key={idx}>
            <Text style={styles.link}>{item}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rightContainer: {
    width: "100%",
    paddingVertical: 20,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  link: {
    fontSize: 14,
    marginBottom: 4,
    color: "#333",
  },
  linkTitle: {
    fontSize: 16,
    color: "#004F8A",
    fontWeight: "600",
    marginBottom: 6,
  },
  container: {
    backgroundColor: "white",
    padding: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
});


const Footer = () => {
  return (
    <View style={styles.container}>
      <RightSection />
      <FooterSection />
    </View>
  );
};

export default Footer;


function FooterSection() {
  const { width } = useWindowDimensions();

  const isMobile = width < 600;
  const isTablet = width >= 600 && width < 900;
  const isDesktop = width >= 900;

  return (
    <View
      style={[
        stylesFooter.container,
        {
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 20 : 0,
        },
      ]}
    >
      {/* LEFT SIDE */}
      <View
        style={[
          stylesFooter.left,
          {
            width: isMobile ? "100%" : isTablet ? "50%" : "50%",
          },
        ]}
      >
        <Text style={stylesFooter.title}>HOLA PACO</Text>

        <View style={stylesFooter.row}>
          <Text style={stylesFooter.info}>España</Text>
          <Text style={stylesFooter.dot}>•</Text>
          <Text style={stylesFooter.info}>© 2055 Hola Paco</Text>
          <Text style={stylesFooter.dot}>•</Text>
          <Text style={stylesFooter.info}>Tós rengievo</Text>
        </View>

        <Text style={stylesFooter.copy}>
          © 2025 Hola Paco | Todos los derechos reservados
        </Text>
      </View>

      {/* RIGHT SIDE */}
      <View
        style={[
          stylesFooter.right,
          {
            width: isMobile ? "100%" : isTablet ? "50%" : "45%",
            justifyContent: isMobile ? "flex-start" : "flex-end",
          },
        ]}
      >
        <TouchableOpacity
          style={[
            stylesFooter.downloadBtn,
            { alignSelf: isMobile ? "flex-start" : "auto" },
          ]}
        >
          <Text style={stylesFooter.downloadText}>
            Descarga la app de Hola Paco
          </Text>
        </TouchableOpacity>

        <View
          style={[
            stylesFooter.socialRow,
            {
              marginLeft: isMobile ? 0 : 10,
              alignSelf: isMobile ? "flex-start" : "center",
            },
          ]}
        >
          <FontAwesome5 name="tiktok" size={24} color="black" />
          <Entypo name="instagram" size={24} color="black" />
          <FontAwesome name="facebook-square" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const stylesFooter = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  /* LEFT */
  left: {
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0B1A2A",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 6,
  },
  info: {
    color: "#4A4A4A",
    marginRight: 6,
  },
  dot: {
    color: "#4A4A4A",
    marginHorizontal: 6,
  },
  copy: {
    color: "#666",
    marginTop: 4,
  },

  /* RIGHT */
  right: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
  },

  downloadBtn: {
    backgroundColor: "#FFB84D",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  downloadText: {
    color: "#0B1A2A",
    fontWeight: "600",
  },

  socialRow: {
    flexDirection: "row",
    gap: 10,
  },
});
