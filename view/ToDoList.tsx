import { Text, View, ScrollView } from "react-native";
import { useState } from "react";
import InputForm from "../components/InputForm";

const ToDoList = () => {
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = (item: any) => {
    setItems([...items, item]);
  };

  return (
    <View>
      <InputForm onAdd={handleAddItem} />
      <ScrollView>
        {items.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default ToDoList;
