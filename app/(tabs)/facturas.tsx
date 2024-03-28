import { ScrollView, View, StyleSheet } from "react-native";
import { getFacturas } from "../../utils/api/getFacturas";
import MovementCard from "../../components/MovementCard";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  ZoomIn,
  ZoomOut,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";
import { Button, IconButton, Searchbar, Text, FAB } from "react-native-paper";

const movimientos = () => {
  const factura = getFacturas();
  const [filteredFactura, setFilteredFactura] = useState(factura);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState<"ascending" | "descending">("ascending");

  const handleSort = () => {
    setSort(sort === "ascending" ? "descending" : "ascending");
    setFilteredFactura(
      filteredFactura.sort((a, b) =>
        sort === "ascending" ? a.id - b.id : b.id - a.id
      )
    );
  };

  useEffect(() => {
    setFilteredFactura(
      factura.filter((factura) =>
        factura.enterprise.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, factura]);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Animated.View
            entering={ZoomIn}
            exiting={ZoomOut}
            style={styles.searchContainer}
          >
            <Searchbar
              onChangeText={setSearchQuery}
              placeholder="Buscar factura"
              value={searchQuery}
              placeholderTextColor="#999"
              style={styles.searchInput}
            />
            <IconButton
              icon={`sort-${sort === "ascending" ? "ascending" : "descending"}`}
              size={24}
              selected={sort === "ascending" ? true : false}
              onPress={handleSort}
            />
          </Animated.View>
          <Button
            mode="contained"
            style={{ borderRadius: 8 }}
            buttonColor="#febd59"
            uppercase={true}
          >
            Ver reporte de facturas
          </Button>
          {filteredFactura.length === 0 && (
            <Animated.View
              entering={ZoomIn}
              exiting={ZoomOut}
              style={styles.notfoundContainer}
            >
              <AntDesign name="frowno" size={64} color="#51566b" />
              <Text>No se han encontrado facturas.</Text>
            </Animated.View>
          )}
          {filteredFactura.map((factura) => (
            <Animated.View entering={FadeIn} exiting={FadeOut} key={factura.id}>
              <MovementCard key={factura.id} {...factura} />
            </Animated.View>
          ))}
        </View>
      </ScrollView>
      <Animated.View entering={ZoomIn} exiting={ZoomOut} style={styles.plusFab}>
        <FAB icon="plus" style={styles.plusFab} color="white" />
      </Animated.View>
      <Animated.View
        entering={ZoomIn}
        exiting={ZoomOut}
        style={styles.contactFab}
      >
        <FAB icon="whatsapp" style={styles.contactFab} color="white" />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 8,
  },
  plusFab: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 200,
    backgroundColor: "#8e6b95",
  },
  contactFab: {
    position: "absolute",
    bottom: 10,
    left: 10,
    zIndex: 200,
    backgroundColor: "#25D366",
    borderRadius: 50,
  },
  reportContainer: {
    marginVertical: 16,
  },
  notfoundContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  searchInput: {
    backgroundColor: "transparent",
    padding: 8,
    borderRadius: 8,
    maxWidth: "100%",
    flex: 1,
    fontSize: 16,
  },
});

export default movimientos;
