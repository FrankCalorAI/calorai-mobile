import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#111827" }, // dark gray
        headerTintColor: "white", // header text/icons
        contentStyle: { backgroundColor: "#111827" }, // screen background
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
