import { useAccount } from '@/contexts/AccountContext';
import { Ionicons } from '@expo/vector-icons';
import { Image, ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions, FlatList, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Polygon } from 'react-native-svg';


const { width: SCREEN_WIDTH } = Dimensions.get("window");

const COLORS = {
  primary: "#50B4E8",
  accent: "#FFA962",
  text: "#000",
};

export default function HomeScreen() {
  const router = useRouter();
  const { accountType } = useAccount()
  const [selected] = useState<number>(0);
  const [ubicacion, setUbicacion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [servicio, setServicio] = useState("");
  const [showModal, setShowModal] = useState(false);


  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState("");

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleToOffert = () => accountType === "profesional"
    ? router.push("/(private)/(services)/offers")
    : router.push("/(private)/(services)/professional")

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        {/* Initial section */}
        <View style={styles.firstSection}>
          <ImageBackground
            source={require("@/assets/images/hero-background.png")}
            style={StyleSheet.absoluteFillObject}
            contentFit="cover"
          />

          <View
            style={{
              flex: 1,
              backgroundColor: "#0C85BEDD",
              paddingHorizontal: 10,
              paddingTop: 20,
              position: "relative"
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "white",
                width: "80%",
                marginTop: 20
              }}
            >
              Encuentra y contrata al instante servicios confiables para tu hogar o negocio
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: "50%", gap: 10, marginVertical: 40 }}>

                <Pressable
                  onPress={handleOpenModal}
                  style={{
                    paddingVertical: 10,
                    paddingLeft: 10,
                    backgroundColor: "white",
                    borderRadius: 4
                  }}
                >
                  <Text style={{ opacity: .5 }}>Seleccionar ubicación</Text>
                </Pressable>

                <Pressable
                  onPress={handleOpenModal}
                  style={{
                    paddingVertical: 10,
                    paddingLeft: 10,
                    backgroundColor: "white",
                    borderRadius: 4
                  }}
                >
                  <Text style={{ opacity: .5 }}>Ciudad</Text>
                </Pressable>

                <Pressable
                  onPress={handleOpenModal}
                  style={{
                    paddingVertical: 10,
                    paddingLeft: 10,
                    backgroundColor: "white",
                    borderRadius: 4
                  }}
                >
                  <Text style={{ opacity: .5 }}>Selecciona el servicio</Text>
                </Pressable>

                <Pressable
                  onPress={handleOpenModal}
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 16,
                    borderRadius: 4,
                    alignSelf: "flex-start",
                    backgroundColor: "#FFA962",
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
                    CONTRATA AHORA
                  </Text>
                </Pressable>

              </View>

              <View
                style={{
                  position: "absolute",
                  right: -30,
                  width: 210,
                  height: 210,
                  bottom: 0
                }}
              >
                <Image
                  source={require("@/assets/images/paco-home.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  contentFit="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Second section */}
        <View style={{ marginTop: 30 }}>
          <Text style={[styles.heading, { fontSize: 18, color: "#000000" }]}>Porqué ELEGIR A NUESTROS SERVICIOS?</Text>
          <FeaturesSection />
        </View>

        <BannerDiagonal />

        {/* Third section */}
        <View style={{ marginTop: 30 }}>
          <Text style={[styles.heading, { fontSize: 18, color: "#000000" }]}>Cómo FUNCIONA</Text>
          <FeaturesSection2 />
        </View>

        <BannerDiagonal2 />

        <Servicios />

        <BannerDiagonal />

        <Reviews />
      </ScrollView>

      <Modal
        visible={showModal}
        animationType="slide"
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
              borderRadius: 12,
              width: "90%",
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
                  marginBottom: 2
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    marginBottom: 50
  },
  firstSection: {
    flex: 1,
    backgroundColor: "#0C85BEDD"
  },
  headerTitle: {
    fontFamily: "DM Sans",
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 28,
    color: COLORS.text
  },
  heading: {
    marginHorizontal: "auto",
    fontFamily: "DM Sans",
    fontWeight: "700",
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
});

