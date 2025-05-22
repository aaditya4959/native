import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return <Stack>
    {/* This is the root layout where we have made the index on top gone false */}
    <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
    <Stack.Screen name="movie/[id]" options={{headerShown:false}}/>
  </Stack>;
}
