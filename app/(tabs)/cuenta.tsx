import { View, Text } from "react-native";
import Button from "../../components/Button";
import { supabase } from "../../utils/supabase";
import { router } from "expo-router";
const cuenta = () => {
  const signOut = () => {
    supabase.auth.signOut();
    router.replace("/");
  };

  return (
    <View className="flex flex-col justify-center p-2">
      <Button color="bg-red-500" onPress={signOut}>Cerrar sesion</Button>
    </View>
  );
};

export default cuenta;
