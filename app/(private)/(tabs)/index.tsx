import { HelloWave } from '@/components/hello-wave';
import { useAccount } from '@/contexts/AccountContext';
import { Image, ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const COLORS = {
  primary: "#50B4E8",
  accent: "#FFA962",
  text: "#000",
};

const ITEMS = [
  { name: "Fontanería", icon: require("@/assets/icons/services/fontaneria.png") },
  { name: "Limpieza", icon: require("@/assets/icons/services/limpieza.png") },
  { name: "Electricista", icon: require("@/assets/icons/services/electricista.png") },
  { name: "Carpintería", icon: require("@/assets/icons/services/carpinteria.png") },
  { name: "Montaje", icon: require("@/assets/icons/services/montaje.png") },
  { name: "Jardinería", icon: require("@/assets/icons/services/jardineria.png") },
];

const POPULAR = [
  {
    name: "Limpieza de alfombras",
    description: "Servicio de lavado profesional",
    icon: require("@/assets/images/services/services.png")
  },
  {
    name: "Limpieza de alfombras",
    description: "Servicio de lavado profesional",
    icon: require("@/assets/images/services/services.png")
  },
  {
    name: "Limpieza de alfombras",
    description: "Servicio de lavado profesional",
    icon: require("@/assets/images/services/services.png")
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const { accountType } = useAccount()
  const [selected] = useState<number>(0);

  const handleToOffert = (index: number) => accountType === "profesional"
    ? router.push("/(private)/(services)/offers")
    : router.push("/(private)/(services)/professional")

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          {/* Perfil */}
          <View style={styles.headerWrapper}>
            <ImageBackground
              source={{ uri: "https://i.pravatar.cc/100" }}
              style={styles.profileImage}
              imageStyle={{ borderRadius: 60 }}
            />
            <Text style={styles.headerTitle}>
              Hola Jose <HelloWave />
            </Text>
          </View>

          {/* Bloque de bienvenida */}
          <View style={styles.welcomeBox}>
            <Text style={styles.heading}>HolaPaco</Text>
            <Text style={styles.subheading}>¿En qué podemos ayudarte hoy?</Text>
          </View>
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.title}>Servicios</Text>

          {/* Grid de servicios */}
          <View style={styles.grid}>
            {ITEMS.map((item, index) => {
              const isSelected = selected === index;
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.itemBox}
                  onPress={() => handleToOffert(index)}
                >
                  <ImageBackground
                    source={item.icon}
                    style={styles.itemImage}
                    imageStyle={{ borderRadius: 12 }}
                    contentFit="cover"
                  >
                    <View style={[styles.overlay, isSelected && { backgroundColor: 'rgba(255,165,98,0.4)' }]} />
                    <Text style={styles.itemText}>{item.name}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              )
            })}
          </View>

          {/* Slider horizontal de servicios populares */}
          <Text style={styles.title}>Servicios Populares</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToAlignment="center"
            decelerationRate="fast"
            style={{ paddingBottom: 20 }}
          >
            {POPULAR.map((service, index) => (
              <TouchableOpacity key={index} style={[styles.popularCard, { width: SCREEN_WIDTH * .9, marginRight: 20, flexDirection: "row", gap: 15 }]}>
                <View style={{ width: SCREEN_WIDTH * .9 * .5, alignItems: "center", justifyContent: "center" }}>
                  <Image source={service.icon} style={styles.popularIcon} />
                </View>
                <View style={{ width: SCREEN_WIDTH * .9 * .5 }}>
                  <Text style={styles.popularText}>{service.name}</Text>
                  <Text style={styles.popularDescription}>{service.description}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, backgroundColor: "transparent", marginBottom: 50 },
  headerContainer: { backgroundColor: COLORS.primary, paddingTop: 12, paddingHorizontal: 12, gap: 15 },
  headerWrapper: { flexDirection: "row", alignItems: "center", marginVertical: 10, paddingHorizontal: 10, gap: 15 },
  profileImage: { width: 50, height: 50 },
  headerTitle: { fontFamily: "DM Sans", fontWeight: "800", fontSize: 24, lineHeight: 28, color: COLORS.text },
  welcomeBox: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginHorizontal: 10
  },
  heading: { fontFamily: "DM Sans", fontWeight: "800", fontSize: 32, lineHeight: 40, color: COLORS.text },
  subheading: { fontFamily: "DM Sans", fontWeight: "700", fontSize: 20, lineHeight: 22, color: COLORS.text },
  title: { fontFamily: "DM Sans", fontWeight: "800", fontSize: 20, lineHeight: 40, color: "#000", marginTop: 12 },
  bodyContainer: { paddingTop: 12, paddingHorizontal: 12 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  itemBox: { width: "30%", aspectRatio: 1, borderRadius: 12, overflow: 'hidden', marginBottom: 8 },
  itemImage: { flex: 1, justifyContent: "center", alignItems: "center" },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.25)", borderRadius: 12 },
  itemText: { position: "absolute", color: "#fff", fontWeight: "700", textAlign: "center", zIndex: 2, fontSize: 14, paddingHorizontal: 4, bottom: 15 },
  popularCard: {
    backgroundColor: "transparent",
    borderRadius: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  popularIcon: {
    width: 150,
    height: 150,
    marginBottom: 10,
    resizeMode: "contain"
  },
  popularText: {
    fontFamily: "DM Sans",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0,
    textAlignVertical: "center",
    color: "#000",
  },
  popularDescription: {
    fontFamily: "DM Sans",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0,
    textAlignVertical: "center",
    color: "#000",
  },
});
