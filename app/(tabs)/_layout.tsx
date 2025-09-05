import React from "react";
import { Tabs } from "expo-router";
import { Home, MessageCircle, TreePine, Settings, Award, User } from "lucide-react-native";
import { useColorScheme } from "react-native";

const _layout = () => {
  const colorScheme = useColorScheme();
  const activeColor = colorScheme === "dark" ? "#fff" : "#000";
  const inactiveColor = colorScheme === "dark" ? "#9ca3af" : "#6b7280";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#111827" : "#fff",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="Chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, size }) => <MessageCircle color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="ProgressTree"
        options={{
          title: "Progress Tree",
          tabBarIcon: ({ color, size }) => <TreePine color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="StreaksAndBadges"
        options={{
          title: "Streaks",
          tabBarIcon: ({ color, size }) => <Award color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
        <Tabs.Screen
          name="Settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
          }}
        />
    </Tabs>
  );
};

export default _layout;
