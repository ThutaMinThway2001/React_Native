import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [items, setItem] = useState([
    { id: 1, name: "name1" },
    { id: 2, name: "name2" },
    { id: 3, name: "name3" },
    { id: 4, name: "name4" },
    { id: 5, name: "name5" },
    { id: 6, name: "name6" },
    { id: 7, name: "name7" },
    { id: 8, name: "name8" },
    { id: 9, name: "name9" },
    { id: 10, name: "name10" },
    { id: 11, name: "name11" },
    { id: 12, name: "name12" },
    { id: 13, name: "name13" },
    { id: 14, name: "name14" },
    { id: 15, name: "name15" },
  ]);
  const [Refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    setData([
      ...Data,
      {
        title: `Title ${Data.length + 1}`,
        data: [`Item ${Data.length + 1}-1`, `Item ${Data.length + 1}-2`],
      },
    ]);
    setRefreshing(false);
  };
  const [Data, setData] = useState([
    {
      title: "Title 1",
      data: ["Item 1-1", "Item 1-2", "Item 1-3"],
    },
  ]);
  return (
    <SectionList
      refreshControl={
        <RefreshControl refreshing={Refreshing} onRefresh={handleRefresh} />
      }
      sections={Data}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <Text style={styles.text} key={item.id}>
          {item}
        </Text>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  text: {
    color: "#000000",
    fontSize: 35,
    fontStyle: "italic",
    margin: 10,
  },
  item: {
    margin: 10,
    backgroundColor: "#00ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
