import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function BannerDiagonal() {
  const screenWidth = Dimensions.get("window").width;

  // Breakpoints
  const isMobile = screenWidth < 600;
  const isTablet = screenWidth >= 600 && screenWidth < 1024;

  // Altura adaptable
  const bannerHeight = isMobile ? 220 : isTablet ? 260 : 220;

  return (
    <View style={[styles.container, { height: bannerHeight }]}>
      {/* Fondo degradado naranja */}
      <LinearGradient
        colors={["#FFB87A", "#FF8C42"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.orangeBg}
      />

      {/* Fondo degradado azul en diagonal */}
      <LinearGradient
        colors={["#004F8A", "#007ACC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          styles.blueBg,
          { transform: [{ skewX: isMobile ? "10deg" : "15deg" }] },
        ]}
      />

      {/* Contenido */}
      <View
        style={[
          styles.content,
          { paddingHorizontal: isMobile ? 20 : isTablet ? 40 : 80 },
        ]}
      >
        {/* Imagen del personaje */}
        <Image
          source={require("@/assets/images/homepage/paco-agendar.png")}
          style={[
            styles.image,
            {
              width: isMobile ? 140 : isTablet ? 200 : 260,
              height: isMobile ? 140 : isTablet ? 200 : 260,
              left: isMobile ? 20 : isTablet ? 40 : 60,
              bottom: isMobile ? -20 : 0,
            },
          ]}
        />

        {/* Texto */}
        <View
          style={[
            styles.textContainer,
            {
              alignItems: "center",
              justifyContent: "center",
              width: isMobile ? "90%" : isTablet ? "70%" : "60%",
              marginLeft: isMobile ? "auto" : "auto",
              marginRight: isMobile ? "auto" : "auto",
            },
          ]}
        >
          <Text
            style={[
              styles.title,
              {
                fontSize: isMobile ? 16 : isTablet ? 18 : 26,
                lineHeight: isMobile ? 22 : isTablet ? 26 : 30,
                textAlign: "center",
                maxWidth: "90%",
                textTransform: "uppercase",
              },
            ]}
          >
            AGENDA HOY TU SERVICIO DOMÉSTICO Y DISFRUTA DE UN HOGAR IMPECABLE
            SIN PREOCUPACIONES.
          </Text>

          <Pressable
            style={[
              styles.button,
              {
                alignSelf: "center",
                paddingHorizontal: isMobile ? 14 : 20,
                paddingVertical: isMobile ? 8 : 10,
                marginTop: 20,
              },
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  fontSize: isMobile ? 12 : 20,
                  textTransform: "uppercase",
                },
              ]}
            >
              AGENDA TU SERVICIO AHORA
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    overflow: "visible",
    flexDirection: "row",
    backgroundColor: "#007ACC",
  },
  orangeBg: {
    flex: 1,
  },
  blueBg: {
    flex: 1.8,
    marginLeft: -120,
  },
  content: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  image: {
    position: "absolute",
    zIndex: 10,
    resizeMode: "contain",
  },
  textContainer: {
    zIndex: 11,
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  button: {
    backgroundColor: "#FFB87A",
    marginTop: 14,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});
