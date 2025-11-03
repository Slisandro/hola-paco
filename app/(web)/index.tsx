import BannerDiagonal from '@/components/web/banner-diagonal'
import BannerDiagonalReverse from '@/components/web/banner-diagonal-reverse'
import BannerDiagonalReverse2 from '@/components/web/banner-diagonal-reverse-2'
import FAQSection from '@/components/web/faq'
import Footer from '@/components/web/footer'
import Header from '@/components/web/header'
import HeroSection from '@/components/web/hero-section'
import ServiceInfo from '@/components/web/service-info'
import Reviews from '@/components/web/testimonials'
import { useSplashAnimation } from '@/hooks/useSplashAnimation'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Animated, Dimensions, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

const Index = () => {
  const { isReady } = useSplashAnimation();
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [windowHeight, setWindowHeight] = React.useState<number | null>(null);

  const handleToOffert = () => null


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
      <HeroSection handleOpenModal={handleOpenModal} />
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
      <Modal
        visible={showModal}
        animationType="fade"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#0C85BE",
              padding: 20,
              width: "50%",
              borderRadius: 12,
              alignItems: "center",
              gap: 10
            }}
          >
            <Text style={{ width: "100%", fontWeight: "bold", color: "white", marginTop: 8, marginBottom: 4 }}>Filtrar búsqueda</Text>

            <TextInput
              placeholder="Seleccionar ubicación"
              onFocus={handleOpenModal}
              style={{
                padding: 14,
                backgroundColor: "white",
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#00000050",
                width: "100%"
              }}
              placeholderTextColor={"#1E1E1ECC"}
            />

            <TextInput
              placeholder="Seleccionar ciudad"
              onFocus={handleOpenModal}
              style={{
                padding: 14,
                backgroundColor: "white",
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#00000050",
                width: "100%"
              }}
              placeholderTextColor={"#1E1E1ECC"}
            />

            <View
              style={{
                paddingHorizontal: 4,
                backgroundColor: "white",
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#00000050",
                width: "100%",
                height: 46,
                justifyContent: "center",

                zIndex: 1000
              }}
            >
              <DropDownPicker
                open={openDropdown}
                value={value}
                items={servicios}
                placeholder="Seleccione un servicio"
                setOpen={setOpenDropdown}
                setValue={setValue}

                style={{
                  borderWidth: 0,
                  backgroundColor: "transparent",
                  paddingHorizontal: 10,
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 2,
                  zIndex: 1000
                }}

                textStyle={{
                  fontSize: 14,
                  textAlignVertical: "center",
                  textAlign: "left",
                }}

                placeholderStyle={{
                  opacity: 0.75,
                }}

                dropDownContainerStyle={{
                  borderWidth: 0,
                  backgroundColor: "#fff",
                  elevation: 2,
                }}
              />
            </View>

            {(() => {
              switch (value) {
                case "fontaneria":
                  return (
                    <View style={{ width: "100%", gap: 10 }}>
                      <Text style={{ fontWeight: "bold", color: "white", marginTop: 8, marginBottom: 4 }}>Servicio de Fontanería</Text>
                      <TextInput
                        placeholder="Tipo de reparación (caño, grifo, desagüe...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                      <TextInput
                        placeholder="Ubicación del problema (cocina, baño...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                    </View>
                  );

                case "limpieza":
                  return (
                    <View style={{ width: "100%", gap: 10 }}>
                      <Text style={{ fontWeight: "bold", color: "white", marginTop: 8, marginBottom: 4 }}>Servicio de Limpieza</Text>
                      <TextInput
                        placeholder="Tipo de limpieza (hogar, oficina, alfombra...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                      <TextInput
                        placeholder="Frecuencia (diaria, semanal, puntual...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                    </View>
                  );

                case "electricista":
                  return (
                    <View style={{ width: "100%", gap: 10 }}>
                      <Text style={{ fontWeight: "bold", color: "white", marginTop: 8, marginBottom: 4 }}>Servicio de Electricista</Text>
                      <TextInput
                        placeholder="Tipo de trabajo (instalación, reparación...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                      <TextInput
                        placeholder="Potencia o ubicación (sala, tablero, toma...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                    </View>
                  );

                case "jardineria":
                  return (
                    <View style={{ width: "100%", gap: 10 }}>
                      <Text style={{ fontWeight: "bold", color: "white", marginTop: 8, marginBottom: 4 }}>Servicio de Jardinería</Text>
                      <TextInput
                        placeholder="Tipo de área (patio, jardín, terraza...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                      <TextInput
                        placeholder="Tareas (corte de césped, poda, riego...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                    </View>
                  );

                case "montaje":
                  return (
                    <View style={{ width: "100%", gap: 10 }}>
                      <Text style={{ fontWeight: "bold", color: "white", marginTop: 8, marginBottom: 4 }}>Servicio de Montaje</Text>
                      <TextInput
                        placeholder="Qué necesitas montar (mueble, televisor, estante...)"
                        style={{
                          borderWidth: 1,
                          borderColor: "#ccc",
                          borderRadius: 6,
                          padding: 10,
                          backgroundColor: "white",
                        }}
                      />
                      <TextInput
                        placeholder="Cantidad de objetos a montar"
                        keyboardType="numeric"
                        style={{
                          borderWidth: 1,
                          borderColor: "#ccc",
                          borderRadius: 6,
                          padding: 10,
                          backgroundColor: "white",
                        }}
                      />
                    </View>
                  );

                case "carpinteria":
                  return (
                    <View style={{ width: "100%", gap: 10 }}>
                      <Text style={{ fontWeight: "bold", color: "white", marginTop: 8, marginBottom: 4 }}>Servicio de Carpintería</Text>
                      <TextInput
                        placeholder="Tipo de trabajo (reparación, diseño, instalación...)"
                        style={{
                          borderWidth: 1,
                          borderColor: "#ccc",
                          borderRadius: 6,
                          padding: 10,
                          backgroundColor: "white",
                        }}
                      />
                      <TextInput
                        placeholder="Material preferido (madera, MDF, melamina...)"
                        style={{
                          borderWidth: 1,
                          borderColor: "#ccc",
                          borderRadius: 6,
                          padding: 10,
                          backgroundColor: "white",
                        }}
                      />
                    </View>
                  );

                default:
                  return null;
              }
            })()}

            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-around", gap: 20 }}>
              <Pressable
                onPress={handleToOffert}
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 16,
                  borderRadius: 4,
                  alignSelf: "flex-start",
                  backgroundColor: "#FFA962",
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: "#FFA962",
                  zIndex: 10
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: 500
                  }}
                >
                  Buscar
                </Text>
              </Pressable>
              <Pressable
                onPress={handleCloseModal}
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 16,
                  borderRadius: 4,
                  alignSelf: "flex-start",
                  borderWidth: 1,
                  borderColor: "white",
                  marginTop: 10
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: 500
                  }}
                >
                  Cerrar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
    path: "/(web)/fontaneria"
  },
  {
    id: 2,
    label: "Limpieza",
    value: "limpieza",
    nombre: "Limpieza",
    icono: require("@/assets/icons/services/limpieza.png"),
    iconoSelected: require("@/assets/icons/services/limpieza_selected.png"),
    path: "/(web)/limpieza"
  },
  {
    id: 3,
    label: "Electricista",
    value: "electricista",
    nombre: "Electricista",
    icono: require("@/assets/icons/services/electricista.png"),
    iconoSelected: require("@/assets/icons/services/electricista_selected.png"),
    path: "/(web)/services/fontaneria"
  },
  {
    id: 4,
    label: "Jardinería",
    value: "jardineria",
    nombre: "Jardinería",
    icono: require("@/assets/icons/services/jardineria.png"),
    iconoSelected: require("@/assets/icons/services/jardineria_selected.png"),
    path: "/(web)/jardineria"
  },
  {
    id: 5,
    label: "Montaje",
    value: "montaje",
    nombre: "Montaje",
    icono: require("@/assets/icons/services/montaje.png"),
    iconoSelected: require("@/assets/icons/services/montaje_selected.png"),
    path: "/(web)/services/fontaneria"
  },
  {
    id: 6,
    label: "Carpintería",
    value: "carpinteria",
    nombre: "Carpintería",
    icono: require("@/assets/icons/services/carpinteria.png"),
    iconoSelected: require("@/assets/icons/services/carpinteria_selected.png"),
    path: "/(web)/services/fontaneria"
  },
];

