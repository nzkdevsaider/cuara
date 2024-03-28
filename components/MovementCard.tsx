import { Text, View } from "react-native";

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
    <View className="flex flex-row justify-between items-center bg-white shadow-lg rounded-md p-4 my-1">
        <View>
            <Text className="text-lg font-semibold">{enterprise}</Text>
            <Text className="text-sm font-light">{date}</Text>
            <Text className="text-sm font-light">{status}</Text>
        </View>
        <View className="flex flex-row justify-center items-center gap-2">
            <Text className="text-lg font-semibold">${total.toFixed(2)}</Text>
        </View>
    </View>
  );
};

export default MovementCard;
