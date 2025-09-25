import { AccountProvider } from "@/contexts/AccountContext";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { useSplashAnimation } from "@/hooks/useSplashAnimation";
import { Stack } from "expo-router";
import { Animated, View } from "react-native";

// Este componente decide la ruta inicial
function App() {
  const { isReady } = useSplashAnimation();
  const authStatus = useAuth();

  // Muestra la pantalla de carga mientras se inicializa el estado de autenticación
  // `isFirstLaunch` es `null` mientras se lee el valor de AsyncStorage.
  if (!isReady || authStatus === null || authStatus.isFirstLaunch === null) {
    return (
      <Splash />
    );
  }

  // Renderiza la pila de navegación condicionalmente según el estado.
  // Esto evita cualquier problema con Redirect en el _layout.
  if (authStatus.isFirstLaunch) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(public)/onboarding" />
      </Stack>
    );
  }

  if (authStatus.isSignedIn) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(private)/(tabs)" />
      </Stack>
    );
  }

  // Si no es el primer lanzamiento y no está autenticado, muestra la pantalla de autenticación
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(public)/auth" />
    </Stack>
  );
}

// Este es el componente principal que envuelve toda la aplicación con el contexto de autenticación.
// Es el punto de entrada de la navegación.
export default function Root() {
  return (
    <AuthProvider>
      <AccountProvider>
        <App />
      </AccountProvider>
    </AuthProvider>
  );
}

// // Componente de la pantalla de carga
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
