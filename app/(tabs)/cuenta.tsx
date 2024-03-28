import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";
import { supabase } from "../../utils/supabase";
import { router } from "expo-router";

const cuenta = () => {
  const signOut = () => {
    supabase.auth.signOut();
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text>
        La funcionalidad para ver la informacion de tu cuenta esta limitada en
        esta version de demostracion.
      </Text>
      <Button buttonColor="#ef4444" onPress={signOut}>
        Cerrar sesión
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 16,
    gap: 16,
  },
});

export default cuenta;