function Servicios() {
  const router = useRouter()
  const [seleccionado, setSeleccionado] = useState(1);
  const screenWidth = Dimensions.get("window").width;

  const isMobile = screenWidth < 600;
  const isTablet = screenWidth >= 600 && screenWidth < 1024;

  return (
    <View style={[stylesServicios.container, { paddingVertical: isMobile ? 60 : 120 }]}>
      <Text style={stylesServicios.titulo}>LOS MÁS SELECCIONADOS</Text>

      <View
        style={[
          stylesServicios.lista,
          {
            flexWrap: isMobile ? "wrap" : "nowrap",
            gap: isMobile ? 16 : 20,
          },
        ]}
      >
        {servicios.map((item) => {
          const activo = item.id === seleccionado;
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                stylesServicios.card,
                activo && stylesServicios.cardActivo,
                { width: isMobile ? 100 : 120, height: isMobile ? 100 : 120 },
              ]}
              onPress={() => {
                // setSeleccionado(item.id)
                // @ts-expect-error
                router.push(item.path)
              }}
              activeOpacity={0.8}
            >
              <Image
                source={activo ? item.iconoSelected : item.icono}
                style={stylesServicios.icono}
                resizeMode="contain"
              />
              <Text style={[stylesServicios.texto, activo && stylesServicios.textoActivo]}>
                {item.nombre}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity style={stylesServicios.boton} activeOpacity={0.85}>
        <Text style={stylesServicios.botonTexto}>VER TODOS LOS SERVICIOS</Text>
      </TouchableOpacity>
    </View>
  );
}

const stylesServicios = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  lista: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 900,
    flexWrap: "wrap",
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    elevation: 2, // sombra sutil
  },
  cardActivo: {
    backgroundColor: "#FFA858",
    borderColor: "#50B4E8",
    elevation: 5, // más sombra cuando está activo
  },
  icono: {
    width: 50,
    height: 50,
    marginBottom: 6,
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
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  botonTexto: {
    color: "#fff",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 12,
  },
});


export default Index