import { Tabs } from "expo-router";
import {
  Home,
  MessageCircle,
  TreePine,
  Settings,
  Award,
  User,
} from "lucide-react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        animation: "shift",
        tabBarActiveTintColor: "#7843FF",
        tabBarInactiveTintColor: "#A3A3A3",
        tabBarStyle: {
          position: "absolute",
          bottom: "2%",
          height: 45,
          borderRadius: 30,
          backgroundColor: "#49061A",
          marginHorizontal: 20,
          paddingBottom: 5,
          display: "flex",
          alignItems: "center",
          paddingTop: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 8,
          elevation: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <MessageCircle color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="progressTree"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <TreePine color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="streaksAndBadges"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => <Award color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
