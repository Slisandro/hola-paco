import { Image } from "expo-image";
import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ServiceInfo = () => {
    const [windowHeight, setWindowHeight] = React.useState<number | null>(null);

    React.useEffect(() => {
        const { height } = Dimensions.get("window");
        setWindowHeight(height);
    }, []);

    return (
        <View style={[styles.section, { height: windowHeight }]}>
            <Image
                source={require("@/assets/images/service-info.png")}
                style={styles.image}
                contentFit="cover"
            />

            <View style={styles.content}>
                <Text style={styles.overline}>ACERCA DE HOLA PACO</Text>
                <Text style={styles.title}>SERVICIOS DE LIMPIEZA RESIDENCIAL</Text>
                <Text style={styles.description}>
                    In a professional context it often happens that private or corporate clients order a publication to be made and presented with the actual content still not being ready.
                </Text>
                <Text style={styles.description}>
                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.
                </Text>

                <View style={styles.stats}>
                    <View style={styles.stat}>
                        <Text style={styles.statValue}>53k</Text>
                        <Text style={styles.statLabel}>Layout Done</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statValue}>10k</Text>
                        <Text style={styles.statLabel}>Projects Done</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statValue}>150</Text>
                        <Text style={styles.statLabel}>Gov. Awards</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>MÁS INFORMACIÓN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        padding: 20,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 12,
        marginBottom: 20,
    },
    content: {
        flex: 1,
        gap: 16,
        maxWidth: 350,
    },
    overline: {
        fontSize: 10,
        letterSpacing: 1,
        color: "#888",
        textTransform: "uppercase",
    },
    title: {
        fontSize: 30,
        lineHeight: 30,
        color: "#000",
    },
    description: {
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
    },
    stats: {
        flexDirection: "row",
        gap: 20,
        marginTop: 8,
    },
    stat: {
        alignItems: "center",
    },
    statValue: {
        fontSize: 18,
        color: "#000",
    },
    statLabel: {
        fontSize: 12,
        color: "#555",
    },
    button: {
        marginTop: 12,
        backgroundColor: "#50B4E8",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        alignSelf: "flex-start",
    },
    buttonText: {
        fontSize: 14,
        color: "#fff",
    },
});

export default ServiceInfo;
