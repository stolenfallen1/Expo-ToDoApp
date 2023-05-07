import { Text, View, ScrollView } from "react-native";
import { useState } from "react";
import InputForm from "../components/InputForm";
import { Entypo } from "@expo/vector-icons";

const ToDoList = () => {
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = (item: any) => {
    setItems([...items, item]);
  };

  return (
    <View>
      <InputForm onAdd={handleAddItem} />
      <ScrollView className="pt-5">
        {items.map((item, index) => (
          <View key={index} className="flex flex-row items-center">
            <Text className="text-xl py-3 tracking-tighter w-4/5">{item}</Text>
            <View className="flex flex-row w-1/5 pl-5">
              <Entypo
                name="pencil"
                size={24}
                color="blue"
                className="flex-shrink-0"
              />
              <Entypo
                name="trash"
                size={24}
                color="red"
                className="flex-shrink-0"
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ToDoList;
