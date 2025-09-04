import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Flame,
  Target,
  TrendingUp,
  Star,
  Award,
  MessageCircle,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// TODO: Fix routing problem with "index"
const index: React.FC = () => {
  const userStats = {
    currentWeight: 75.2,
    targetWeight: 70,
    startWeight: 85,
    streak: 12,
    level: 8,
    xp: 1240,
    xpToNext: 1500,
    mealsLogged: 156,
    caloriesConsumed: 1850,
    caloriesTarget: 2000,
    macrosHit: 8,
    macrosTarget: 10,
  };

  const progressPercentage =
    ((userStats.startWeight - userStats.currentWeight) /
      (userStats.startWeight - userStats.targetWeight)) *
    100;
  const xpPercentage = (userStats.xp / userStats.xpToNext) * 100;

  return (
    <SafeAreaView className="flex-1 bg-purple-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Header */}
        <View className="bg-purple-600 p-6 rounded-b-3xl">
          <View className="flex-row items-center justify-between mb-4">
            <View>
              <Text className="text-2xl font-bold text-white">CalorAI</Text>
              <Text className="text-purple-100">
                Your nutrition companion
              </Text>
            </View>
            <View className="items-end">
              <View className="flex-row items-center mb-1">
                <Star color="#facc15" size={20} />
                <Text className="text-lg font-bold text-white ml-2">
                  Level {userStats.level}
                </Text>
              </View>
              <Text className="text-sm text-purple-100">
                {userStats.xp} / {userStats.xpToNext} XP
              </Text>
            </View>
          </View>

          {/* XP Progress Bar */}
          <View className="w-full bg-purple-700 rounded-full h-3 mb-4">
            <View
              className="bg-yellow-400 h-3 rounded-full"
              style={{ width: `${xpPercentage}%` }}
            />
          </View>

          {/* Current Streak */}
          <View className="flex-row items-center justify-center bg-white/20 rounded-xl p-3">
            <Flame color="#fb923c" size={24} />
            <Text className="ml-2 text-lg font-semibold text-white">
              {userStats.streak} day streak!
            </Text>
          </View>
        </View>

        <View className="p-6 space-y-6">
          {/* Weight Progress Card */}
          <View className="bg-white rounded-2xl p-6 shadow">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-xl font-bold text-gray-800">
                Weight Journey
              </Text>
              <Target color="#10b981" size={24} />
            </View>

            <View className="flex-row justify-between items-center mb-4">
              <View className="items-center">
                <Text className="text-2xl font-bold text-gray-800">
                  {userStats.currentWeight}kg
                </Text>
                <Text className="text-sm text-gray-500">Current</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-emerald-600">
                  {userStats.targetWeight}kg
                </Text>
                <Text className="text-sm text-gray-500">Target</Text>
              </View>
            </View>

            <View className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <View
                className="bg-emerald-500 h-4 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </View>
            <Text className="text-center text-sm text-gray-600">
              {progressPercentage.toFixed(1)}% to goal
            </Text>
          </View>

          {/* Today's Summary */}
          <View className="bg-white rounded-2xl p-6 shadow">
            <Text className="text-xl font-bold text-gray-800 mb-4">
              Today&apos;s Progress
            </Text>

            <View className="flex-row gap-4">
              <View className="flex-1 items-center p-4 bg-blue-50 rounded-xl">
                <Text className="text-2xl font-bold text-blue-600">
                  {userStats.caloriesConsumed}
                </Text>
                <Text className="text-sm text-gray-600">Calories</Text>
                <Text className="text-xs text-gray-500">
                  / {userStats.caloriesTarget}
                </Text>
              </View>
              <View className="flex-1 items-center p-4 bg-emerald-50 rounded-xl">
                <Text className="text-2xl font-bold text-emerald-600">
                  {userStats.macrosHit}/{userStats.macrosTarget}
                </Text>
                <Text className="text-sm text-gray-600">Macros Hit</Text>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View className="flex-row gap-4">
            <TouchableOpacity className="flex-1 bg-purple-600 p-6 rounded-2xl shadow">
              <TrendingUp size={32} color="white" />
              <Text className="font-bold text-lg text-white mt-2">
                Progress Tree
              </Text>
              <Text className="text-purple-100 text-sm">
                View your journey
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 bg-emerald-600 p-6 rounded-2xl shadow">
              <Award size={32} color="white" />
              <Text className="font-bold text-lg text-white mt-2">
                Achievements
              </Text>
              <Text className="text-emerald-100 text-sm">
                Streaks & badges
              </Text>
            </TouchableOpacity>
          </View>

          {/* Chat with Cal-ee */}
          <TouchableOpacity className="bg-pink-500 p-6 rounded-2xl shadow">
            <View className="flex-row items-center">
              <View className="bg-white/20 p-3 rounded-full mr-4">
                <MessageCircle size={24} color="white" />
              </View>
              <View>
                <Text className="font-bold text-lg text-white">
                  Chat with Cal-ee
                </Text>
                <Text className="text-orange-100 text-sm">
                  Your AI nutritionist is here to help
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Recent Activity */}
          <View className="bg-white rounded-2xl p-6 shadow">
            <Text className="text-xl font-bold text-gray-800 mb-4">
              Recent Activity
            </Text>
            <View className="space-y-3">
              <View className="flex-row items-center justify-between p-3 bg-emerald-50 rounded-xl">
                <View className="flex-row items-center">
                  <View className="w-3 h-3 bg-emerald-500 rounded-full mr-3" />
                  <Text className="font-medium">Breakfast logged</Text>
                </View>
                <Text className="text-sm text-gray-500">2 hours ago</Text>
              </View>
              <View className="flex-row items-center justify-between p-3 bg-blue-50 rounded-xl">
                <View className="flex-row items-center">
                  <View className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                  <Text className="font-medium">Weight updated</Text>
                </View>
                <Text className="text-sm text-gray-500">Yesterday</Text>
              </View>
              <View className="flex-row items-center justify-between p-3 bg-yellow-50 rounded-xl">
                <View className="flex-row items-center">
                  <View className="w-3 h-3 bg-yellow-500 rounded-full mr-3" />
                  <Text className="font-medium">Badge earned</Text>
                </View>
                <Text className="text-sm text-gray-500">2 days ago</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;