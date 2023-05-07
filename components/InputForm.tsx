import { Pressable, TextInput, View, Text } from "react-native";
import { useState } from "react";

interface Type {
  onAdd: (item: string) => void;
}

const InputForm = ({ onAdd }: Type) => {
  const [todo, setToDo] = useState("");

  const handleAdd = () => {
    onAdd(todo);
    setToDo("");
  };

  return (
    <View className="flex flex-row justify-between mt-4">
      <TextInput
        value={todo}
        placeholder="Type your to do's here"
        className="border-2 p-3 text-lg rounded w-3/4"
        onChangeText={(event) => setToDo(event)}
      />
      <Pressable
        className="bg-black rounded-lg p-3 cursor-pointer"
        onPress={handleAdd}
      >
        <Text className="text-white text-center text-2xl">ADD</Text>
      </Pressable>
    </View>
  );
};

export default InputForm;
