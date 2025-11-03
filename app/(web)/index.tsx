import FAQSection from '@/components/web/faq'
import Footer from '@/components/web/footer'
import Header from '@/components/web/header'
import HeroSection from '@/components/web/hero-section'
import ServiceInfo from '@/components/web/service-info'
import { useSplashAnimation } from '@/hooks/useSplashAnimation'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import React, { useState } from 'react'
import { Animated, Dimensions, Platform, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Index = () => {
  const { isReady } = useSplashAnimation();

  const [windowHeight, setWindowHeight] = React.useState<number | null>(null);

  React.useEffect(() => {
    const { height } = Dimensions.get("window");
    setWindowHeight(height);
  }, []);

  if (!isReady) {
    return (
      <Splash />
    );
  }

  return (
    <ScrollView>
      <Header />
      <HeroSection />
      <ServiceInfo />
      <BannerDiagonalReverse />
      <FeaturesSection2 />
      <BannerDiagonal />
      <Servicios />
      <View
        // @ts-expect-error
        style={{
          width: "100%",
          height: Platform.OS === "web" ? "100vh" : 220,
          backgroundColor: "#000",
        }}
      >
        <iframe
          style={{ width: "100%", height: "100%" }}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1"
          frameBorder="0"
          allowFullScreen
        />
      </View>
      <Reviews />
      <FAQSection />
      <BannerDiagonalReverse2 />
      <Footer />
    </ScrollView>
  )
}

function Splash() {
  const { opacity } = useSplashAnimation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#50B4E8",
      }}
    >
      <Animated.Image
        source={require("@/assets/images/logo.png")}
        style={{
          opacity,
          width: 240,
          height: 230,
          resizeMode: "contain",
        }}
      />
    </View>
  );
}


function BannerDiagonal() {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={stylesBanner.container}>
      {/* Fondos superpuestos */}
      <View style={stylesBanner.orangeBg} />
      <View style={stylesBanner.blueBg} />

      {/* Contenido principal */}
      <View style={stylesBanner.content}>
        {/* Imagen del personaje */}
        <Image
          source={require("@/assets/images/homepage/paco-agendar.png")}
          style={[
            stylesBanner.image,
            {
              width: screenWidth > 900 ? 260 : 150,
              height: screenWidth > 900 ? 260 : 150,
              left: screenWidth > 900 ? 60 : 20,
              bottom: screenWidth > 900 ? 0 : -20,
            },
          ]}
          contentFit="contain"
        />

        {/* Texto */}
        <View style={stylesBanner.textContainer}>
          <Text style={stylesBanner.title}>
            AGENDA HOY TU SERVICIO DOMÉSTICO Y DISFRUTA DE UN HOGAR IMPECABLE
            SIN PREOCUPACIONES.
          </Text>

          <Pressable style={stylesBanner.button}>
            <Text style={stylesBanner.buttonText}>AGENDA TU SERVICIO AHORA</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const stylesBanner = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 200,
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
    transform: [{ skewX: "15deg" }],
    marginLeft: -200,
  },
  content: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    paddingHorizontal: 50,
  },
  image: {
    position: "absolute",
    zIndex: 10,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    marginLeft: "35%",
    width: "50%",
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 24,
    maxWidth: 600,
  },
  button: {
    backgroundColor: "#FFB87A",
    marginTop: 14,
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },
});

