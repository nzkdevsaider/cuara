import { Image, View, StyleSheet } from "react-native";
import Login from "../components/Login";
import { supabase } from "../utils/supabase";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { router } from "expo-router";

const index = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    if (session?.user) return router.push("/home");
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [session]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logoContainer: {
    marginVertical: 16,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default index;
