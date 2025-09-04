import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  ArrowLeft,
  Send,
  Bot,
  Smile,
  Camera,
  Mic,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Message {
  id: string;
  text: string;
  sender: "user" | "calee";
  timestamp: Date;
  type?: "text" | "suggestion";
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! I'm Cal-ee, your AI nutritionist. I see you've been doing great with your streak! How can I help you today? 🌟",
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
      text: "Don't worry! One cheat meal won't derail your progress. What matters is getting back on track, which you're already doing by checking in here. Your 12-day streak shows you have great consistency. Focus on your next meal being nutritious! 💪",
      sender: "calee",
      timestamp: new Date(Date.now() - 180000),
    },
  ]);

  const [inputText, setInputText] = useState("");

  const suggestions = [
    "What should I eat for lunch?",
    "How many calories in my breakfast?",
    "Tips for meal prep",
    "Healthy snack ideas",
  ];

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
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your question! I'm analyzing your request and will get back to you with personalized advice based on your progress and goals. 🤖",
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
    <SafeAreaView className="flex-1 bg-gradient-to-br from-purple-50 to-emerald-50">
      {/* Wrap input with KeyboardAvoidingView */}
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Header */}
        <View className="bg-purple-600 p-6 flex-row items-center">
          <TouchableOpacity className="mr-4 p-2 rounded-full">
            <ArrowLeft size={24} color="white" />
          </TouchableOpacity>
          <View className="flex-row items-center">
            <View className="w-10 h-10 bg-orange-400 rounded-full items-center justify-center mr-3">
              <Bot size={20} color="white" />
            </View>
            <View>
              <Text className="text-xl font-bold text-white">Cal-ee</Text>
              <View className="flex-row items-center">
                <View className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                <Text className="text-sm text-purple-100">Online</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Suggestions */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="p-4"
        >
          {suggestions.map((suggestion, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSuggestionClick(suggestion)}
              className="bg-white border border-purple-200 px-4 py-2 rounded-full mr-2"
            >
              <Text className="text-purple-600 text-sm">{suggestion}</Text>
            </TouchableOpacity>
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
              } mb-3`}
            >
              <View
                className={`max-w-[70%] px-4 py-3 rounded-2xl ${
                  item.sender === "user"
                    ? "bg-purple-600 rounded-br-md"
                    : "bg-white rounded-bl-md"
                }`}
              >
                {item.sender === "calee" && (
                  <View className="flex-row items-center mb-1">
                    <Bot size={14} color="#9333ea" />
                    <Text className="ml-1 text-xs text-purple-600 font-medium">
                      Cal-ee
                    </Text>
                  </View>
                )}
                <Text
                  className={`text-sm ${
                    item.sender === "user" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.text}
                </Text>
                <Text
                  className={`text-[10px] mt-1 ${
                    item.sender === "user" ? "text-purple-200" : "text-gray-500"
                  }`}
                >
                  {item.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              </View>
            </View>
          )}
          contentContainerStyle={{ padding: 16 }}
        />

        {/* Input Area */}
        <View className="p-4 bg-white border-t border-gray-200 flex-row items-center space-x-3">
          <TouchableOpacity>
            <Camera size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Mic size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <View className="flex-1 relative">
            <TextInput
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={handleSendMessage}
              placeholder="Ask Cal-ee anything..."
              className="w-full py-3 px-4 pr-10 bg-gray-100 rounded-full text-sm"
            />
            <TouchableOpacity className="absolute right-3 top-3">
              <Smile size={16} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handleSendMessage}
            disabled={!inputText.trim()}
            className={`p-3 rounded-full ${
              inputText.trim()
                ? "bg-purple-600"
                : "bg-gray-200"
            }`}
          >
            <Send
              size={18}
              color={inputText.trim() ? "white" : "#9CA3AF"}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;