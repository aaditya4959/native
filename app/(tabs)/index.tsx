import { Text, View } from "react-native";
import "../globals.css";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center ">
      <Text className="text-5xl text-primary font-bold">Welcome!</Text>
      <Text className="text-accent">This is a sample applicaiton</Text>
    </View>

  );
}
