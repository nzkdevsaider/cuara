import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";
import { supabase } from "../../utils/supabase";
import { router } from "expo-router";
import { Divider, Snackbar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const cuenta = () => {
  const [notification, setNotification] = useState({
    visible: false,
    message: "",
  });
  const signOut = () => {
    supabase.auth.signOut();
    router.replace("/");
  };
  const goToTutorial = () => {
    router.replace("/tutorial");
  };

  const deleteAllData = async () => {
    setNotification({ visible: true, message: "Borrando todos los datos..." });
    await AsyncStorage.clear();
  };

  return (
    <View style={styles.container}>
      <Text>
        La funcionalidad para ver la informacion de tu cuenta esta limitada en
        esta version de demostracion.
      </Text>
      <Divider />
      <Text style={styles.devtoolText}>Herramientas de testeo</Text>
      <Button onPress={deleteAllData}>Borrar todos los datos</Button>
      <Snackbar
        style={{ position: "absolute", top: 10, right: 10, zIndex: 200 }}
        visible={notification.visible}
        onDismiss={() => setNotification({ visible: false, message: "" })}
      >
        Todos los datos han sido borrados.
      </Snackbar>
      <Button onPress={goToTutorial}>Ir al tutorial</Button>
      <Divider />
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
  devtoolText: {
    fontSize: 18,
    color: "#6B7280",
  },
});

export default cuenta;
