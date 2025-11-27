import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function BannerDiagonal() {
    const router = useRouter();
    const [imgWidth, setImgWidth] = useState(120); // valor por defecto para evitar parpadeos

    useEffect(() => {
        const source = require("@/assets/images/llamada.png");

        // Obtiene resolución nativa de la imagen
        Image.getSize(
            Image.resolveAssetSource(source).uri,
            (width, height) => {
                const scaledWidth = width * 0.15;
                setImgWidth(scaledWidth);
            },
            () => { }
        );
    }, []);

    return (
        <View style={[styles.container]}>
            <View style={styles.content}>
                <View style={[styles.textContainer, { marginRight: imgWidth * .85 }]}>
                    <Text style={[styles.title, { color: "#0073B6", fontSize: 20 }]}>
                        Soporte al cliente
                    </Text>

                    <Text style={styles.subtitle}>
                        De respuestas rápidas a ayuda detallada, obtén el soporte que necesitas
                    </Text>

                    <Pressable
                        style={styles.button}
                        onPress={() =>
                            router.push("/(private)/(services)/professional")
                        }
                    >
                        <Text style={styles.buttonText}>CONTACTAR AHORA</Text>
                    </Pressable>
                </View>
            </View>

            <Image
                source={require("@/assets/images/llamada.png")}
                style={[
                    styles.image,
                    {
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        marginLeft: "auto",
                        height: "100%",
                    },
                ]}
                resizeMode="contain"
                resizeMethod="resize"
                width={imgWidth}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingRight: 0,
        position: "relative",
        backgroundColor: "#FF9E5E",
        marginHorizontal: 20,
        borderRadius: 15,
        marginBottom: 30,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        zIndex: 100,
        flexGrow: 1,
    },
    textContainer: {
        flex: 1,
    },
    image: {
        // width y height dinámicos
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 24,
    },
    subtitle: {
        color: "black",
        fontWeight: "bold",
        fontSize: 14,
        marginVertical: 4,
    },
    button: {
        backgroundColor: "#0073B6",
        marginTop: 10,
        alignSelf: "flex-start",
        paddingHorizontal: 14,
        paddingVertical: 14,
        borderRadius: 6,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12,
    },
});