function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: require("@/assets/images/homepage/guard.png"), // cambia por tu ruta local
      title: "VERIFICADO Y SEGURO",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      icon: require("@/assets/images/homepage/click.png"), // cambia por tu ruta local
      title: "FÁCIL Y RÁPIDO",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      icon: require("@/assets/images/homepage/files.png"), // cambia por tu ruta local
      title: "CONTROL DE GASTOS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <View style={stylesFeature.container}>
      {features.map((item) => (
        <View key={item.id} style={stylesFeature.card}>
          <Image source={item.icon} style={stylesFeature.icon} contentFit="contain" />
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
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingVertical: 50,
    paddingHorizontal: 8,
  },
  card: {
    width: "30%",
    alignItems: "center",
    textAlign: "center",
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
    tintColor: "#FF9E5E",
  },
  title: {
    fontWeight: 700,
    textAlign: "center",
    color: "#000",
    marginVertical: 6,
    height: 30
  },
  description: {
    fontWeight: 400,
    textAlign: "center",
    color: "#444",
    fontSize: 12,
  },
});

function BannerDiagonal() {
  return (
    <View style={stylesBanner.container}>
      <View style={stylesBanner.orangeBg} />

      <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={[StyleSheet.absoluteFill, {
        marginLeft: 100
      }]}>
        <Polygon points="10,0 100,0 100,100 0,100" fill="#007ACC" />
      </Svg>

      <View style={stylesBanner.content}>
        <Image source={require("@/assets/images/homepage/paco-agendar.png")} style={[stylesBanner.image, {
          position: "absolute"
        }]} contentFit="contain" />
        <View style={stylesBanner.textContainer}>
          <Text style={stylesBanner.title}>
            AGENDA HOY TU SERVICIO DOMÉSTICO Y DISFRUTA DE UN HOGAR IMPECABLE SIN PREOCUPACIONES.
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
    height: 150,
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
  orangeBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FF9E5E"
  },
  content: {
    paddingLeft: "30%",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  textContainer: {
    flex: 1,
    marginLeft: 50,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#FFB87A",
    marginTop: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});

function FeaturesSection2() {
  const features = [
    {
      id: 1,
      title: "SOLICITA TU SERVICIO",
      description: "Introduce lo que quieres limpiar ó servicio a solicitar",
    },
    {
      id: 2,
      title: "HABLA CON LOS EXPERTOS",
      description: "Compara por precio, valoraciones y comentarios de los clientes",
    },
    {
      id: 3,
      title: "CONTRATA AL MEJOR",
      description: "El profesional contratado llegará puntual a la hora seleccionada.",
    },
  ];

  return (
    <View style={stylesFeature2.container}>
      {features.map((item) => (
        <View key={item.id} style={stylesFeature2.card}>
          <View style={{
            width: 30,
            height: 30,
            backgroundColor: "#FFA962",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%"
          }}>
            <Text style={{ fontWeight: 800, fontSize: 15 }}>{item.id}</Text>
          </View>
          <Text style={stylesFeature2.title}>{item.title}</Text>
          <View style={{
            height: 60,
            justifyContent: "flex-start",
            alignItems: "center",
          }}>
            <Text style={stylesFeature2.description}>{item.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const stylesFeature2 = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingVertical: 50,
    paddingHorizontal: 8,
  },
  card: {
    width: "30%",
    alignItems: "center",
    textAlign: "center",
    gap: 6
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
    tintColor: "#FF9E5E",
  },
  title: {
    fontWeight: 700,
    textAlign: "center",
    color: "#000",
    marginVertical: 6,
    height: 30
  },
  description: {
    fontWeight: "400",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#444",
    fontSize: 12,
  },
});

function BannerDiagonal2() {
  return (
    <View style={stylesBanner2.container}>
      <View style={stylesBanner2.orangeBg} />

      <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={[StyleSheet.absoluteFill, {
        marginLeft: 220
      }]}>
        <Polygon points="10,0 100,0 100,100 0,100" fill="#FF9E5E" />
      </Svg>

      <View style={stylesBanner2.content}>
        <Image source={require("@/assets/images/homepage/paco-agendar-2.png")} style={[stylesBanner2.image]}
          contentFit="contain" />
        <View style={stylesBanner2.textContainer}>
          <Text style={stylesBanner2.title}>
            AGENDA HOY TU SERVICIO DOMÉSTICO Y DISFRUTA DE UN HOGAR IMPECABLE SIN PREOCUPACIONES.
          </Text>

          <Pressable style={stylesBanner2.button}>
            <Text style={stylesBanner2.buttonText}>AGENDA TU SERVICIO AHORA</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const stylesBanner2 = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
    overflow: "hidden",
    position: "relative",
    marginBottom: 10
  },
  orangeBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#007ACC"
  },
  content: {
    position: "relative",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    paddingHorizontal: 16,
  },
  image: {
    width: 150,
    height: 150,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#FFB87A",
    marginTop: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});

const servicios = [
  {
    id: 1,
    label: "Fontanería",
    value: "fontaneria",
    nombre: "Fontanería",
    icono: require("@/assets/icons/services/fontaneria.png"),
    iconoSelected: require("@/assets/icons/services/fontaneria_selected.png")
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
  const [seleccionado, setSeleccionado] = useState<number>(1);

  return (
    <View style={stylesServicios.container}>
      <Text style={stylesServicios.titulo}>LOS MÁS SELECCIONADOS</Text>

      <FlatList
        data={servicios}
        style={[stylesServicios.grid, { marginHorizontal: 15 }]}
        contentContainerStyle={{ paddingVertical: 10 }}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        renderItem={({ item }) => {
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
        }}
      />

      <TouchableOpacity style={stylesServicios.boton}>
        <Text style={stylesServicios.botonTexto}>VER TODOS LOS SERVICIOS</Text>
      </TouchableOpacity>
    </View>
  );
}

const stylesServicios = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  grid: {
    gap: 8,
    marginBottom: 20,
  },
  card: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 4
  },
  icono: {
    width: 25,
    height: 25,
    marginBottom: 4,
  },
  texto: {
    fontSize: 10,
    color: "#333",
    textAlign: "center",
  },
  boton: {
    backgroundColor: "#0077B6",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  botonTexto: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 12,
  },
});

function Reviews() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0077B6",
        paddingVertical: 40,
        paddingHorizontal: 16,
        alignItems: "center",
      }}
    >
      {/* Título y subtítulo */}
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 16,
          opacity: 0.9,
          marginBottom: 12,
        }}
      >
        Descubre lo que nuestros clientes opinan sobre nosotros. Cada reseña
        refleja la experiencia real de quienes confiaron en nosotros y
        comprobaron los resultados. Sus palabras son nuestra mejor carta de
        presentación y la motivación para seguir mejorando cada día.
      </Text>

      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 18,
          marginBottom: 30,
        }}
      >
        Tu satisfacción también puede ser la próxima reseña destacada.
      </Text>

      {/* Contenedor de reseñas */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 16,
          paddingHorizontal: 8,
        }}
      >
        {/* Tarjeta 1 */}
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            padding: 16,
            width: 280,
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
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
              <Text style={{ fontWeight: "bold" }}>Месяц назад</Text>
              <View style={{ flexDirection: "row", marginTop: 2 }}>
                <Ionicons name="star" color="#FFA500" size={14} />
                <Ionicons name="star" color="#FFA500" size={14} />
                <Ionicons name="star" color="#FFA500" size={14} />
                <Ionicons name="star" color="#FFA500" size={14} />
                <Ionicons name="star-outline" color="#FFA500" size={14} />
              </View>
            </View>
          </View>

          <Text style={{ fontSize: 13, color: "#333" }}>
            Заказывали у ребят разработку интернет-магазина. Что могу сказать, я
            очень довольна, магазин сделали под ключ сразу с базовыми настройками
            для SEO. Рекомендую, цена, качество и коммуникация на 100%.
          </Text>
        </View>

        {/* Tarjeta 2 */}
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            padding: 16,
            width: 280,
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
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
              <Text style={{ fontWeight: "bold" }}>Armen Sargsyan</Text>
              <View style={{ flexDirection: "row", marginTop: 2 }}>
                <Ionicons name="star" color="#FFA500" size={14} />
                <Ionicons name="star" color="#FFA500" size={14} />
                <Ionicons name="star" color="#FFA500" size={14} />
                <Ionicons name="star" color="#FFA500" size={14} />
                <Ionicons name="star" color="#FFA500" size={14} />
              </View>
            </View>
          </View>

          <Text style={{ fontSize: 13, color: "#333" }}>
            Пишу отзыв спустя 6 месяцев после сдачи проекта. За это время не
            нашлось ни одной ошибки. Всё работает стабильно. Сотрудничаем дальше.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}