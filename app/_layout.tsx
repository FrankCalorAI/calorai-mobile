import { SplashScreen, withLayoutContext } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./globals.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const StackNav = createNativeStackNavigator();
const Stack = withLayoutContext(StackNav.Navigator);

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter: require("../assets/fonts/Inter_24pt-Regular.ttf"),
    InterBold: require("../assets/fonts/Inter_24pt-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GestureHandlerRootView>
  );
}
