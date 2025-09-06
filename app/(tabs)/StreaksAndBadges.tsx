import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Animated,
} from "react-native";
import {
  ArrowLeft,
  Flame,
  Trophy,
  Star,
  Zap,
  Target,
  Crown,
  Shield,
  Award,
  Calendar,
  TrendingUp,
} from "lucide-react-native";

const StreaksAndBadges: React.FC = () => {
  const flameAnim = useRef(new Animated.Value(1)).current;

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
      name: "First Steps",
      description: "Logged your first meal",
      icon: Target,
      earned: true,
      rarity: "common",
      earnedDate: "2024-01-01",
      category: "Getting Started",
    },
    {
      id: "macro-master",
      name: "Macro Master",
      description: "Perfect macro balance for 7 days",
      icon: Trophy,
      earned: true,
      rarity: "rare",
      earnedDate: "2024-01-15",
      category: "Nutrition",
    },
    {
      id: "consistency-king",
      name: "Consistency King",
      description: "30 day logging streak",
      icon: Crown,
      earned: false,
      rarity: "legendary",
      earnedDate: null,
      category: "Dedication",
    },
    {
      id: "weekend-warrior",
      name: "Weekend Warrior",
      description: "Weekend discipline maintained",
      icon: Shield,
      earned: true,
      rarity: "uncommon",
      earnedDate: "2024-02-10",
      category: "Lifestyle",
    },
    {
      id: "early-bird",
      name: "Early Bird",
      description: "10 days of pre-8AM breakfast",
      icon: Star,
      earned: true,
      rarity: "uncommon",
      earnedDate: "2024-02-20",
      category: "Timing",
    },
    {
      id: "protein-champion",
      name: "Protein Pro",
      description: "14 days meeting protein goal",
      icon: Zap,
      earned: false,
      rarity: "rare",
      earnedDate: null,
      category: "Nutrition",
    },
  ];

  const categories = [
    "Getting Started",
    "Nutrition",
    "Dedication",
    "Lifestyle",
    "Timing",
  ];

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(flameAnim, {
          toValue: 1.1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(flameAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const getRarityColors = (rarity: string, earned: boolean) => {
    if (!earned)
      return {
        bg: "bg-gray-200",
        border: "border-gray-400",
        text: "text-gray-500",
      };

    switch (rarity) {
      case "common":
        return {
          bg: "bg-gradient-to-br from-deepTeal to-blackCherry",
          border: "border-deepTeal",
          text: "text-blackCherry",
        };
      case "uncommon":
        return {
          bg: "bg-gradient-to-br from-mintGreen to-malachiteGreen",
          border: "border-mintGreen",
          text: "text-blackCherry",
        };
      case "rare":
        return {
          bg: "bg-gradient-to-br from-blueViolet to-deepTeal",
          border: "border-blueViolet",
          text: "text-blackCherry",
        };
      case "legendary":
        return {
          bg: "bg-gradient-to-br from-coralRed to-mangoYellow",
          border: "border-coralRed",
          text: "text-blackCherry",
        };
      default:
        return {
          bg: "bg-gradient-to-br from-deepTeal to-blackCherry",
          border: "border-deepTeal",
          text: "text-blackCherry",
        };
    }
  };

  const getBadgesByCategory = (category: string) => {
    return badges.filter((badge) => badge.category === category);
  };

  return (
    <SafeAreaView className="flex-1 bg-mangoYellow/15">
      {/* Header */}
      <View className="bg-gradient-to-r from-blueViolet to-deepTeal px-5 py-6 rounded-b-2xl mx-2 mt-2">
        <View className="flex-row items-center">
          <TouchableOpacity className="mr-4 p-2 rounded-xl bg-black/20">
            <ArrowLeft size={22} color="black" />
          </TouchableOpacity>

          <View className="flex-1">
            <Text className="text-2xl font-black text-blackCherry">
              Achievement Center
            </Text>
            <Text className="text-blackCherry/80 font-semibold">
              Track your nutrition journey
            </Text>
          </View>

          <View className="bg-black/20 rounded-xl p-3">
            <Award size={26} color="black" />
          </View>
        </View>
      </View>

      <ScrollView
        className="flex-1 px-3 py-6"
        showsVerticalScrollIndicator={false}
      >
        {/* Current Streak Section */}
        <View className="mb-8">
          <Text className="text-xl font-black text-blackCherry mb-4 px-2">
            Current Progress
          </Text>

          <View className="bg-gradient-to-r from-coralRed to-mangoYellow rounded-2xl p-6 mb-4">
            <View className="flex-row justify-between items-center mb-5">
              <View className="flex-row items-center">
                <View className="bg-black/20 p-3 rounded-xl mr-4">
                  <Animated.View style={{ transform: [{ scale: flameAnim }] }}>
                    <Flame size={28} color="red" fill="white" />
                  </Animated.View>
                </View>
                <View>
                  <Text className="text-3xl font-black text-black">
                    {currentStreak}
                  </Text>
                  <Text className="text-black/80 font-semibold">
                    Day Streak
                  </Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-xl font-black text-black">
                  {longestStreak}
                </Text>
                <Text className="text-black/70 font-semibold">
                  Personal Best
                </Text>
              </View>
            </View>

            <View className="bg-black/20 rounded-xl p-4">
              <View className="flex-row justify-between mb-2">
                <Text className="text-black font-semibold">
                  Next Goal: 30 Days
                </Text>
                <Text className="text-black font-semibold">
                  {currentStreak}/30
                </Text>
              </View>
              <View className="w-full h-3 bg-black/20 rounded-full">
                <View
                  className="bg-black h-3 rounded-full"
                  style={{ width: `${(currentStreak / 30) * 100}%` }}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Milestone Progress */}
        <View className="mb-8">
          <Text className="text-xl font-black text-blackCherry mb-4 px-2">
            Streak Milestones
          </Text>

          <View className="bg-mangoYellow/20 rounded-2xl p-5 border border-gray-500">
            {streakMilestones.map((milestone, index) => (
              <View
                key={milestone.days}
                className={`${
                  index !== streakMilestones.length - 1 ? "mb-4" : ""
                }`}
              >
                <View
                  className={`flex-row items-center p-4 rounded-xl border ${
                    milestone.completed
                      ? "bg-mintGreen/10 border-mintGreen/30"
                      : currentStreak >= milestone.days
                      ? "bg-mangoYellow/10 border-mangoYellow/30"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <View
                    className={`w-12 h-12 rounded-xl items-center justify-center mr-4 ${
                      milestone.completed
                        ? "bg-mintGreen"
                        : currentStreak >= milestone.days
                        ? "bg-mangoYellow"
                        : "bg-gray-300"
                    }`}
                  >
                    {milestone.completed ? (
                      <Trophy size={20} color="yellow" />
                    ) : (
                      <Text className="font-black text-white text-sm">
                        {milestone.days}
                      </Text>
                    )}
                  </View>
                  <View className="flex-1">
                    <Text className="font-black text-gray-900">
                      {milestone.label}
                    </Text>
                    <Text className="text-sm text-gray-700 font-semibold">
                      {milestone.days} consecutive days
                    </Text>
                    <Text className="text-xs text-blueViolet font-black mt-1">
                      +{milestone.reward} XP reward
                    </Text>
                  </View>
                  {milestone.completed && (
                    <View className="bg-mintGreen/20 rounded-lg p-2">
                      <Trophy size={16} color="#0AC655" />
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Badge Collection */}
        {categories.map((category) => {
          const categoryBadges = getBadgesByCategory(category);
          if (categoryBadges.length === 0) return null;

          return (
            <View key={category} className="mb-6">
              <View className="flex-row items-center justify-between mb-3 px-2">
                <Text className="text-lg font-bold text-deepTeal">
                  {category}
                </Text>
                <Text className="text-sm font-semibold text-gray-600">
                  {categoryBadges.filter((b) => b.earned).length}/
                  {categoryBadges.length}
                </Text>
              </View>

              <View className="flex-row flex-wrap -mx-1">
                {categoryBadges.map((badge) => {
                  const colors = getRarityColors(badge.rarity, badge.earned);
                  return (
                    <View key={badge.id} className="w-1/2 px-1 mb-3">
                      <View
                        className={`${colors.bg} p-4 rounded-xl border ${colors.border} relative`}
                      >
                        {badge.earned && (
                          <View className="absolute -top-1 -right-1 bg-mangoYellow rounded-full p-1">
                            <Star size={10} color="white" fill="white" />
                          </View>
                        )}

                        <View className="items-center">
                          <View className="w-14 h-14 mb-3 rounded-xl bg-black/20 items-center justify-center">
                            <badge.icon
                              size={24}
                              color={badge.earned ? "white" : "#6B7280"}
                            />
                          </View>
                          <Text
                            className={`font-black text-sm mb-1 ${colors.text}`}
                          >
                            {badge.name}
                          </Text>
                          <Text
                            className={`text-xs text-center ${colors.text} opacity-80`}
                          >
                            {badge.description}
                          </Text>
                          {badge.earned && badge.earnedDate && (
                            <Text className="text-xs text-black/60 mt-2">
                              {new Date(badge.earnedDate).toLocaleDateString()}
                            </Text>
                          )}
                          <View className="px-2 py-1 rounded-full bg-black/30 mt-2">
                            <Text className="text-xs font-black text-white">
                              {badge.rarity.toUpperCase()}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}

        {/* Stats Dashboard */}
        <View className="mb-8">
          <Text className="text-xl font-black text-blackCherry mb-4 px-2">
            Your Statistics
          </Text>

          <View className="flex-row -mx-1">
            <View className="flex-1 mx-1">
              <View className="bg-gradient-to-br from-blueViolet/80 to-deepTeal rounded-xl p-4 items-center">
                <Calendar size={24} color="black" className="mb-2" />
                <Text className="text-2xl font-black text-blackCherry">
                  {totalDaysLogged}
                </Text>
                <Text className="text-sm text-blackCherry/80 font-semibold">
                  Days Logged
                </Text>
              </View>
            </View>
            <View className="flex-1 mx-1">
              <View className="bg-gradient-to-br from-mintGreen to-malachiteGreen rounded-xl p-4 items-center">
                <Trophy size={24} color="black" className="mb-2" />
                <Text className="text-2xl font-black text-blackCherry">
                  {badges.filter((b) => b.earned).length}
                </Text>
                <Text className="text-sm text-blackCherry/80 font-semibold">
                  Badges Won
                </Text>
              </View>
            </View>
            <View className="flex-1 mx-1">
              <View className="bg-gradient-to-br from-coralRed to-mangoYellow rounded-xl p-4 items-center">
                <TrendingUp size={24} color="black" className="mb-2" />
                <Text className="text-2xl font-black text-blackCherry">
                  {longestStreak}
                </Text>
                <Text className="text-sm text-blackCherry/80 font-semibold">
                  Best Streak
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Upcoming Rewards */}
        <View className="mb-6">
          <Text className="text-xl font-black text-blackCherry mb-4 px-2">
            Upcoming Rewards
          </Text>

          <View className="bg-gradient-to-r from-blueViolet to-blackCherry rounded-2xl p-5">
            <Text className="text-lg font-black text-blackCherry mb-4">
              Next Achievements
            </Text>

            <View className="flex flex-col gap-3">
              <View className="flex-row justify-between items-center bg-black/20 rounded-xl p-3">
                <View className="flex-row items-center">
                  <View className="bg-black/30 rounded-lg p-2 mr-3">
                    <Crown size={18} color="gold" />
                  </View>
                  <View>
                    <Text className="font-black text-deepTeal">
                      Monthly Champion
                    </Text>
                    <Text className="text-sm text-deepTeal/70 font-semibold">
                      Reach 30 day streak
                    </Text>
                  </View>
                </View>
                <View className="items-end">
                  <Text className="text-sm font-black text-deepTeal">
                    {Math.max(0, 30 - currentStreak)} days
                  </Text>
                  <Text className="text-xs text-mangoYellow font-black">
                    +250 XP
                  </Text>
                </View>
              </View>

              <View className="flex-row justify-between items-center bg-black/20 rounded-xl p-3">
                <View className="flex-row items-center">
                  <View className="bg-black/30 rounded-lg p-2 mr-3">
                    <Zap size={18} color="gold" />
                  </View>
                  <View>
                    <Text className="font-black text-deepTeal">Protein Pro</Text>
                    <Text className="text-sm text-deepTeal/70 font-semibold">
                      Meet protein goals 14 days
                    </Text>
                  </View>
                </View>
                <View className="items-end">
                  <Text className="text-sm font-black text-blackCherry">
                    Available
                  </Text>
                  <Text className="text-xs text-mangoYellow font-black">
                    +150 XP
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StreaksAndBadges;
