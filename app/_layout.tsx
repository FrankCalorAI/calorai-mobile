import { SplashScreen, withLayoutContext } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./globals.css";

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
      <BottomSheetModalProvider>
        <Stack
          screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        >
          {/* Only reference the tabs group */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </BottomSheetModalProvider>
  );
}
