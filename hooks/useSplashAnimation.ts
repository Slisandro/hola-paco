import { DMSans_400Regular, DMSans_500Medium, DMSans_700Bold } from "@expo-google-fonts/dm-sans";
import { Prompt_400Regular, Prompt_500Medium, Prompt_700Bold } from "@expo-google-fonts/prompt";
import { useFonts } from "expo-font";
import { useEffect, useRef, useState } from "react";
import { Animated, Platform } from "react-native";

export function useSplashAnimation() {
    const opacity = useRef(new Animated.Value(0)).current;
    const [isReady, setIsReady] = useState(false);

    const [fontsLoaded] = useFonts({
        "DM-Sans-Regular": DMSans_400Regular,
        "DM-Sans-Medium": DMSans_500Medium,
        "DM-Sans-Bold": DMSans_700Bold,

        "Prompt-Regular": Platform.OS === "web" ? "Prompt, sans-serif" : Prompt_400Regular,

        "Prompt-Medium": Platform.OS === "web" ? "Prompt, sans-serif" : Prompt_500Medium,

        "Prompt-Bold": Platform.OS === "web" ? "Prompt, sans-serif" : Prompt_700Bold,
    });

    useEffect(() => {
        if (!fontsLoaded) return;

        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.delay(1000),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }),
        ]).start(() => setIsReady(true));
    }, [fontsLoaded]);

    return { opacity, isReady, fontsLoaded };
}
