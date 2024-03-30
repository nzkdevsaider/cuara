import { useState } from "react";
import { View, Alert, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { supabase } from "../utils/supabase";
import Button from "./Button";
import { Color } from "../utils/colors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    try {
      if (!email || !password)
        return Alert.alert("Por favor, ingresa tu correo y contraseña");
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) Alert.alert(error.message);
    } catch (error) {
      Alert.alert("Ocurrió un error al iniciar sesión");
    } finally {
      setLoading(false);
    }
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    try {
      if (!email || !password)
        return Alert.alert("Por favor, ingresa tu correo y contraseña");
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
    } catch (error) {
      Alert.alert("Ocurrió un error al registrarse");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="Correo electrónico"
          mode="outlined"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Introduce tu correo electrónico"
          autoCapitalize="none"
        />
        <TextInput
          label="Contraseña"
          mode="outlined"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              onPress={() => setShowPassword(!showPassword)}
              icon="eye"
            />
          }
          placeholder="Introduce tu contraseña"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button disabled={loading} onPress={signInWithEmail}>
          Iniciar sesión
        </Button>
        <Button disabled={loading} onPress={signUpWithEmail}>
          Registrarse
        </Button>
        <Button
          buttonColor={Color.button.secondary}
          onPress={() => Alert.alert("Esta funcion no esta disponible.")}
        >
          Factú Business
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    gap: 16,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: "100%",
    marginVertical: 40,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    gap: 16,
  },
});

export default Login;
