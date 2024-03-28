import { ScrollView, Text, TextInput, View } from "react-native";
import { getFacturas } from "../../utils/api/getFacturas";
import MovementCard from "../../components/MovementCard";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const movimientos = () => {
  const factura = getFacturas();
  const [filteredFactura, setFilteredFactura] = useState(factura);

  const handleSearch = (text: string) => {
    const filtered = factura.filter((factura) =>
      factura.enterprise.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredFactura(filtered);
  };

  return (
    <ScrollView>
      <View className="p-2">
        <View className="flex flex-row justify-between items-center">
          <View className="pr-2">
            <AntDesign name="search1" size={24} color="black" />
          </View>
          <TextInput
            onChangeText={handleSearch}
            className="bg-white p-2 rounded-md w-full placeholder:text-xl"
            placeholder="Buscar factura"
          />
        </View>
        {filteredFactura.map((factura) => (
          <MovementCard key={factura.id} {...factura} />
        ))}
      </View>
    </ScrollView>
  );
};

export default movimientos;
