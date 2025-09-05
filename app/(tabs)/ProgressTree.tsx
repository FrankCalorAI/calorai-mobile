import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeft,
  Crown,
  Trophy,
  Target,
  Star,
  Zap,
  Award,
} from "lucide-react-native";

const ProgressTree: React.FC = () => {
  const navigation = useNavigation();

  const progressData = [
    {
      date: "2024-01-01",
      weight: 85,
      onTrack: true,
      milestone: "start",
      title: "Journey Begins!",
      description: "Starting weight recorded",
      xpEarned: 50,
      badgeEarned: "First Step",
    },
    {
      date: "2024-01-07",
      weight: 84.5,
      onTrack: true,
      milestone: "week1",
      title: "First Week Champion",
      description: "7 days of consistent logging",
      xpEarned: 100,
      badgeEarned: "Week Warrior",
    },
    // ... rest of your data
    {
      date: "2024-04-15",
      weight: 75.2,
      onTrack: true,
      milestone: "current",
      title: "Current Position",
      description: "You are here! Keep going!",
      xpEarned: 100,
      badgeEarned: null,
    },
  ];

  const totalXP = progressData.reduce((sum, point) => sum + point.xpEarned, 0);
  const startWeight = progressData[0].weight;
  const currentWeight = progressData[progressData.length - 1].weight;
  const targetWeight = 70;
  const progressPercentage =
    ((startWeight - currentWeight) / (startWeight - targetWeight)) * 100;

  const getMilestoneIcon = (milestone: string | null, onTrack: boolean) => {
    if (milestone === "start") return <Crown color="#9333ea" size={24} />;
    if (milestone === "current") return <Target color="#059669" size={24} />;
    if (milestone?.includes("month"))
      return <Trophy color="#facc15" size={24} />;
    if (milestone?.includes("week")) return <Award color="#3b82f6" size={24} />;
    return null;
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-purple-50 to-emerald-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Header */}
        <View className="bg-gradient-to-r from-purple-600 to-emerald-600 p-6">
          <View className="flex-row items-center mb-4">
            <TouchableOpacity
              className="mr-4 p-2 rounded-full bg-white/20"
              onPress={() => navigation.goBack()}
            >
              <ArrowLeft size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-2xl font-bold text-black">Progress Tree</Text>
          </View>
          <Text className="text-purple-100">Your epic weight loss quest</Text>
        </View>

        {/* Progress Summary */}
        <View className="p-6">
          <View className="bg-white rounded-2xl p-6 shadow-lg mb-6 border-2 border-purple-100">
            <View className="items-center mb-4">
              <Text className="text-2xl font-bold text-gray-800 mb-2">
                Quest Progress
              </Text>
              <View className="flex-row items-center justify-center mb-4">
                <Star color="#facc15" size={24} />
                <Text className="text-xl font-bold text-purple-600 ml-2">
                  {totalXP.toLocaleString()} XP Earned
                </Text>
              </View>
            </View>

            <View className="flex-row justify-between mb-4">
              <View className="p-3 bg-purple-50 rounded-xl items-center flex-1 mx-1">
                <Text className="text-2xl font-bold text-purple-600">
                  {startWeight}kg
                </Text>
                <Text className="text-sm text-gray-500">Quest Start</Text>
              </View>
              <View className="p-3 bg-emerald-50 rounded-xl items-center flex-1 mx-1">
                <Text className="text-2xl font-bold text-emerald-600">
                  {currentWeight}kg
                </Text>
                <Text className="text-sm text-gray-500">Current Level</Text>
              </View>
              <View className="p-3 bg-orange-50 rounded-xl items-center flex-1 mx-1">
                <Text className="text-2xl font-bold text-orange-600">
                  {targetWeight}kg
                </Text>
                <Text className="text-sm text-gray-500">Final Boss</Text>
              </View>
            </View>

            {/* Progress bar */}
            <View className="mt-4">
              <View className="flex-row justify-between mb-2">
                <Text className="font-medium">Quest Completion</Text>
                <Text className="font-bold text-emerald-600">
                  {progressPercentage.toFixed(1)}%
                </Text>
              </View>
              <View className="w-full bg-gray-200 rounded-full h-6 border-2 border-gray-300 overflow-hidden">
                <View
                  className="bg-emerald-600 h-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </View>
            </View>
          </View>

          {/* Progress Timeline */}
          <View className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100">
            <View className="flex-row justify-between mb-6 items-center">
              <Text className="text-xl font-bold text-gray-800">
                Adventure Timeline
              </Text>
              <View className="flex-row items-center bg-purple-50 px-3 py-1 rounded-full">
                <Zap color="#9333ea" size={16} />
                <Text className="text-sm font-medium text-purple-600 ml-1">
                  {totalXP.toLocaleString()} XP
                </Text>
              </View>
            </View>

            {progressData.map((point) => (
              <View key={point.date} className="flex-row mb-6">
                <View className="w-16 h-16 rounded-full items-center justify-center bg-emerald-100">
                  {getMilestoneIcon(point.milestone, point.onTrack) || (
                    <Text className="font-bold text-emerald-600">
                      {point.weight}
                    </Text>
                  )}
                </View>
                <View className="ml-4 flex-1">
                  <Text className="font-bold text-gray-800">{point.title}</Text>
                  <Text className="text-sm text-gray-600">
                    {point.description}
                  </Text>
                  <Text className="text-xs text-gray-500 mt-1">
                    {new Date(point.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProgressTree;
