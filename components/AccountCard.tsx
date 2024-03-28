import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { getTipoCuenta } from "../utils/api/getTipoCuenta";

const AccountCard = ({
  id,
  cid,
  type,
  name,
  primary,
  hasCard,
  balance,
}: Account) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.nameText}>
          {primary && (
            <View style={styles.primaryIcon}>
              <Ionicons name="sparkles" size={20} color="black" />
            </View>
          )}
          {name}
        </Text>
        <Text style={styles.typeText}>{getTipoCuenta(type)}</Text>
        <Text style={styles.cidText}>{cid}</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>${balance.toFixed(2)}</Text>
        <MaterialIcons name="arrow-forward-ios" size={15} color="black" />
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
    elevation: 2,
    borderRadius: 10,
    padding: 16,
    marginVertical: 4,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  typeText: {
    fontSize: 14,
    fontWeight: "200",
  },
  cidText: {
    fontSize: 14,
    fontWeight: "200",
  },
  primaryIcon: {
    paddingRight: 4,
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  balanceText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AccountCard;
