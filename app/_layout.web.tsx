import { AccountProvider } from "@/contexts/AccountContext";
import { AuthProvider } from "@/contexts/AuthContext-web";
import { Stack } from "expo-router";

export default function Root() {
  return (
    <AccountProvider>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(web)/index" />
        </Stack>
      </AuthProvider>
    </AccountProvider>
  );
}
