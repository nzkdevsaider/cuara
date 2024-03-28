import { useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import { supabase } from "../utils/supabase";
import Button from "./Button";
import { router } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
    router.push("/home");
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert(`Hemos enviado un correo de confirmación a ${email}`);
    setLoading(false);
  }

  return (
    <View className="flex flex-col justify-between gap-4">
      <View className="my-10">
        <TextInput
          onChangeText={(text: string) => setEmail(text)}
          value={email}
          placeholder="Correo electrónico"
          autoCapitalize={"none"}
        />

        <TextInput
          onChangeText={(text: string) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Contraseña"
          autoCapitalize={"none"}
        />
      </View>
      <View>
        <Button onPress={signInWithEmail}>Iniciar sesión</Button>
        <Button color="bg-green-500" onPress={signUpWithEmail}>
          Registrarse
        </Button>
      </View>
    </View>
  );
};

export default Login;
