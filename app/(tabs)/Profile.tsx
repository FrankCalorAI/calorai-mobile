import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  ArrowLeft,
  User,
  Edit,
  Trophy,
  Target,
  Calendar,
  TrendingUp,
  Settings as SettingsIcon,
} from "lucide-react-native";

const Profile = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const userProfile = {
    name: "Alex Thompson",
    email: "alex.thompson@email.com",
    joinDate: "2024-01-01",
    currentWeight: 75.2,
    startWeight: 85,
    targetWeight: 70,
    height: 175,
    age: 28,
    level: 8,
    totalXP: 1240,
    achievementsCount: 4,
    streakRecord: 28,
    daysActive: 156,
  };

  const weightLost = userProfile.startWeight - userProfile.currentWeight;
  const weightToGo = userProfile.currentWeight - userProfile.targetWeight;
  const progressPercentage =
    ((userProfile.startWeight - userProfile.currentWeight) /
      (userProfile.startWeight - userProfile.targetWeight)) *
    100;

  return (
    <ScrollView
      className="bg-gradient-to-br from-purple-50 to-emerald-50 pb-20"
      contentContainerStyle={{ paddingTop: insets.top }}
    >
      {/* Header */}
      <View className="bg-gradient-to-r from-purple-600 to-emerald-600 p-6">
        <View className="flex-row items-center mb-4">
          <TouchableOpacity
            className="mr-4 p-2 rounded-full bg-white bg-opacity-20"
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-white">Profile</Text>
        </View>
      </View>

      <View className="p-6 space-y-6">
        {/* Profile Header */}
        <View className="bg-white rounded-2xl p-6 shadow-lg">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <View className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 flex items-center justify-center mr-4">
                <User size={28} color="white" />
              </View>
              <View>
                <Text className="text-xl font-bold text-gray-800">
                  {userProfile.name}
                </Text>
                <Text className="text-gray-600">{userProfile.email}</Text>
                <View className="flex-row items-center mt-1">
                  <Trophy size={16} color="#7c3aed" className="mr-1" />
                  <Text className="text-sm font-medium text-purple-600">
                    Level {userProfile.level}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity className="p-2">
              <Edit size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>

          <View className="grid grid-cols-2 gap-4 mt-4">
            <View className="text-center p-3 bg-purple-50 rounded-xl">
              <Text className="text-lg font-bold text-purple-600">
                {userProfile.height}cm
              </Text>
              <Text className="text-sm text-gray-600">Height</Text>
            </View>
            <View className="text-center p-3 bg-emerald-50 rounded-xl">
              <Text className="text-lg font-bold text-emerald-600">
                {userProfile.age} years
              </Text>
              <Text className="text-sm text-gray-600">Age</Text>
            </View>
          </View>
        </View>

        {/* Weight Progress Summary */}
        <View className="bg-white rounded-2xl p-6 shadow-lg">
          <Text className="text-lg font-bold text-gray-800 mb-4">
            Weight Journey
          </Text>

          <View className="flex-row justify-between mb-4">
            <View className="text-center flex-1">
              <Text className="text-2xl font-bold text-gray-600">
                {userProfile.startWeight}kg
              </Text>
              <Text className="text-sm text-gray-500">Started</Text>
            </View>
            <View className="text-center flex-1">
              <Text className="text-2xl font-bold text-emerald-600">
                {userProfile.currentWeight}kg
              </Text>
              <Text className="text-sm text-gray-500">Current</Text>
            </View>
            <View className="text-center flex-1">
              <Text className="text-2xl font-bold text-purple-600">
                {userProfile.targetWeight}kg
              </Text>
              <Text className="text-sm text-gray-500">Target</Text>
            </View>
          </View>

          <View className="space-y-3">
            <View className="flex-row justify-between items-center">
              <Text className="text-sm text-gray-600">Progress to Goal</Text>
              <Text className="text-sm font-medium text-emerald-600">
                {progressPercentage.toFixed(1)}%
              </Text>
            </View>
            <View className="w-full bg-gray-200 rounded-full h-4">
              <View
                className="h-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600"
                style={{ width: `${progressPercentage}%` }}
              />
            </View>
            <View className="flex-row justify-between text-sm">
              <Text className="text-emerald-600 font-medium">
                Lost: {weightLost.toFixed(1)}kg
              </Text>
              <Text className="text-purple-600 font-medium">
                To go: {weightToGo.toFixed(1)}kg
              </Text>
            </View>
          </View>
        </View>

        {/* Achievement Summary */}
        <View className="bg-white rounded-2xl p-6 shadow-lg">
          <Text className="text-lg font-bold text-gray-800 mb-4">
            Achievements Overview
          </Text>

          <View className="flex-row justify-between">
            <View className="text-center p-4 bg-orange-50 rounded-xl flex-1 mr-2">
              <Trophy size={24} color="#ea580c" className="mx-auto mb-2" />
              <Text className="text-xl font-bold text-orange-600">
                {userProfile.achievementsCount}
              </Text>
              <Text className="text-sm text-gray-600">Badges Earned</Text>
            </View>
            <View className="text-center p-4 bg-red-50 rounded-xl flex-1 ml-2">
              <Target size={24} color="#ef4444" className="mx-auto mb-2" />
              <Text className="text-xl font-bold text-red-600">
                {userProfile.streakRecord}
              </Text>
              <Text className="text-sm text-gray-600">Best Streak</Text>
            </View>
          </View>

          <TouchableOpacity
            className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl items-center"
            onPress={() => router.push("/StreaksAndBadges")}
          >
            <Text className="text-white font-medium">View All Achievements</Text>
          </TouchableOpacity>
        </View>

        {/* Activity Stats */}
        <View className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
          {[
            {
              icon: Calendar,
              color: "#2563eb",
              label: "Days Active",
              subLabel: "Since joining",
              value: userProfile.daysActive,
            },
            {
              icon: TrendingUp,
              color: "#10b981",
              label: "Total XP Earned",
              subLabel: "Experience points",
              value: userProfile.totalXP,
            },
            {
              icon: Calendar,
              color: "#7c3aed",
              label: "Member Since",
              subLabel: "Join date",
              value: new Date(userProfile.joinDate).toLocaleDateString(
                "en-US",
                { month: "short", year: "numeric" }
              ),
            },
          ].map((item, index) => (
            <View
              key={index}
              className="flex-row items-center justify-between p-4 rounded-xl bg-blue-50"
              style={{
                backgroundColor:
                  item.color === "#2563eb"
                    ? "#eff6ff"
                    : item.color === "#10b981"
                    ? "#d1fae5"
                    : "#f3e8ff",
              }}
            >
              <View className="flex-row items-center">
                <item.icon size={20} color={item.color} className="mr-3" />
                <View>
                  <Text className="font-semibold text-gray-800">{item.label}</Text>
                  <Text className="text-sm text-gray-600">{item.subLabel}</Text>
                </View>
              </View>
              <Text className="text-xl font-bold" style={{ color: item.color }}>
                {item.value}
              </Text>
            </View>
          ))}
        </View>

        {/* Quick Links */}
        <View className="bg-white rounded-2xl p-6 shadow-lg space-y-3">
          {[
            { label: "View Progress Tree", route: "/progress", icon: TrendingUp, color: "#7c3aed" },
            { label: "Account Settings", route: "/settings", icon: SettingsIcon, color: "#4b5563" },
          ].map((link, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row justify-between p-4 rounded-xl bg-gray-50"
              onPress={() => router.push(link.route)}
            >
              <View className="flex-row items-center">
                <link.icon size={20} color={link.color} className="mr-3" />
                <Text className="font-medium text-gray-800">{link.label}</Text>
              </View>
              <Text className="text-gray-400">→</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default Profile;