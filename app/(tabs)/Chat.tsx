import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  Animated,
} from "react-native";
import {
  ArrowLeft,
  Send,
  Bot,
  Camera,
  Mic,
  Sparkles,
  Zap,
  Trophy,
  Target,
} from "lucide-react-native";

interface Message {
  id: string;
  text: string;
  sender: "user" | "calee";
  timestamp: Date;
  type?: "text" | "suggestion";
}

const Chat: React.FC = () => {
  const floatAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const glowAnim = useRef(new Animated.Value(0.9)).current;
  const bounceAnim = useRef(new Animated.Value(1)).current;
  const router = useRouter();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey there, champion! I'm Cal-ee, your AI nutrition coach. I see you've been crushing that 12-day streak - absolutely legendary! How can I power up your nutrition game today?",
      sender: "calee",
      timestamp: new Date(Date.now() - 300000),
    },
    {
      id: "2",
      text: "I had a cheat meal yesterday and I'm feeling guilty about it. Will it affect my progress much?",
      sender: "user",
      timestamp: new Date(Date.now() - 240000),
    },
    {
      id: "3",
      text: "Listen up, warrior! One battle doesn't lose the war. Your 12-day streak proves you're a nutrition champion. That cheat meal? It's just fuel for your comeback story. Focus on your next power meal and keep building that legendary streak!",
      sender: "calee",
      timestamp: new Date(Date.now() - 180000),
    },
  ]);

  const [inputText, setInputText] = useState("");

  const suggestions = [
    "What should I eat for lunch?",
    "Analyze my breakfast calories",
    "Power-up meal prep tips",
    "Epic healthy snack ideas",
  ];

  useEffect(() => {
    // Floating animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -6,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 2500,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 1800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1800,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Glow animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1.1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 0.9,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Bounce animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1.03,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText("");

    setTimeout(() => {
      const responses = [
        "Amazing question! Let me analyze your nutrition data and power up your strategy with personalized advice!",
        "Great thinking, champion! I'm processing your request with my advanced nutrition algorithms. Victory incoming!",
        "Excellent! I'm diving deep into your nutrition profile to craft the perfect battle plan for your goals!",
        "Fantastic question! My AI nutrition sensors are analyzing your progress. Prepare for some game-changing advice!",
      ];

      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "calee",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, response]);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <KeyboardAvoidingView className="flex-1 pb-[30px]">
        {/* Header */}
        <View className="bg-gradient-to-br from-blueViolet via-deepTeal to-blackCherry px-4 py-4 relative overflow-hidden shadow-xl">
          {/* 3D Background Elements */}
          <View className="absolute inset-0 opacity-8">
            <Animated.View
              className="absolute top-3 right-8 w-8 h-8 bg-mangoYellow rounded-lg transform rotate-45 shadow-lg"
              style={{ transform: [{ scale: glowAnim }] }}
            />
            <Animated.View
              className="absolute top-12 right-6 w-5 h-5 bg-coralRed rounded-full shadow-md"
              style={{ transform: [{ translateY: floatAnim }] }}
            />
            <Animated.View
              className="absolute bottom-8 right-16 w-4 h-4 bg-mintGreen transform rotate-12 shadow-md"
              style={{ transform: [{ scale: bounceAnim }] }}
            />
          </View>

          <View className="flex-row items-center relative z-10">
            <TouchableOpacity className="mr-4 p-2 rounded-full bg-blackCherry/20 shadow-lg"
            onPress={() => router.back()}
            >
              <ArrowLeft size={20} color="#49061A" />
            </TouchableOpacity>

            <View className="flex-row items-center flex-1">
              <Animated.View
                className="relative mr-3"
                style={{ transform: [{ scale: pulseAnim }] }}
              >
                <View className="w-12 h-12 bg-gradient-to-br from-coralRed to-mangoYellow rounded-2xl items-center justify-center shadow-xl">
                  <Bot size={24} color="#49061A" />
                </View>
                {/* Floating sparkles */}
                <Animated.View
                  className="absolute -top-1 -right-1"
                  style={{ transform: [{ translateY: floatAnim }] }}
                >
                  <Sparkles size={12} color="#FFA726" fill="#FFA726" />
                </Animated.View>
              </Animated.View>

              <View className="flex-1">
                <View className="flex-row items-center">
                  <Text className="text-xl font-black text-blackCherry drop-shadow-sm">
                    Cal-ee
                  </Text>
                  <Animated.View
                    className="ml-2"
                    style={{ transform: [{ scale: pulseAnim }] }}
                  >
                    <Zap size={16} color="#F95341" fill="#F95341" />
                  </Animated.View>
                </View>
                <View className="flex-row items-center mt-1">
                  <Animated.View
                    className="w-2 h-2 bg-mintGreen rounded-full mr-2 shadow-sm"
                    style={{ transform: [{ scale: glowAnim }] }}
                  />
                  <Text className="text-sm text-blackCherry font-bold drop-shadow-sm">
                    AI Trainer Online
                  </Text>
                  <Trophy
                    size={12}
                    color="#FFA726"
                    fill="#FFA726"
                    className="ml-2"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Suggestions */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-4 py-3"
        >
          {suggestions.map((suggestion, index) => (
            <Animated.View
              key={index}
              style={{ transform: [{ scale: bounceAnim }] }}
            >
              <TouchableOpacity
                onPress={() => handleSuggestionClick(suggestion)}
                className="bg-gradient-to-r from-melonMist/20 to-mangoYellow/20 border-2 border-coralRed/30 px-4 py-2 rounded-2xl mr-3 shadow-lg"
              >
                <Text className="text-blackCherry text-sm font-bold drop-shadow-sm">
                  {suggestion}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </ScrollView>

        {/* Messages */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              className={`flex ${
                item.sender === "user" ? "items-end" : "items-start"
              } mb-4`}
            >
              <Animated.View
                style={{ transform: [{ scale: bounceAnim }] }}
                className={`max-w-[80%] px-4 py-3 rounded-3xl shadow-lg ${
                  item.sender === "user"
                    ? "bg-gradient-to-br from-blueViolet to-deepTeal rounded-br-lg border-2 border-blueViolet/30"
                    : "bg-gradient-to-br from-melonMist/30 to-mangoYellow/20 rounded-bl-lg border-2 border-coralRed/25"
                }`}
              >
                {item.sender === "calee" && (
                  <View className="flex-row items-center mb-2">
                    <View className="bg-coralRed/20 rounded-full p-1 mr-2 shadow-sm">
                      <Bot size={12} color="#F95341" />
                    </View>
                    <Text className="text-xs text-blackCherry font-black drop-shadow-sm">
                      Cal-ee AI Coach
                    </Text>
                    <Animated.View
                      className="ml-1"
                      style={{ transform: [{ scale: pulseAnim }] }}
                    >
                      <Target size={10} color="#4BD883" fill="#4BD883" />
                    </Animated.View>
                  </View>
                )}
                <Text
                  className={`text-sm font-semibold drop-shadow-sm ${
                    item.sender === "user"
                      ? "text-blackCherry"
                      : "text-blackCherry"
                  }`}
                >
                  {item.text}
                </Text>
                <Text
                  className={`text-xs mt-2 font-bold ${
                    item.sender === "user"
                      ? "text-blackCherry/70"
                      : "text-deepTeal"
                  }`}
                >
                  {item.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              </Animated.View>
            </View>
          )}
          contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        />

        {/* Input Area */}
        <View className="bg-gradient-to-r from-melonMist/10 to-mangoYellow/10 border-t-2 border-coralRed/20 p-4 shadow-xl">
          <View className="flex-row items-center gap-3">
            {!inputText.trim() && (
              <>
                <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                  <TouchableOpacity className="bg-gradient-to-br from-mintGreen/20 to-malachiteGreen/30 p-3 rounded-2xl shadow-lg border border-mintGreen/40">
                    <Camera size={18} color="#49061A" />
                  </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                  <TouchableOpacity className="bg-gradient-to-br from-mangoYellow/20 to-coralRed/20 p-3 rounded-2xl shadow-lg border border-coralRed/40">
                    <Mic size={18} color="#49061A" />
                  </TouchableOpacity>
                </Animated.View>
              </>
            )}
            <View className="flex-1 relative">
              <TextInput
                value={inputText}
                onChangeText={setInputText}
                onSubmitEditing={handleSendMessage}
                placeholder="Ask Cal-ee for nutrition power-ups..."
                placeholderTextColor="#49061A80"
                className="w-full py-4 px-5 pr-12 bg-melonMist/20 rounded-2xl text-sm font-semibold text-blackCherry border-2 border-coralRed/20 shadow-lg"
              />
            </View>

            <Animated.View
              style={{
                transform: [{ scale: inputText.trim() ? glowAnim : 1 }],
              }}
            >
              
              <TouchableOpacity
                onPress={handleSendMessage}
                disabled={!inputText.trim()}
                className={`p-4 rounded-2xl shadow-xl border-2 transition-all duration-300 ${
                  inputText.trim()
                    ? "bg-gradient-to-br from-coralRed to-mangoYellow border-coralRed/40"
                    : "bg-gray-200 border-gray-300"
                }`}
              >
                <Send
                  size={10}
                  color={inputText.trim() ? "#49061A" : "#9CA3AF"}
                />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;
