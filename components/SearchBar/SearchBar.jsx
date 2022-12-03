import { View, TextInput, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { changeSearch } from "../../redux/slice/musicSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => dispatch(changeSearch(text))}
        placeholder="Ara..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "#e9ebf0",
    width: "90%",
    borderRadius: 10,
    marginTop: 25,
  },
  input: {
    height: 50,
    padding: 15,
  },
});
