import { Text, View, ScrollView } from "react-native";
import { FontAwesome6, AntDesign } from "@expo/vector-icons";
import Stat from "../../components/Stat";
import { getTimeGreetings } from "../../utils/getTimeGreetings";
import { getUser } from "../../utils/api/getUser";
import { getCuentas } from "../../utils/api/getCuentas";
import AccountCard from "../../components/AccountCard";

const home = () => {
  const { firstname } = getUser();
  const { accounts } = getCuentas();
  return (
    <ScrollView>
      <View className="flex flex-col justify-center w-full p-4">
        <Stat horizontal>
          <Text className="text-2xl">
            {getTimeGreetings()}, {firstname}
          </Text>
          <FontAwesome6 name="hand-sparkles" size={24} color="black" />
        </Stat>
        <Text className="mt-3 font-light">Cuentas</Text>
        {accounts.map((account) => (
          <AccountCard key={account.id} {...account} />
        ))}
        <View className="flex flex-row justify-center items-center my-2 border border-dashed border-gray-400 p-3">
          <AntDesign name="pluscircle" size={24} color="black" />
          <Text className="pl-2">Abrir una nueva cuenta de ahorros</Text>
        </View>
        <View>
          <Text className="text-sm font-light mt-4">
            ¿Necesitas ayuda? <Text className="text-blue-500">Contáctanos</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default home;
