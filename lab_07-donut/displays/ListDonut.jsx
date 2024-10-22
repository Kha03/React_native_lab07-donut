import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import getLocalImage from "../common/getImg";

const data = [
  {
    id: "1",
    name: "Tasty Donut",
    price: 10,
    desc: "Spicy tasty donut family",
    cate: "Donut",
    img: require("../assets/img/donut_red 1.png"),
  },
  {
    id: "2",
    name: "Pink Donut",
    price: 10,
    desc: "Spicy tasty donut family",
    cate: "Donut",
    img: require("../assets/img/donut_yellow 1.png"),
  },
  {
    id: "3",
    name: "Floating Donut",
    price: 10,
    desc: "Spicy tasty donut family",
    cate: "Donut",
    img: require("../assets/img/green_donut 1.png"),
  },
  {
    id: "4",
    name: "Tasty Donut",
    price: 10,
    desc: "Spicy tasty donut family",
    cate: "Donut",
    img: require("../assets/img/tasty_donut 1.png"),
  },
  {
    id: "5",
    name: "Floating Donut",
    price: 10,
    desc: "Spicy tasty donut family",
    cate: "Pink Donut",
    img: require("../assets/img/donut_red 1.png"),
  },
  {
    id: "6",
    name: "Tasty Donut",
    price: 10,
    desc: "Spicy tasty donut family",
    cate: "Pink Donut",
    img: require("../assets/img/tasty_donut 1.png"),
  },
  {
    id: "7",
    name: "Floating Donut",
    price: 10,
    desc: "Spicy tasty donut family",
    cate: "Pink Donut",
    img: require("../assets/img/green_donut 1.png"),
  },
  {
    id: "8",
    name: "Pink Donut",
    price: 10,
    desc: "Spicy tasty donut family",
    cate: "Floating",
    img: require("../assets/img/donut_yellow 1.png"),
  },
  {
    id: "9",
    name: "Tasty Donut",
    price: 10,
    desc: "Spicy tasty donut family",
    cate: "Floating",
    img: require("../assets/img/donut_red 1.png"),
  },
  {
    id: "10",
    name: "Pink Donut",
    price: 10,
    desc: "Spicy tasty donut family",
    cate: "Floating",
    img: require("../assets/img/tasty_donut 1.png"),
  },
];
const Item = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.item}>
      <View>
        <Image source={item.img} />
      </View>
      <View style={{ marginLeft: 15, flex: 1, gap: 6 }}>
        <Text style={styles.font_main}>{item.name}</Text>
        <Text style={styles.font_sub}>{item.desc}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.font_main}>${item.price}</Text>
          <Pressable style={styles.btn_add}>
            <Text
              style={[styles.font_main, { color: "#fff" }]}
              onPress={() =>
                navigation.navigate("DonutDetail", { id: item.id })
              }
            >
              +
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default function ListDonut() {
  const [donuts, setDonuts] = useState("Donut");
  const [filterData, setFilterData] = useState([]);
  const handleSearch = (text) => {
    setFilterData(data.filter((item) => item.name.includes(text)));
  };
  const handleCategory = (cate) => {
    setDonuts(cate);
    setFilterData(data.filter((item) => item.cate === cate));
  };
  useEffect(() => {
    fetch("https://670b3789ac6860a6c2cb6c69.mockapi.io/todo/v1/donut")
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((item) => ({
          ...item,
          img: getLocalImage(item.img),
        }));
        setFilterData(newData);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.font_sub}>Welcome, Jala!</Text>
        <Text style={[styles.font_main, { marginTop: 10 }]}>
          Choice you Best food
        </Text>
        <TextInput
          placeholder="Search food"
          placeholderTextColor={"#C4C4C4"}
          style={[styles.input, styles.font_sub]}
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.categories}>
        {["Donut", "Pink Donut", "Floating"].map((item, index) => (
          <Pressable
            key={index}
            style={[
              styles.btn_cate,
              donuts === item ? styles.btn_cate_active : null,
            ]}
            onPress={() => handleCategory(item)}
          >
            <Text
              style={[styles.font_main, { fontSize: 14, textAlign: "center" }]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.listDonut}>
        <FlatList
          data={filterData}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  header: {
    flex: 2,
  },
  categories: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  listDonut: {
    marginTop: 12,
    flex: 10,
  },
  font_main: {
    fontSize: 20,
    fontWeight: "700",
  },
  font_sub: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000000A6",
  },
  input: {
    backgroundColor: "#F5F5F5",
    width: 266,
    height: 46,
    borderRadius: 3,
    padding: 10,
    marginTop: 10,
  },
  btn_cate: {
    width: 100,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#C4C4C42B",
    borderWidth: 1,
    borderRadius: 5,
  },
  btn_cate_active: {
    backgroundColor: "#F1B000",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4DDDD",
    paddingLeft: 8,
    paddingVertical: 7,
    marginVertical: 13,
    borderRadius: 10,
  },
  btn_add: {
    backgroundColor: "#F1B000",
    width: 44,
    height: 45,
    borderRadius: 10,
    borderTopLeftRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
