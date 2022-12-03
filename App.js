import { StyleSheet, View } from "react-native";
import SearchBar from "./components/SearchBar/SearchBar";
import Card from "./components/Card/Card";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SearchBar />
        <Card />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
