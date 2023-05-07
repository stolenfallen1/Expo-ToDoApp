import { Pressable, TextInput, View, Text } from "react-native";

const InputForm = () => {
  return (
    <View className="flex flex-row justify-between mt-4">
      <TextInput
        placeholder="Type your to do's here"
        className="border-2 p-3 text-lg rounded w-3/4"
      />
      <Pressable className="bg-black rounded-lg p-3 cursor-pointer">
        <Text className="text-white text-center text-2xl">ADD</Text>
      </Pressable>
    </View>
  );
};

export default InputForm;
