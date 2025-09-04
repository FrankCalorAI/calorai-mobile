import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen 
        name="index"
        options={{
            title: "Dashboard",
            headerShown: false
        }}
        />
        <Tabs.Screen 
        name="Chat"
        options={{
            title: "Chat",
            headerShown: false
        }}
        />
        <Tabs.Screen 
        name="ProgressTree"
        options={{
            title: "Progress Tree",
            headerShown: false
        }}
        />
        <Tabs.Screen 
        name="Settings"
        options={{
            title: "Settings",
            headerShown: false
        }}
        />
        <Tabs.Screen 
        name="StreaksAndBadges"
        options={{
            title: "Streaks And Badges",
            headerShown: false
        }}
        />
        <Tabs.Screen 
        name="Profile"
        options={{
            title: "Profile",
            headerShown: false
        }}
        />
    </Tabs>
  );
};

export default _layout;
