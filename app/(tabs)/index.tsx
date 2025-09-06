import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from "react-native";
import {
  Target,
  TrendingUp,
  Award,
  MessageCircle,
  Trophy,
  Crown,
  Sparkles,
  Shield,
  Gem,
  Rocket,
  Flame,
} from "lucide-react-native";
import {} from "react-native-safe-area-context";

const Dashboard: React.FC = () => {
  const floatAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

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

  useEffect(() => {
    // Floating animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -5,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.04,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Rotation animation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 12000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Header with 3D Elements */}
        <View className="bg-gradient-to-br from-blueViolet via-deepTeal to-blackCherry px-4 py-4 rounded-b-3xl relative overflow-hidden mx-1 mt-1 shadow-sm">
          {/* 3D Geometric Background */}
          <View className="absolute inset-0 opacity-5">
            <View className="absolute top-5 left-5 w-10 h-10 bg-mangoYellow rounded-xl transform rotate-45" />
            <View className="absolute top-16 right-6 w-6 h-6 bg-coralRed rounded-full" />
            <View className="absolute bottom-10 left-10 w-5 h-5 bg-mintGreen transform rotate-12" />
          </View>

          {/* Floating 3D Crystal */}
          <Animated.View
            className="absolute top-3 right-3 z-10"
            style={{
              transform: [
                { translateY: floatAnim },
                { rotate: spin },
                { scale: pulseAnim },
              ],
            }}
          >
            <View className="relative shadow-md">
              <View className="w-9 h-9 bg-gradient-to-br from-mangoYellow via-coralRed to-melonMist rounded-lg transform rotate-45 shadow-sm" />
              <View className="absolute inset-1 bg-blackCherry/20 rounded-md transform rotate-45" />
              <View className="absolute inset-2 bg-blackCherry/10 rounded-sm transform rotate-45" />
            </View>
          </Animated.View>

          <View className="flex-row items-center justify-between mb-3 relative z-20">
            <View className="flex-1">
              <View className="flex-row items-center mb-1">
                <Text className="text-2xl font-black text-blackCherry">
                  CalorAI
                </Text>
                <Animated.View
                  className="ml-2"
                  style={{ transform: [{ scale: pulseAnim }] }}
                >
                  <Flame color="#49061A" size={16} fill="#49061A" />
                </Animated.View>
              </View>
              <Text className="text-blackCherry font-bold text-sm">
                Level Up Your Nutrition
              </Text>
            </View>

            <View className="items-end">
              <TouchableOpacity className="bg-gradient-to-r from-mangoYellow to-coralRed rounded-xl px-3 py-2 mb-2 shadow-md">
                <View className="flex-row items-center">
                  <Crown color="#49061A" size={12} fill="#49061A" />
                  <Text className="text-sm font-black text-blackCherry mx-2">
                    LVL {userStats.level}
                  </Text>
                  <Sparkles color="#49061A" size={10} fill="#49061A" />
                </View>
              </TouchableOpacity>
              <Text className="text-blackCherry font-bold text-xs bg-gray-200 rounded-full px-2 py-1 shadow-sm">
                {userStats.xp} / {userStats.xpToNext} XP
              </Text>
            </View>
          </View>

          {/* Enhanced XP Progress Bar */}
          <View className="mb-3 relative">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-blackCherry font-black text-sm">
                Experience Points
              </Text>
              <Text className="text-blackCherry font-black text-sm bg-gray-200 rounded-full px-2 py-1 shadow-sm">
                {xpPercentage.toFixed(0)}%
              </Text>
            </View>
            <View className="w-full bg-blackCherry/30 rounded-full h-4 relative overflow-hidden shadow-inner">
              <View
                className="bg-gradient-to-r from-mangoYellow via-blackCherry to-melonMist h-4 rounded-full relative shadow-sm"
                style={{ width: `${xpPercentage}%` }}
              >
                <View className="absolute inset-0 bg-gradient-to-r from-coralRed/20 to-transparent rounded-full" />
                <Animated.View
                  className="absolute right-1 top-1 w-2 h-2 bg-blackCherry rounded-full shadow-sm"
                  style={{ transform: [{ scale: pulseAnim }] }}
                />
              </View>
            </View>
          </View>

          {/* Epic Streak Counter */}
          <TouchableOpacity className="bg-gradient-to-r from-coralRed via-melonMist to-mangoYellow rounded-2xl p-4 relative overflow-hidden shadow-md">
            <View className="absolute inset-0 bg-gradient-to-r from-blackCherry/5 to-transparent" />
            <View className="absolute top-2 right-2">
              <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <Shield color="#49061A" size={18} />
              </Animated.View>
            </View>

            <View className="flex-row items-center justify-center relative z-10">
              <View className="bg-blackCherry/20 rounded-xl p-2 mr-3 shadow-sm">
                <Flame color="#49061A" size={18} fill="#49061A" />
              </View>
              <View className="items-center">
                <Text className="text-xl font-black text-blackCherry mb-1">
                  {userStats.streak}
                </Text>
                <Text className="text-blackCherry font-black text-sm tracking-wider">
                  FIRE STREAK
                </Text>
                <Text className="text-blackCherry font-semibold text-xs">
                  Legendary Status!
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View className="p-3 space-y-10">
          {/* 3D Weight Progress Arena */}
          <View className="bg-gray-100 rounded-3xl p-4 border border-mintGreen/30 relative overflow-hidden shadow-md flex-col flex">
            {/* 3D Background Elements */}
            <View className="absolute top-2 right-2">
              <Animated.View
                style={{
                  transform: [{ translateY: floatAnim }, { rotate: spin }],
                }}
              >
                <View className="w-10 h-10 bg-gradient-to-br from-mintGreen/10 to-malachiteGreen/10 rounded-xl transform rotate-45 shadow-sm" />
              </Animated.View>
            </View>

            <View className="flex-row items-center justify-between mb-4 relative z-10">
              <View className="flex-1">
                <Text className="text-lg font-black text-blackCherry mb-1">
                  Weight Arena
                </Text>
                <Text className="text-gray-700 font-bold text-sm">
                  Champion Mode Active!
                </Text>
              </View>
              <View className="bg-gradient-to-br from-mintGreen to-malachiteGreen rounded-2xl p-2 shadow-sm">
                <Target color="#49061A" size={18} />
              </View>
            </View>

            <View className="flex-row justify-between items-center mb-4">
              <TouchableOpacity className="items-center bg-gradient-to-br from-blueViolet/5 to-blueViolet/10 rounded-2xl p-4 flex-1 mr-2 border border-blueViolet/15 shadow-sm">
                <View className="bg-blueViolet/15 rounded-xl p-2 mb-2 shadow-sm">
                  <Text className="text-lg">⚖️</Text>
                </View>
                <Text className="text-2xl font-black text-blackCherry mb-1">
                  {userStats.currentWeight}
                </Text>
                <Text className="text-sm font-black text-blueViolet">kg</Text>
                <Text className="text-blackCherry font-black text-xs mt-2 bg-blueViolet/8 rounded-full px-2 py-1 shadow-sm">
                  CURRENT
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="items-center bg-gradient-to-br from-mintGreen/8 to-malachiteGreen/12 rounded-2xl p-4 flex-1 ml-2 border border-mintGreen/20 shadow-sm">
                <View className="bg-mintGreen/15 rounded-xl p-2 mb-2 shadow-sm">
                  <Text className="text-lg">🏆</Text>
                </View>
                <Text className="text-2xl font-black text-blackCherry mb-1">
                  {userStats.targetWeight}
                </Text>
                <Text className="text-sm font-black text-malachiteGreen">
                  kg
                </Text>
                <Text className="text-blackCherry font-black text-xs mt-2 bg-mintGreen/10 rounded-full px-2 py-1 shadow-sm">
                  TARGET
                </Text>
              </TouchableOpacity>
            </View>

            {/* Epic Progress Bar */}
            <View className="mb-2 relative">
              <View className="flex-row justify-between items-center mb-2">
                <Text className="font-black text-blackCherry text-sm">
                  Mission Progress
                </Text>
                <View className="bg-gradient-to-r from-malachiteGreen to-mintGreen rounded-full px-2 py-1 shadow-sm">
                  <Text className="font-black text-blackCherry text-sm">
                    {progressPercentage.toFixed(1)}%
                  </Text>
                </View>
              </View>
              <View className="w-full bg-gray-300 rounded-full h-4 relative overflow-hidden shadow-inner">
                <View
                  className="bg-gradient-to-r from-mintGreen via-malachiteGreen to-mintGreen h-4 rounded-full relative shadow-sm"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <View className="absolute inset-0 bg-gradient-to-r from-blackCherry/10 to-transparent rounded-full" />
                  <Animated.View
                    className="absolute right-1 top-1 w-2 h-2 bg-blackCherry rounded-full shadow-sm"
                    style={{ transform: [{ scale: pulseAnim }] }}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Gaming Dashboard */}
          <View className="bg-gray-100 rounded-3xl p-4 border border-coralRed/20 relative overflow-hidden shadow-md">
            <View className="absolute bottom-2 right-2">
              <Animated.View
                style={{
                  transform: [{ translateY: pulseAnim }, { rotate: spin }],
                }}
              >
                <Rocket color="#F95341" size={24} />
              </Animated.View>
            </View>

            <Text className="text-lg font-black text-blackCherry mb-4 relative z-10">
              Battle Stats Today
            </Text>

            <View className="flex-row gap-3 relative z-10">
              <TouchableOpacity className="flex-1 items-center p-4 bg-gradient-to-br from-coralRed/5 to-coralRed/10 rounded-2xl border border-coralRed/20 shadow-sm">
                <View className="bg-coralRed/15 rounded-xl p-2 mb-2 shadow-sm">
                  <Text className="text-xl">🔥</Text>
                </View>
                <Text className="text-xl font-black text-blackCherry mb-1">
                  {userStats.caloriesConsumed}
                </Text>
                <Text className="text-blackCherry font-black text-xs tracking-wider">
                  CALORIES
                </Text>
                <View className="bg-coralRed/8 rounded-full px-2 py-1 mt-1 shadow-sm">
                  <Text className="text-blackCherry font-bold text-xs">
                    / {userStats.caloriesTarget} goal
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="flex-1 items-center p-4 bg-gradient-to-br from-mangoYellow/8 to-mangoYellow/15 rounded-2xl border border-mangoYellow/25 shadow-sm">
                <View className="bg-mangoYellow/20 rounded-xl p-2 mb-2 shadow-sm">
                  <Text className="text-xl">⭐</Text>
                </View>
                <Text className="text-xl font-black text-blackCherry mb-1">
                  {userStats.macrosHit}/{userStats.macrosTarget}
                </Text>
                <Text className="text-blackCherry font-black text-xs tracking-wider">
                  MACROS
                </Text>
                <View className="bg-mangoYellow/10 rounded-full px-2 py-1 mt-1 shadow-sm">
                  <Text className="text-blackCherry font-bold text-xs">
                    {userStats.macrosTarget - userStats.macrosHit} to unlock
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Power-Up Actions */}
          <View className="flex-row gap-3">
            <TouchableOpacity className="flex-1 bg-gradient-to-br from-blueViolet via-deepTeal to-blackCherry p-4 rounded-2xl relative overflow-hidden shadow-md">
              <View className="absolute bottom-1 right-1 opacity-10">
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                  <TrendingUp size={32} color="#49061A" />
                </Animated.View>
              </View>
              <View className="bg-blackCherry/10 rounded-xl p-2 self-start mb-3 relative z-10 shadow-sm">
                <TrendingUp size={18} color="#49061A" />
              </View>
              <Text className="font-black text-base text-blackCherry mb-1 relative z-10">
                Progress
              </Text>
              <Text className="text-blackCherry text-xs font-bold relative z-10">
                Tree Adventure
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 bg-gradient-to-br from-mintGreen via-malachiteGreen to-mintGreen p-4 rounded-2xl relative overflow-hidden shadow-md">
              <View className="absolute bottom-1 right-1 opacity-10">
                <Animated.View
                  style={{ transform: [{ translateY: floatAnim }] }}
                >
                  <Award size={32} color="#49061A" />
                </Animated.View>
              </View>
              <View className="bg-blackCherry/10 rounded-xl p-2 self-start mb-3 relative z-10 shadow-sm">
                <Award size={18} color="#49061A" />
              </View>
              <Text className="font-black text-base text-blackCherry mb-1 relative z-10">
                Rewards
              </Text>
              <Text className="text-blackCherry text-xs font-bold relative z-10">
                Hall of Fame
              </Text>
            </TouchableOpacity>
          </View>

          {/* AI Companion Portal */}
          <TouchableOpacity className="bg-gradient-to-r from-coralRed via-melonMist to-mangoYellow p-4 rounded-2xl relative overflow-hidden shadow-md">
            <View className="absolute top-2 right-2">
              <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                <Gem color="#49061A" size={24} />
              </Animated.View>
            </View>
            <View className="flex-row items-center relative z-10">
              <View className="bg-blackCherry/15 p-3 rounded-xl mr-3 shadow-sm">
                <MessageCircle size={20} color="#49061A" />
              </View>
              <View className="flex-1">
                <Text className="font-black text-base text-blackCherry mb-1">
                  Cal-ee Portal
                </Text>
                <Text className="text-blackCherry font-bold text-sm">
                  Your AI Nutritionist!
                </Text>
              </View>
              <View className="bg-blackCherry/10 rounded-lg p-2 shadow-sm">
                <Text className="text-base">✨</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Activity Feed Arena */}
          <View className="bg-gray-100 rounded-3xl p-4 border border-gray-300 relative overflow-hidden shadow-md">
            <View className="absolute top-2 right-2">
              <Animated.View
                style={{
                  transform: [{ translateY: floatAnim }, { rotate: spin }],
                }}
              >
                <Trophy color="#7843FF" size={28} />
              </Animated.View>
            </View>

            <Text className="text-lg font-black text-blackCherry mb-4 relative z-10">
              Victory Log
            </Text>

            <View className="flex flex-col gap-3 relative z-10">
              <TouchableOpacity className="flex-row items-center justify-between p-3 bg-gradient-to-r from-mintGreen/5 to-mintGreen/10 rounded-xl border border-mintGreen/20 shadow-sm">
                <View className="flex-row items-center flex-1">
                  <View className="w-3 h-3 bg-mintGreen rounded-full mr-3 shadow-sm" />
                  <View className="flex-1">
                    <Text className="font-black text-blackCherry text-sm">
                      Breakfast Quest
                    </Text>
                    <Text className="text-gray-600 font-bold text-xs">
                      +50 XP earned • Combo x2!
                    </Text>
                  </View>
                </View>
                <Text className="text-gray-500 font-black text-xs bg-gray-200 rounded-full px-2 py-1 shadow-sm">
                  2h ago
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="flex-row items-center justify-between p-3 bg-gradient-to-r from-blueViolet/5 to-blueViolet/10 rounded-xl border border-blueViolet/20 shadow-sm">
                <View className="flex-row items-center flex-1">
                  <View className="w-3 h-3 bg-blueViolet rounded-full mr-3 shadow-sm" />
                  <View className="flex-1">
                    <Text className="font-black text-blackCherry text-sm">
                      Weight Updated
                    </Text>
                    <Text className="text-gray-600 font-bold text-xs">
                      Milestone achieved! +100 XP
                    </Text>
                  </View>
                </View>
                <Text className="text-gray-500 font-black text-xs bg-gray-200 rounded-full px-2 py-1 shadow-sm">
                  Yesterday
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="flex-row items-center justify-between p-3 bg-gradient-to-r from-mangoYellow/8 to-mangoYellow/15 rounded-xl border border-mangoYellow/25 shadow-sm">
                <View className="flex-row items-center flex-1">
                  <View className="w-3 h-3 bg-mangoYellow rounded-full mr-3 shadow-md" />
                  <View className="flex-1">
                    <Text className="font-black text-blackCherry text-sm">
                      Epic Achievement
                    </Text>
                    <Text className="text-gray-600 font-bold text-xs">
                      Week Warrior Badge Unlocked!
                    </Text>
                  </View>
                </View>
                <Text className="text-gray-500 font-black text-xs bg-gray-200 rounded-full px-2 py-1 shadow-sm">
                  2 days ago
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