function BannerDiagonalReverse() {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={stylesBannerReverse.container}>
      {/* Fondos superpuestos */}
      <View style={stylesBannerReverse.orangeBg} />
      <View style={stylesBannerReverse.blueBg} />

      {/* Contenido principal */}
      <View style={stylesBannerReverse.content}>
        {/* Imagen del personaje */}
        <Image
          source={require("@/assets/images/homepage/paco-download.png")}
          style={[
            stylesBannerReverse.image,
            {
              width: screenWidth > 900 ? 260 : 150,
              height: screenWidth > 900 ? 260 : 150,
              right: screenWidth > 900 ? 300 : 100,
              bottom: screenWidth > 900 ? 0 : -20,
            },
          ]}
          contentFit="contain"
        />

        {/* Texto */}
        <View style={stylesBannerReverse.textContainer}>
          <Text style={stylesBannerReverse.title}>
            Descarga la app y vive la experiencia de un hogar impecable
          </Text>

          <Pressable style={stylesBannerReverse.button}>
            <Text style={stylesBannerReverse.buttonText}>AGENDA TU SERVICIO AHORA</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const stylesBannerReverse = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 200,
    overflow: "visible",
    flexDirection: "row",
    backgroundColor: "#FF9E5E",
  },
  orangeBg: {
    flex: 1,
    backgroundColor: "#007ACC",
  },
  blueBg: {
    flex: .3,
    backgroundColor: "#FF9E5E",
    transform: [{ skewX: "-15deg" }],
    marginLeft: -50,
  },
  content: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    paddingHorizontal: 50,
    zIndex: 100,
  },
  image: {
    position: "absolute",
    zIndex: 10,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    marginLeft: "20%",
    width: "50%",
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 24,
    maxWidth: 400,
    textTransform: "uppercase"
  },
  button: {
    backgroundColor: "#FFB87A",
    marginTop: 14,
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },
});


function BannerDiagonalReverse2() {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={stylesBannerReverse.container}>
      {/* Fondos superpuestos */}
      <View style={stylesBannerReverse.orangeBg} />
      <View style={stylesBannerReverse.blueBg} />

      {/* Contenido principal */}
      <View style={stylesBannerReverse.content}>
        {/* Imagen del personaje */}
        <Image
          source={require("@/assets/images/homepage/paco-apunta.png")}
          style={[
            stylesBannerReverse.image,
            {
              width: screenWidth > 900 ? 260 : 150,
              height: screenWidth > 900 ? 260 : 150,
              right: screenWidth > 900 ? 300 : 100,
              bottom: screenWidth > 900 ? 0 : -20,
            },
          ]}
          contentFit="contain"
        />

        {/* Texto */}
        <View style={stylesBannerReverse.textContainer}>
          <Text style={stylesBannerReverse.title}>
            Agenda hoy tu servicio doméstico y disfruta de un hogar impecable sin preocupaciones.
          </Text>

          <Pressable style={stylesBannerReverse.button}>
            <Text style={stylesBannerReverse.buttonText}>reservar tu servicio ahora</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const stylesBannerReverse2 = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 200,
    overflow: "visible",
    flexDirection: "row",
    backgroundColor: "#FF9E5E",
  },
  orangeBg: {
    flex: 1,
    backgroundColor: "#007ACC",
  },
  blueBg: {
    flex: .3,
    backgroundColor: "#FF9E5E",
    transform: [{ skewX: "-15deg" }],
    marginLeft: -50,
  },
  content: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    paddingHorizontal: 50,
    zIndex: 100,
  },
  image: {
    position: "absolute",
    zIndex: 10,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    marginLeft: "20%",
    width: "50%",
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 24,
    maxWidth: 400,
    textTransform: "uppercase"
  },
  button: {
    backgroundColor: "#FFB87A",
    marginTop: 14,
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },
});

