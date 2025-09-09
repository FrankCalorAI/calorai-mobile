import { View, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import { useRef, useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import StreaksAndBadges from "../streaksAndBadges";

import {
  ArrowLeft,
  Crown,
  Trophy,
  Target,
  Star,
  Zap,
  Award,
  TrendingUp,
  Calendar,
  MapPin,
} from "lucide-react-native";

const ProgressTree: React.FC = () => {
  const navigation = useNavigation();
  const BottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["12", "90%"], []);
  const openSheet = () => BottomSheetRef.current?.snapToIndex(1)
  const closeSheet = () => BottomSheetRef.current?.close();

  const progressData = [
    {
      date: "2024-01-01",
      weight: 85,
      onTrack: true,
      milestone: "start",
      title: "Quest Begins",
      description: "Starting weight recorded - Adventure starts here",
      xpEarned: 50,
      badgeEarned: "First Step",
    },
    {
      date: "2024-01-07",
      weight: 84.5,
      onTrack: true,
      milestone: "week1",
      title: "Week 1 Victory",
      description: "7 days of consistent logging achieved",
      xpEarned: 100,
      badgeEarned: "Week Warrior",
    },
    {
      date: "2024-01-14",
      weight: 84.0,
      onTrack: true,
      milestone: "week2",
      title: "Building Momentum",
      description: "Two weeks of dedication complete",
      xpEarned: 150,
      badgeEarned: "Consistency",
    },
    {
      date: "2024-02-01",
      weight: 82.5,
      onTrack: true,
      milestone: "month1",
      title: "Monthly Champion",
      description: "First month milestone reached",
      xpEarned: 300,
      badgeEarned: "Monthly Master",
    },
    {
      date: "2024-03-01",
      weight: 79.8,
      onTrack: true,
      milestone: "month2",
      title: "Unstoppable Force",
      description: "Two months of transformation",
      xpEarned: 400,
      badgeEarned: "Momentum King",
    },
    {
      date: "2024-04-15",
      weight: 75.2,
      onTrack: true,
      milestone: "current",
      title: "Current Position",
      description: "You are here - Keep pushing forward",
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
    if (milestone === "start") return <Crown color="#49061A" size={24} />;
    if (milestone === "current") return <MapPin color="#F95341" size={24} />;
    if (milestone?.includes("month"))
      return <Trophy color="#FFA726" size={24} />;
    if (milestone?.includes("week")) return <Award color="#7843FF" size={24} />;
    return <Star color="#4BD883" size={24} />;
  };

  const getMilestoneColors = (milestone: string | null, isLast: boolean) => {
    if (milestone === "start")
      return "from-blueViolet/20 to-deepTeal/30 border-blueViolet/40";
    if (milestone === "current")
      return "from-coralRed/20 to-mangoYellow/20 border-coralRed/40";
    if (milestone?.includes("month"))
      return "from-mangoYellow/20 to-melonMist/30 border-mangoYellow/40";
    if (milestone?.includes("week"))
      return "from-mintGreen/20 to-malachiteGreen/30 border-mintGreen/40";
    return "from-gray-100 to-gray-200 border-gray-300";
  };

  return (
    <SafeAreaView className="flex-1 bg-blackCherry/20 pb-[15px]">
      {/* Header */}
      <View className="bg-gradient-to-r from-blueViolet to-deepTeal px-5 py-6 rounded-b-2xl mx-2 mt-2">
        <View className="flex-row items-center mb-4">
          <TouchableOpacity
            className="mr-4 p-2 rounded-xl bg-white/15"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft size={22} color="white" />
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-2xl font-black text-white">
              Progress Journey
            </Text>
            <Text className="text-white/80 font-semibold">
              Your transformation story
            </Text>
          </View>
          <View className="bg-white/15 rounded-xl p-3">
            <TrendingUp size={26} color="white" />
          </View>
        </View>
      </View>

      <ScrollView
        className="flex-1 px-3 py-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
      >
        {/* Progress Summary */}
        <View className="mb-8">
          <Text className="text-xl font-black text-blackCherry mb-4 px-2">
            Journey Overview
          </Text>

          <View className="bg-gradient-to-br from-mangoYellow/15 to-coralRed/10 rounded-2xl p-6 border-2 border-coralRed/20 mb-6">
            <View className="items-center mb-6">
              <Text className="text-2xl font-black text-blackCherry mb-3">
                Quest Progress
              </Text>
              <View className="flex-row items-center justify-center bg-white/60 rounded-xl px-4 py-2">
                <Star color="#FFA726" size={20} fill="#FFA726" />
                <Text className="text-xl font-black text-blackCherry ml-2">
                  {totalXP.toLocaleString()} XP Earned
                </Text>
              </View>
            </View>

            <View className="flex-row -mx-1 mb-6">
              <View className="flex-1 mx-1 p-4 bg-gradient-to-br from-blueViolet/20 to-deepTeal/30 rounded-xl items-center border border-blueViolet/30">
                <Crown size={20} color="#49061A" className="mb-2" />
                <Text className="text-2xl font-black text-blackCherry">
                  {startWeight}kg
                </Text>
                <Text className="text-sm text-deepTeal font-bold">
                  Quest Start
                </Text>
              </View>
              <View className="flex-1 mx-1 p-4 bg-gradient-to-br from-mintGreen/20 to-malachiteGreen/30 rounded-xl items-center border border-mintGreen/40">
                <Target size={20} color="#49061A" className="mb-2" />
                <Text className="text-2xl font-black text-blackCherry">
                  {currentWeight}kg
                </Text>
                <Text className="text-sm text-deepTeal font-bold">
                  Current Level
                </Text>
              </View>
              <View className="flex-1 mx-1 p-4 bg-gradient-to-br from-coralRed/20 to-mangoYellow/30 rounded-xl items-center border border-coralRed/30">
                <Trophy size={20} color="#49061A" className="mb-2" />
                <Text className="text-2xl font-black text-blackCherry">
                  {targetWeight}kg
                </Text>
                <Text className="text-sm text-deepTeal font-bold">
                  Final Goal
                </Text>
              </View>
            </View>

            {/* Progress bar */}
            <View className="bg-white/40 rounded-xl p-4">
              <View className="flex-row justify-between mb-3">
                <Text className="font-black text-blackCherry">
                  Quest Completion
                </Text>
                <Text className="font-black text-malachiteGreen text-lg">
                  {progressPercentage.toFixed(1)}%
                </Text>
              </View>
              <View className="w-full bg-deepTeal/20 rounded-full h-6 border border-deepTeal/30 overflow-hidden">
                <View
                  className="bg-gradient-to-r from-mintGreen to-malachiteGreen h-full rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Adventure Stats */}
        <View className="mb-8">
          <Text className="text-xl font-black text-blackCherry mb-4 px-2">
            Adventure Stats
          </Text>

          <View className="flex-row -mx-1">
            <View className="flex-1 mx-1">
              <View className="bg-gradient-to-br from-blueViolet/15 to-deepTeal/20 rounded-xl p-4 items-center border border-blueViolet/30">
                <Calendar size={20} color="#49061A" className="mb-2" />
                <Text className="text-xl font-black text-blackCherry">
                  {Math.ceil(
                    (new Date().getTime() -
                      new Date(progressData[0].date).getTime()) /
                      (1000 * 3600 * 24)
                  )}
                </Text>
                <Text className="text-sm text-deepTeal font-bold text-center">
                  Days on Quest
                </Text>
              </View>
            </View>
            <View className="flex-1 mx-1">
              <View className="bg-gradient-to-br from-mintGreen/15 to-malachiteGreen/20 rounded-xl p-4 items-center border border-mintGreen/30">
                <Trophy size={20} color="#49061A" className="mb-2" />
                <Text className="text-xl font-black text-blackCherry">
                  {progressData.filter((p) => p.badgeEarned).length}
                </Text>
                <Text className="text-sm text-deepTeal font-bold text-center">
                  Badges Won
                </Text>
              </View>
            </View>
            <View className="flex-1 mx-1">
              <View className="bg-gradient-to-br from-coralRed/15 to-mangoYellow/20 rounded-xl p-4 items-center border border-coralRed/30">
                <TrendingUp size={20} color="#49061A" className="mb-2" />
                <Text className="text-xl font-black text-blackCherry">
                  {(startWeight - currentWeight).toFixed(1)}
                </Text>
                <Text className="text-sm text-deepTeal font-bold text-center">
                  KG Lost
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Progress Timeline */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-4 px-2">
            <Text className="text-xl font-black text-blackCherry">
              Adventure Timeline
            </Text>
            <View className="flex-row items-center bg-gradient-to-r from-mangoYellow/20 to-coralRed/20 px-3 py-2 rounded-full border border-coralRed/30">
              <Zap color="#49061A" size={16} />
              <Text className="text-sm font-black text-blackCherry ml-1">
                {totalXP.toLocaleString()} XP
              </Text>
            </View>
          </View>

          <View className="bg-white rounded-2xl border-2 border-gray-200">
            {progressData.map((point, index) => (
              <View
                key={point.date}
                className={`flex-row p-5 ${
                  index !== progressData.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <View
                  className={`w-16 h-16 rounded-2xl items-center justify-center bg-gradient-to-br ${getMilestoneColors(
                    point.milestone,
                    index === progressData.length - 1
                  )} border-2`}
                >
                  {getMilestoneIcon(point.milestone, point.onTrack)}
                </View>

                <View className="ml-5 flex-1">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="font-black text-blackCherry text-lg">
                      {point.title}
                    </Text>
                    {point.badgeEarned && (
                      <View className="bg-gradient-to-r from-mangoYellow/20 to-coralRed/20 rounded-lg px-2 py-1 border border-coralRed/30">
                        <Text className="text-xs font-black text-blackCherry">
                          {point.badgeEarned}
                        </Text>
                      </View>
                    )}
                  </View>

                  <Text className="text-sm text-deepTeal font-semibold mb-2">
                    {point.description}
                  </Text>

                  <View className="flex-row items-center justify-between">
                    <Text className="text-xs text-gray-500 font-bold">
                      {new Date(point.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </Text>
                    <View className="flex-row items-center">
                      <Text className="text-sm font-black text-blackCherry mr-2">
                        {point.weight}kg
                      </Text>
                      {point.xpEarned > 0 && (
                        <View className="bg-blueViolet/10 rounded-full px-2 py-1 border border-blueViolet/30">
                          <Text className="text-xs font-black text-blueViolet">
                            +{point.xpEarned} XP
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Next Milestone Preview */}
        <View className="mb-6">
          <Text className="text-xl font-black text-blackCherry mb-4 px-2">
            Next Adventure
          </Text>

          <View className="bg-gradient-to-r from-blueViolet/10 to-deepTeal/15 rounded-2xl p-5 border-2 border-blueViolet/25">
            <View className="flex-row items-center mb-3">
              <View className="bg-gradient-to-br from-coralRed to-mangoYellow rounded-xl p-3 mr-4">
                <Trophy size={24} color="white" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-black text-blackCherry">
                  Target Achievement
                </Text>
                <Text className="text-sm text-deepTeal font-semibold">
                  Reach your goal weight of {targetWeight}kg
                </Text>
              </View>
            </View>

            <View className="bg-white/60 rounded-xl p-4">
              <View className="flex-row justify-between items-center">
                <Text className="font-black text-blackCherry">
                  Distance to Goal
                </Text>
                <Text className="font-black text-coralRed text-lg">
                  {(currentWeight - targetWeight).toFixed(1)}kg remaining
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-1">
          {/* @ts-ignore */}
          <Button title="See streaks and Badges" onPress={openSheet} />
        </View>
      </ScrollView>
      <BottomSheet ref={BottomSheetRef} snapPoints={snapPoints} enablePanDownToClose>
        <BottomSheetScrollView className="bg-mangoYellow/15">
          {/* @ts-ignore */}
          <StreaksAndBadges closeSheet={closeSheet}/>
        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default ProgressTree;
