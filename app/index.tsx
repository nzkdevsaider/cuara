import { Image, View } from "react-native";
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
    <View className="flex flex-col justify-center w-full m-auto p-4">
      <View className="my-4">
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 200, height: 200, resizeMode: "contain" }}
          className="m-auto"
        />
      </View>
      <Login />
    </View>
  );
};

export default index;
