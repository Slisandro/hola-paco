import { Tabs } from "expo-router";
import { Image, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  const icons = {
    index: {
      default: require("@/assets/icons/home.png"),
      selected: require("@/assets/icons/home_selected.png"),
    },
    notification: {
      default: require("@/assets/icons/notification.png"),
      selected: require("@/assets/icons/notification_selected.png"),
    },
    chat: {
      default: require("@/assets/icons/chat.png"),
      selected: require("@/assets/icons/chat_selected.png"),
    },
    profile: {
      default: require("@/assets/icons/profile.png"),
      selected: require("@/assets/icons/profile_selected.png"),
    },
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          shadowColor: "transparent",
          height: 60 + insets.bottom, 
          paddingBottom: insets.bottom,
          position: "absolute",
          borderTopWidth: 1.5,
          borderColor: "#00000025",
        },
        tabBarItemStyle: {
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {Object.entries(icons).map(([name, iconSet]) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: name.charAt(0).toUpperCase() + name.slice(1),
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? iconSet.selected : iconSet.default}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: "contain",
                }}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 13,
                  lineHeight: 18,
                  letterSpacing: 0,
                  color: focused ? "#50B4E8" : "#7D848D",
                }}
              >
                {name === "index" ? "Home" : name.charAt(0).toUpperCase() + name.slice(1)}
              </Text>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
