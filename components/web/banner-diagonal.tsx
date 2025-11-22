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

  return (
    // @ts-expect-error
    <View style={[styles.container, { height: isMobile ? "20vh" : "30vh" }]}>
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
          { paddingHorizontal: isMobile ? 0 : isTablet ? 40 : 80 },
        ]}
      >
        {/* Imagen del personaje */}
        <Image
          source={require("@/assets/images/homepage/paco-agendar.png")}
          style={[
            styles.image,
            {
              width: "100%",
              maxWidth: "30%",
              maxHeight: "100%",
              left: isMobile ? "0%" : isTablet ? "15%" : "10%",
              bottom: -10,
              // marginTop: "auto"
            },
          ]}
        />

        {/* Texto */}
        <View
          style={[
            styles.textContainer,
            {
              marginRight: isMobile ? "2%" : isTablet ? "10%" : "12%",
              width: isMobile ? "70%" : isTablet ? "58%" : "50%",
              marginLeft: "auto",
              alignItems: isMobile ? "center" : "flex-start",
            },
          ]}
        >
          <Text
            style={[
              styles.title,
              {
                fontSize: isMobile ? 16 : isTablet ? 18 : 26,
                lineHeight: isMobile ? 18 : isTablet ? 26 : 30,
                textAlign: isMobile ? "center" : "right",
                maxWidth: "100%",
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
                alignSelf: isMobile ? "center" : "flex-end",
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
                  fontSize: isMobile ? 12 : 16,
                  textTransform: "uppercase",
                  color: "white",
                  margin: 4
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

  /* Content sits above the backgrounds */
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
    // zIndex: 20,
    resizeMode: "contain",
    // sombra sutil (iOS/Android)
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.15,
    // shadowRadius: 8,
    // elevation: 6,
  },

  textContainer: {
    // flex: 1,
    zIndex: 30,
  },

  title: {
    color: "#fff",
    fontWeight: "800",
  },

  button: {
    backgroundColor: "#FFB87A",
    marginTop: 14,
    borderRadius: 8,
  },

  buttonText: {
    color: "#0B1A2A",
    fontWeight: "800",
  },
});
