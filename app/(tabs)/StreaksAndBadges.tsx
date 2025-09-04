import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowLeft,
  Flame,
  Trophy,
  Star,
  Zap,
  Target,
  Crown,
  Shield,
} from "lucide-react-native";

const StreaksAndBadges: React.FC = () => {
  const currentStreak = 12;
  const longestStreak = 28;
  const totalDaysLogged = 156;

  const streakMilestones = [
    { days: 7, label: "First Week", completed: true, reward: 50 },
    { days: 14, label: "Two Weeks Strong", completed: true, reward: 100 },
    { days: 30, label: "Monthly Champion", completed: false, reward: 250 },
    { days: 60, label: "Consistency Master", completed: false, reward: 500 },
    { days: 100, label: "Century Club", completed: false, reward: 1000 },
  ];

  const badges = [
    {
      id: "first-meal",
      name: "First Meal",
      description: "Logged your first meal",
      icon: Target,
      earned: true,
      rarity: "common",
      earnedDate: "2024-01-01",
    },
    {
      id: "macro-master",
      name: "Macro Master",
      description: "Hit all macros for 7 days straight",
      icon: Trophy,
      earned: true,
      rarity: "rare",
      earnedDate: "2024-01-15",
    },
    {
      id: "consistency-king",
      name: "Consistency King",
      description: "Logged meals for 30 days straight",
      icon: Crown,
      earned: false,
      rarity: "legendary",
      earnedDate: null,
    },
    {
      id: "weekend-warrior",
      name: "Weekend Warrior",
      description: "Maintained diet discipline on weekends",
      icon: Shield,
      earned: true,
      rarity: "uncommon",
      earnedDate: "2024-02-10",
    },
    {
      id: "early-bird",
      name: "Early Bird",
      description: "Logged breakfast before 8 AM for 10 days",
      icon: Star,
      earned: true,
      rarity: "uncommon",
      earnedDate: "2024-02-20",
    },
    {
      id: "protein-champion",
      name: "Protein Champion",
      description: "Met protein goals for 14 days straight",
      icon: Zap,
      earned: false,
      rarity: "rare",
      earnedDate: null,
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "from-gray-400 to-gray-500";
      case "uncommon":
        return "from-green-400 to-green-500";
      case "rare":
        return "from-blue-400 to-blue-500";
      case "legendary":
        return "from-purple-400 to-pink-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "border-gray-300";
      case "uncommon":
        return "border-green-300";
      case "rare":
        return "border-blue-300";
      case "legendary":
        return "border-purple-300";
      default:
        return "border-gray-300";
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-purple-50 to-emerald-50">
      {/* Header */}
      <View className="bg-gradient-to-r from-purple-600 to-emerald-600 p-6">
        <View className="flex-row items-center mb-4">
          <TouchableOpacity className="mr-4 p-2 rounded-full bg-white/10">
            <ArrowLeft size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-white">Achievements</Text>
        </View>
        <Text className="text-purple-100">
          Your streaks, badges, and rewards
        </Text>
      </View>

      <ScrollView contentContainerClassName="p-6 space-y-6 pb-20">
        {/* Current Streak Card */}
        <View className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-6 shadow-lg">
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row items-center">
              <View className="bg-white/20 p-3 rounded-full mr-4">
                <Flame size={28} color="white" />
              </View>
              <View>
                <Text className="text-2xl font-bold text-white">
                  {currentStreak} Days
                </Text>
                <Text className="text-orange-100">Current Streak</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-lg font-bold text-white">
                {longestStreak}
              </Text>
              <Text className="text-sm text-orange-100">Best</Text>
            </View>
          </View>

          <View className="bg-white/20 rounded-xl p-4">
            <View className="flex-row justify-between mb-2">
              <Text className="text-white text-sm">Next Milestone</Text>
              <Text className="text-white text-sm">
                {currentStreak}/30 days
              </Text>
            </View>
            <View className="w-full h-3 rounded-full bg-orange-600">
              <View
                className="bg-white h-3 rounded-full"
                style={{ width: `${(currentStreak / 30) * 100}%` }}
              />
            </View>
          </View>
        </View>

        {/* Streak Milestones */}
        <View className="bg-white rounded-2xl p-6 shadow-lg">
          <Text className="text-xl font-bold text-gray-800 mb-4">
            Streak Milestones
          </Text>
          <View className="space-y-4">
            {streakMilestones.map((milestone) => (
              <View
                key={milestone.days}
                className={`flex-row items-center p-4 rounded-xl border-2 ${
                  milestone.completed
                    ? "bg-emerald-50 border-emerald-200"
                    : currentStreak >= milestone.days
                    ? "bg-yellow-50 border-yellow-200"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <View
                  className={`w-12 h-12 rounded-full items-center justify-center mr-4 ${
                    milestone.completed
                      ? "bg-emerald-500"
                      : currentStreak >= milestone.days
                      ? "bg-yellow-500"
                      : "bg-gray-300"
                  }`}
                >
                  {milestone.completed ? (
                    <Trophy size={20} color="white" />
                  ) : (
                    <Text className="font-bold text-gray-700">
                      {milestone.days}
                    </Text>
                  )}
                </View>
                <View className="flex-1">
                  <Text className="font-semibold text-gray-800">
                    {milestone.label}
                  </Text>
                  <Text className="text-sm text-gray-600">
                    {milestone.days} days consecutive logging
                  </Text>
                  <Text className="text-xs text-purple-600 font-medium">
                    +{milestone.reward} XP
                  </Text>
                </View>
                {milestone.completed && (
                  <Trophy size={20} color="#10B981" />
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Badge Collection */}
        <View className="bg-white rounded-2xl p-6 shadow-lg">
          <View className="flex-row justify-between mb-4">
            <Text className="text-xl font-bold text-gray-800">
              Badge Collection
            </Text>
            <Text className="text-sm text-gray-600">
              {badges.filter((b) => b.earned).length}/{badges.length}
            </Text>
          </View>
          <View className="flex-row flex-wrap -mx-2">
            {badges.map((badge) => (
              <View
                key={badge.id}
                className={`relative w-1/2 px-2 mb-4`}
              >
                <View
                  className={`p-4 rounded-xl border-2 ${
                    badge.earned
                      ? `bg-gradient-to-br ${getRarityColor(
                          badge.rarity
                        )} shadow-lg`
                      : `bg-gray-100 ${getRarityBorder(
                          badge.rarity
                        )} opacity-60`
                  }`}
                >
                  {badge.earned && (
                    <View className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1">
                      <Star size={12} color="#92400E" />
                    </View>
                  )}
                  <View className="items-center">
                    <View
                      className={`w-16 h-16 mb-3 rounded-full items-center justify-center ${
                        badge.earned ? "bg-white/20" : "bg-gray-200"
                      }`}
                    >
                      <badge.icon
                        size={24}
                        color={badge.earned ? "white" : "#9CA3AF"}
                      />
                    </View>
                    <Text
                      className={`font-bold text-sm mb-1 ${
                        badge.earned ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {badge.name}
                    </Text>
                    <Text
                      className={`text-xs text-center ${
                        badge.earned ? "text-white/80" : "text-gray-400"
                      }`}
                    >
                      {badge.description}
                    </Text>
                    {badge.earned && badge.earnedDate && (
                      <Text className="text-xs text-white/60 mt-2">
                        Earned:{" "}
                        {new Date(badge.earnedDate).toLocaleDateString()}
                      </Text>
                    )}
                    <View
                      className={`px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                        badge.earned
                          ? "bg-white/20 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      <Text>{badge.rarity}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Statistics */}
        <View className="bg-white rounded-2xl p-6 shadow-lg">
          <Text className="text-xl font-bold text-gray-800 mb-4">
            Your Stats
          </Text>
          <View className="flex-row -mx-2">
            <View className="flex-1 mx-2 p-4 bg-purple-50 rounded-xl items-center">
              <Text className="text-2xl font-bold text-purple-600">
                {totalDaysLogged}
              </Text>
              <Text className="text-sm text-gray-600">Days Logged</Text>
            </View>
            <View className="flex-1 mx-2 p-4 bg-emerald-50 rounded-xl items-center">
              <Text className="text-2xl font-bold text-emerald-600">
                {badges.filter((b) => b.earned).length}
              </Text>
              <Text className="text-sm text-gray-600">Badges Earned</Text>
            </View>
            <View className="flex-1 mx-2 p-4 bg-orange-50 rounded-xl items-center">
              <Text className="text-2xl font-bold text-orange-600">
                {longestStreak}
              </Text>
              <Text className="text-sm text-gray-600">Best Streak</Text>
            </View>
          </View>
        </View>

        {/* Next Rewards Preview */}
        <View className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 shadow-lg">
          <Text className="text-lg font-bold text-white mb-3">
            Coming Up Next
          </Text>
          <View className="space-y-3">
            <View className="flex-row justify-between items-center bg-white/20 rounded-xl p-3">
              <View className="flex-row items-center">
                <Crown size={20} color="#FACC15" className="mr-3" />
                <View>
                  <Text className="font-semibold text-white">
                    Monthly Champion
                  </Text>
                  <Text className="text-sm text-purple-100">
                    30 day streak
                  </Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-sm font-medium text-white">
                  {Math.max(0, 30 - currentStreak)} days left
                </Text>
                <Text className="text-xs text-purple-100">+250 XP</Text>
              </View>
            </View>
            <View className="flex-row justify-between items-center bg-white/20 rounded-xl p-3">
              <View className="flex-row items-center">
                <Shield size={20} color="#93C5FD" className="mr-3" />
                <View>
                  <Text className="font-semibold text-white">
                    Protein Champion
                  </Text>
                  <Text className="text-sm text-purple-100">
                    14 days meeting protein goals
                  </Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-sm font-medium text-white">
                  Not started
                </Text>
                <Text className="text-xs text-purple-100">+150 XP</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StreaksAndBadges;