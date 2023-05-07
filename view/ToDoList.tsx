import {
  Text,
  View,
  ScrollView,
  Pressable,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { useState } from "react";
import InputForm from "../components/InputForm";
import { Entypo } from "@expo/vector-icons";

const ToDoList = () => {
  const [items, setItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const [updatedValue, setUpdatedValue] = useState("");

  const handleAddItem = (item: any) => {
    setItems([...items, item]);
  };

  const handleUpdate = (index: number) => {
    setSelectedItem(index);
    setUpdatedValue(items[index]);
    setModalVisible(true);
  };

  const handleDelete = (index: number) => {
    Alert.alert(
      "Delete Item",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            const newItems = [...items];
            newItems.splice(index, 1);
            setItems(newItems);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleUpdateValueChange = (text: string) => {
    setUpdatedValue(text);
  };

  const handleUpdateItem = () => {
    const newItems = [...items];
    newItems[selectedItem] = updatedValue;
    setItems(newItems);
    setSelectedItem(-1);
    setUpdatedValue("");
    Alert.alert("Update Item", "Updated successfully");
    setModalVisible(false);
  };

  return (
    <View>
      <InputForm onAdd={handleAddItem} />
      <ScrollView className="pt-5">
        {items.map((item, index) => (
          <View key={index} className="flex flex-row items-center">
            <Text className="text-xl py-3 tracking-tighter w-4/5">{item}</Text>
            <View className="flex flex-row w-1/5 pl-5">
              <Pressable onPress={() => handleUpdate(index)}>
                <Entypo
                  name="pencil"
                  size={24}
                  color="blue"
                  className="flex-shrink-0"
                />
              </Pressable>
              <Pressable onPress={() => handleDelete(index)}>
                <Entypo
                  name="trash"
                  size={24}
                  color="red"
                  className="flex-shrink-0"
                />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex flex-1 justify-center items-center">
          <Text className="mb-8 text-3xl font-bold italic tracking-tighter">
            UPDATE YOUR TO DO
          </Text>
          <TextInput
            className="border-2 rounded py-3 px-4 text-center text-xl tracking-tighter w-80"
            onChangeText={handleUpdateValueChange}
            value={updatedValue}
          />
          <Pressable onPress={handleUpdateItem}>
            <Text className="mt-2 py-2 text-sky-900 font-bold text-xl">
              Update
            </Text>
          </Pressable>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text className="text-red-700 font-bold text-xl">Cancel</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default ToDoList;
