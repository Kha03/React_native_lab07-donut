import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { View } from "react-native-web";
import getLocalImage from "../common/getImg";

export default function DonutDetail({ route }) {
  const { id } = route.params;
  const [donut, setDonut] = useState({});
  useEffect(() => {
    fetch(`https://670b3789ac6860a6c2cb6c69.mockapi.io/todo/v1/donut/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const donut = { ...data, img: getLocalImage(data.img) };
        setDonut(donut);
      });
  }, []);
  const [num, setNum] = useState(1);
  const handleAdd = () => {
    setNum(num + 1);
  };
  const handleSub = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.info_content}>
        <Image source={donut.img} style={styles.img_product} />
        <Text style={styles.font_main}>{donut.name}</Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.font_sub}>{donut.desc}</Text>
          <Text style={styles.font_main}>${donut.price}.00</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image source={require("../assets/img/clock.png")} />
          <Text style={styles.font_sub}>Delivery in</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.font_main}>30 min</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Pressable style={styles.btn_num} onPress={handleSub}>
              <Text style={[styles.font_main, { color: "#fff" }]}>-</Text>
            </Pressable>
            <Text style={styles.font_main}>{num}</Text>
            <Pressable style={styles.btn_num} onPress={handleAdd}>
              <Text style={[styles.font_main, { color: "#fff" }]}>+</Text>
            </Pressable>
          </View>
        </View>
        <Text style={[styles.font_main, { marginTop: 10 }]}>
          Restaurants info
        </Text>
        <Text style={[styles.font_sub, { marginTop: 10, lineHeight: 24 }]}>
          Order a Large Pizza but the size is the equivalent of a medium/small
          from other places at the same price range.
        </Text>
      </View>
      <View style={styles.btn_group}>
        <Pressable style={styles.btn_add}>
          <Text style={[styles.font_main, { color: "#fff", fontSize: 25 }]}>
            Add to cart
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  img_product: {
    alignSelf: "center",
    width: 272,
    height: 278,
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
  btn_num: {
    backgroundColor: "#F1B000",
    width: 20,
    height: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btn_group: {
    backgroundColor: "#F1B000",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: 1,
  },
});
