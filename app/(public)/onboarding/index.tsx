import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { cancelAnimation, runOnJS, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle } from "react-native-svg";

// Initial OnBoarding
export default function Onboarding() {
    return (
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <StatusBar style="light" backgroundColor="#50B4E8" />

            <View style={styles.imageContainer}>
                <Image
                    source={require("@/assets/images/onboarding.png")}
                    style={styles.image}
                    contentFit="contain"
                    transition={300}
                />
            </View>

            <View style={styles.bottomSheet}>
                <View style={{ gap: 10 }}>
                    <Text style={styles.title}>
                        Aquí para apoyarte siempre
                    </Text>
                    <Text style={styles.subtitle}>
                        Encuentra los mejores proveedores de servicios
                    </Text>
                </View>

                <View style={{ flexDirection: "row", gap: 10, justifyContent: "center", paddingVertical: 8 }}>
                    <View style={{ width: 10, height: 10, backgroundColor: "#0166FC", borderRadius: "50%" }} />
                    <View style={{ width: 32, height: 10, backgroundColor: "#71A9FD", borderRadius: 5 }} />
                </View>

                <NextButton />
            </View>
        </SafeAreaView>
    );
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

function NextButton() {
    const router = useRouter()
    const progress = useSharedValue(0);
    const RADIUS = 40;
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CIRCUMFERENCE * (1 - progress.value),
    }));

    const handleComplete = () => {
        router.push("/(public)/onboarding/step-2")
    };

    const handlePressIn = () => {
        progress.value = withTiming(1, { duration: 1500 }, (finished) => {
            if (finished) {
                runOnJS(handleComplete)();
            }
        });
    };

    const handlePressOut = () => {
        cancelAnimation(progress);
        progress.value = 0;
    };

    return (
        <View style={styles.containerButton}>
            <Svg width={90} height={90}>
                <AnimatedCircle
                    cx={45}
                    cy={45}
                    r={RADIUS}
                    stroke="#FFD700"
                    strokeWidth={4}
                    strokeDasharray={CIRCUMFERENCE}
                    animatedProps={animatedProps}
                    fill="none"
                    strokeLinecap="round"
                />
            </Svg>

            <Pressable
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={styles.button}
            >
                <Ionicons name="arrow-forward" size={32} color="white" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#50B4E8",
    },
    imageContainer: {
        flex: 1,
        backgroundColor: "transparent",
        padding: 50
    },
    image: {
        width: "100%",
        height: "100%",
    },
    bottomSheet: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 40,
        gap: 5
    },
    title: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: 0,
        textAlign: "center",
        textAlignVertical: "center",
    },
    subtitle: {
        fontFamily: "DM Sans",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#000",
    },
    containerButton: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: 75,
        width: 75
    },
    button: {
        position: "absolute",
        width: 75,
        height: 75,
        backgroundColor: "#50B4E8",
        borderRadius: 75 / 2,
        justifyContent: "center",
        alignItems: "center",
    },
});
