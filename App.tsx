import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex flex-1 bg-black items-center justify-center">
      <Text className="text-white text-3xl">TO DO APP</Text>
      <StatusBar style="auto" />
    </View>
  );
}
