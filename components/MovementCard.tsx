import { Text, View, StyleSheet } from "react-native";
import { getFechaFormateada } from "../utils/getDateFormat";
import { Icon } from "react-native-paper";

const MovementCard = ({
  id,
  status,
  enterprise,
  discount,
  date,
  subtotal,
  tax,
  total,
  items,
}: Factura) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dateText}>🇵🇦 {getFechaFormateada(date)}</Text>
        <Text
          style={styles.enterpriseText}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {enterprise.toUpperCase()}
        </Text>
      </View>
      <View style={styles.totalContainer}>
        <Icon
          source="check-circle"
          color={status === "paid" ? "#4caf50" : "#f44336"}
          size={24}
        />
        <Text style={styles.totalText}>$ -{total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    borderRadius: 10,
    padding: 16,
    marginVertical: 4,
  },
  enterpriseText: {
    fontSize: 18,
    fontWeight: "600",
    maxWidth: 265,
  },
  dateText: {
    fontSize: 14,
    fontWeight: "300",
  },
  statusText: {
    fontSize: 14,
    fontWeight: "200",
  },
  totalContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 8,
  },
  totalText: {
    fontSize: 18,
    color: "#f44336",
  },
});

export default MovementCard;
