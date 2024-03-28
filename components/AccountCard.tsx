import { View, Text } from "react-native";
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
    <View className="flex flex-row justify-between items-center bg-white shadow-lg rounded-md p-4 my-1">
      <View>
        <Text className="text-lg font-semibold">
          {primary && (
            <View className="pr-1">
              <Ionicons name="sparkles" size={20} color="black" />
            </View>
          )}
          {name}
        </Text>
        <Text className="text-sm font-light">{getTipoCuenta(type)}</Text>
        <Text className="text-sm font-light">{cid}</Text>
      </View>
      <View className="flex flex-row justify-center items-center gap-2">
        <Text className="text-lg font-semibold">${balance.toFixed(2)}</Text>
        <MaterialIcons name="arrow-forward-ios" size={15} color="black" />
      </View>
    </View>
  );
};

export default AccountCard;