const styles = StyleSheet.create({
  heading: {
    marginHorizontal: "auto",
    fontFamily: "DM Sans",
    fontWeight: "700",
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  section: {
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    padding: 20,
  },
})

function FeaturesSection2() {
  const [windowHeight, setWindowHeight] = React.useState<number | null>(null);

  React.useEffect(() => {
    const { height } = Dimensions.get("window");
    setWindowHeight(height);
  }, []);

  return (
    <View
      style={[
        stylesFeatureSection2.section,
        // @ts-ignore
        { minHeight: windowHeight ? windowHeight * 0.7 : "70vh" },
      ]}
    >
      <View style={{ marginTop: 30, gap: 20 }}>
        <Text
          style={[stylesFeatureSection2.heading, { fontSize: 28, color: "#000000" }]}
        >
          ¿Cómo funciona?
        </Text>
        <FeatureCards />
      </View>
    </View>
  );
}

function FeatureCards() {
  const features = [
    {
      id: 1,
      title: "SOLICITA TU SERVICIO",
      description: "Introduce lo que quieres limpiar o servicio a solicitar.",
    },
    {
      id: 2,
      title: "HABLA CON LOS EXPERTOS",
      description: "Compara por precio, valoraciones y comentarios de los clientes.",
    },
    {
      id: 3,
      title: "CONTRATA AL MEJOR",
      description: "El profesional contratado llegará puntual a la hora seleccionada.",
    },
  ];

  return (
    <View style={stylesFeature.container}>
      {features.map((item) => (
        <View key={item.id} style={stylesFeature.card}>
          <View style={stylesFeature.iconCircle}>
            <Text style={stylesFeature.iconText}>{item.id}</Text>
          </View>

          {/* Si preferís usar imágenes, descomentá esto y comentá el círculo de arriba */}
          {/* <Image source={item.icon} style={stylesFeature.icon} contentFit="contain" /> */}

          <Text style={stylesFeature.title}>{item.title}</Text>
          <Text style={stylesFeature.description}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
}

const stylesFeature = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 24,
    paddingVertical: 30,
    paddingHorizontal: 16,
    width: "100%",
  },
  card: {
    width: "90%",
    maxWidth: 280,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#FFF",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    paddingVertical: 25,
    paddingHorizontal: 20,
    gap: 10,
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FFA962",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  iconText: {
    color: "#000",
    fontWeight: "800",
    fontSize: 22,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 12,
    tintColor: "#FF9E5E",
  },
  title: {
    fontWeight: "700",
    textAlign: "center",
    color: "#000",
    marginVertical: 8,
    fontSize: 16,
    textTransform: "uppercase",
  },
  description: {
    fontWeight: "400",
    textAlign: "center",
    color: "#555",
    fontSize: 13,
    lineHeight: 18,
  },
});

const stylesFeatureSection2 = StyleSheet.create({
  heading: {
    marginHorizontal: "auto",
    fontWeight: "700",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
  },
  section: {
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    padding: 20,
  },
});

const servicios = [
  {
    id: 1,
    label: "Fontanería",
    value: "fontaneria",
    nombre: "Fontanería",
    icono: require("@/assets/icons/services/fontaneria.png"),
    iconoSelected: require("@/assets/icons/services/fontaneria_selected.png"),
  },
  {
    id: 2,
    label: "Limpieza",
    value: "limpieza",
    nombre: "Limpieza",
    icono: require("@/assets/icons/services/limpieza.png"),
    iconoSelected: require("@/assets/icons/services/limpieza_selected.png"),
  },
  {
    id: 3,
    label: "Electricista",
    value: "electricista",
    nombre: "Electricista",
    icono: require("@/assets/icons/services/electricista.png"),
    iconoSelected: require("@/assets/icons/services/electricista_selected.png"),
  },
  {
    id: 4,
    label: "Jardinería",
    value: "jardineria",
    nombre: "Jardinería",
    icono: require("@/assets/icons/services/jardineria.png"),
    iconoSelected: require("@/assets/icons/services/jardineria_selected.png"),
  },
  {
    id: 5,
    label: "Montaje",
    value: "montaje",
    nombre: "Montaje",
    icono: require("@/assets/icons/services/montaje.png"),
    iconoSelected: require("@/assets/icons/services/montaje_selected.png"),
  },
  {
    id: 6,
    label: "Carpintería",
    value: "carpinteria",
    nombre: "Carpintería",
    icono: require("@/assets/icons/services/carpinteria.png"),
    iconoSelected: require("@/assets/icons/services/carpinteria_selected.png"),
  },
];

function Servicios() {
  const [seleccionado, setSeleccionado] = useState(1);

  return (
    <View style={stylesServicios.container}>
      <Text style={stylesServicios.titulo}>LOS MÁS SELECCIONADOS</Text>

      <View style={stylesServicios.lista}>
        {servicios.map((item) => {
          const activo = item.id === seleccionado;
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                stylesServicios.card,
                activo && { backgroundColor: "#FFA858", borderColor: "#50B4E8" },
              ]}
              onPress={() => setSeleccionado(item.id)}
            >
              <Image
                source={activo ? item.iconoSelected : item.icono}
                style={stylesServicios.icono}
                contentFit="contain"
              />
              <Text
                style={[
                  stylesServicios.texto,
                  activo && { color: "#fff" }
                ]}
              >
                {item.nombre}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity style={stylesServicios.boton}>
        <Text
          style={[
            stylesServicios.texto,
            { fontWeight: 700, color: "white" }
          ]}
        >
          VER TODOS LOS SERVICIOS
        </Text>

      </TouchableOpacity>
    </View>
  );
}

const stylesServicios = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 120,
    display: "flex",
    gap: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 30,
    textAlign: "center",
  },
  lista: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 10,
    maxWidth: 900,
    justifyContent: "center",
  },
  card: {
    width: 120,
    height: 120,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    cursor: "pointer",
    transitionProperty: "all",
    transitionDuration: "300ms",
  },
  cardActivo: {
    backgroundColor: "#FFA858",
    borderColor: "#50B4E8",
  },
  icono: {
    width: 50,
    height: 50,
    objectFit: "contain",
    marginBottom: 5,
  },
  texto: {
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
    textAlign: "center",
  },
  textoActivo: {
    color: "#fff",
  },
  boton: {
    marginTop: 30,
    backgroundColor: "#0077B6",
    color: "#fff",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 12,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    // border: "none",
    cursor: "pointer",
  },
});

