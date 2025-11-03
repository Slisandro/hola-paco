import React from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function BannerDiagonal() {
  const screenWidth = Dimensions.get("window").width;

  // Breakpoints
  const isMobile = screenWidth < 600;
  const isTablet = screenWidth >= 600 && screenWidth < 1024;

  // Altura adaptable
  const bannerHeight = isMobile ? 220 : isTablet ? 260 : 220;

  return (
    <View style={[styles.container, { height: bannerHeight }]}>
      {/* Fondos diagonales */}
      <View style={styles.orangeBg} />
      <View
        style={[
          styles.blueBg,
          { transform: [{ skewX: isMobile ? "10deg" : "15deg" }] },
        ]}
      />

      {/* Contenido principal */}
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
              marginLeft: isMobile ? "35%" : isTablet ? "32%" : "30%",
              width: isMobile ? "60%" : isTablet ? "55%" : "50%",
              alignItems: isMobile ? "center" : "flex-start",
            },
          ]}
        >
          <Text
            style={[
              styles.title,
              {
                fontSize: isMobile ? 16 : isTablet ? 18 : 22,
                lineHeight: isMobile ? 22 : isTablet ? 26 : 30,
                textAlign: isMobile ? "center" : "left",
                maxWidth: isMobile ? "100%" : 420,
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
                alignSelf: isMobile ? "center" : "flex-start",
                paddingHorizontal: isMobile ? 14 : 20,
                paddingVertical: isMobile ? 8 : 10,
              },
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                { fontSize: isMobile ? 12 : 13 },
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
    backgroundColor: "#FF9E5E",
  },
  blueBg: {
    flex: 1.8,
    backgroundColor: "#007ACC",
    marginLeft: -120,
  },
  content: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
    flex: 1,
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
