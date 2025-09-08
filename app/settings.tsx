import React, { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ScrollView, Switch, SafeAreaView } from "react-native";
import {
  ArrowLeft,
  Bell,
  Shield,
  Palette,
  Download,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react-native";

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  const settingsGroups = [
    {
      title: "Preferences",
      items: [
        {
          icon: Bell,
          label: "Notifications",
          type: "toggle",
          value: notifications,
          onChange: setNotifications,
        },
        {
          icon: Palette,
          label: "Dark Mode",
          type: "toggle",
          value: darkMode,
          onChange: setDarkMode,
        },
      ],
    },
    {
      title: "Account",
      items: [
        {
          icon: Shield,
          label: "Privacy & Security",
          type: "link",
          action: () => console.log("Privacy settings"),
        },
        {
          icon: Download,
          label: "Export Data",
          type: "link",
          action: () => console.log("Export data"),
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          icon: HelpCircle,
          label: "Help & FAQ",
          type: "link",
          action: () => console.log("Help"),
        },
      ],
    },
    {
      title: "Account Actions",
      items: [
        {
          icon: LogOut,
          label: "Sign Out",
          type: "action",
          action: () => console.log("Sign out"),
          danger: true,
        },
      ],
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-purple-50 to-emerald-50">
      {/* Header */}
      <View className="bg-gradient-to-r from-purple-600 to-emerald-600 p-6">
        <View className="flex-row items-center mb-3">
          <TouchableOpacity className="mr-4 p-2 rounded-full bg-white/10"
          onPress={() => router.back()}
          >
            <ArrowLeft size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-black">Settings</Text>
        </View>
        <Text className="text-purple-500">Customize your CalorAI experience</Text>
      </View>

      <ScrollView contentContainerClassName="p-6 gap-6 pb-20">
        {settingsGroups.map((group, groupIndex) => (
          <View
            key={groupIndex}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <Text className="text-lg font-bold text-gray-800 p-6 pb-4">
              {group.title}
            </Text>

            {group.items.map((item, itemIndex) => (
              <View
                key={itemIndex}
                className={`flex-row items-center justify-between p-6 border-t border-gray-100 ${
                  item.danger ? "bg-red-50" : "bg-transparent"
                }`}
              >
                <View className="flex-row items-center">
                  <item.icon
                    size={20}
                    color={item.danger ? "#EF4444" : "#4B5563"}
                  />
                  <Text
                    className={`ml-4 font-medium ${
                      item.danger ? "text-red-600" : "text-gray-800"
                    }`}
                  >
                    {item.label}
                  </Text>
                </View>

                {item.type === "toggle" && (
                  <Switch
                    value={item.value}
                    onValueChange={item.onChange}
                    trackColor={{ true: "#7C3AED", false: "#D1D5DB" }}
                    thumbColor="white"
                  />
                )}

                {(item.type === "link" || item.type === "action") && (
                  <TouchableOpacity onPress={item.action}>
                    <ChevronRight
                      size={20}
                      color={item.danger ? "#F87171" : "#9CA3AF"}
                    />
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        ))}

        {/* App Info */}
        <View className="bg-white rounded-2xl p-6 shadow-lg items-center">
          <View className="w-16 h-16 bg-blackCherry rounded-2xl items-center justify-center mb-4">
            <Text className="text-2xl font-bold text-gray-100">C</Text>
          </View>
          <Text className="text-lg font-bold text-gray-800 mb-2">CalorAI</Text>
          <Text className="text-gray-600 text-sm mb-4 text-center">
            Your AI-powered nutrition companion
          </Text>
          <Text className="text-xs text-gray-500 text-center">
            Version 1.0.0 • Made with ❤️ for your health journey
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;