function Reviews() {
  return (
    <View
      style={{
        backgroundColor: "#0077B6",
        paddingVertical: 50,
        paddingHorizontal: 20,
        alignItems: "center",
      }}
    >
      {/* Subtítulo */}
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 16,
          lineHeight: 22,
          maxWidth: 800,
          opacity: 0.9,
          marginBottom: 12,
        }}
      >
        Descubre lo que nuestros clientes opinan sobre nosotros. Cada reseña
        refleja la experiencia real de quienes confiaron en nosotros y
        comprobaron los resultados. Sus palabras son nuestra mejor carta de
        presentación y la motivación para seguir mejorando cada día.
      </Text>

      {/* Título principal */}
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 18,
          marginBottom: 40,
        }}
      >
        Tu satisfacción también puede ser la próxima reseña destacada.
      </Text>

      {/* Contenedor de reseñas */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingHorizontal: 8,
          justifyContent: "center",
        }}
      >
        {/* Tarjeta 1 */}
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            padding: 20,
            width: Platform.OS === "web" ? 380 : 280,
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            elevation: 3,
          }}
        >
          <View
            style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
          >
            <Image
              source={{ uri: "https://via.placeholder.com/40" }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>Месяц назад</Text>
              <View style={{ flexDirection: "row", marginTop: 2 }}>
                {[...Array(4)].map((_, i) => (
                  <Ionicons key={i} name="star" color="#FFA500" size={14} />
                ))}
                <Ionicons name="star-outline" color="#FFA500" size={14} />
              </View>
            </View>
          </View>

          <Text style={{ fontSize: 13, color: "#333", lineHeight: 18 }}>
            Заказывали у ребят разработку интернет-магазина. Что могу сказать, я
            очень довольна, магазин сделали под ключ сразу с базовыми настройками
            для SEO. Рекомендую, цена, качество и коммуникация на 100%.
          </Text>
        </View>

        {/* Tarjeta 2 */}
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            padding: 20,
            width: Platform.OS === "web" ? 380 : 280,
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            elevation: 3,
          }}
        >
          <View
            style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#0077B6",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>A</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>Armen Sargsyan</Text>
              <View style={{ flexDirection: "row", marginTop: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Ionicons key={i} name="star" color="#FFA500" size={14} />
                ))}
              </View>
            </View>
          </View>

          <Text style={{ fontSize: 13, color: "#333", lineHeight: 18 }}>
            Пишу отзыв спустя 6 месяцев после сдачи проекта. За это время не
            нашлось ни одной ошибки. Всё работает стабильно. Сотрудничаем дальше.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Index