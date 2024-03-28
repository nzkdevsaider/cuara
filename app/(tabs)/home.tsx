import { Text, View, ScrollView, StyleSheet } from "react-native";
import { FontAwesome6, AntDesign } from "@expo/vector-icons";
import Stat from "../../components/Stat";
import { getTimeGreetings } from "../../utils/getTimeGreetings";
import { getUser } from "../../utils/api/getUser";
import { getCuentas } from "../../utils/api/getCuentas";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { BounceIn, BounceOut } from "react-native-reanimated";

const home = () => {
  const { firstname } = getUser();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Stat horizontal>
          <Text style={styles.greetingText}>
            {getTimeGreetings()}, {firstname}
          </Text>
          <Animated.View entering={BounceIn} exiting={BounceOut}>
            <FontAwesome6 name="hand-sparkles" size={24} color="#51566b" />
          </Animated.View>
        </Stat>
        <View>
          <LinearGradient
            colors={["#d5ccfa", "#e3e0fb", "#eaedf4"]}
            start={{ x: 0, y: 3 }}
            end={{ x: 1, y: 1 }}
            style={styles.fondosContainer}
          >
            <View>
              <Text style={styles.textColorSecondary}>Fondos Disponible</Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  ...styles.textColorPrimary,
                }}
              >
                +Agregar
              </Text>
              <Text style={styles.textColorSecondary}>Ver detalles</Text>
            </View>
            <View>
              <AntDesign name="wallet" size={64} color="#51566b" />
            </View>
          </LinearGradient>
        </View>
        <Stat horizontal>
          <View>
            <Text style={{ fontWeight: "bold", ...styles.textColorTertiary }}>
              Crea tu presupuesto
            </Text>
            <Text style={{ fontWeight: "300" }}>Dinero disponible</Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                ...styles.textColorTertiary,
              }}
            >
              $0.00
            </Text>
          </View>
        </Stat>

        <Stat horizontal>
          <View>
            <Text style={{ fontWeight: "bold", ...styles.textColorTertiary }}>
              Crea una meta de ahorro
            </Text>
            <Text style={{ fontWeight: "300" }}>
              y llega a tus objetivos financieros mas rapido
            </Text>
          </View>
        </Stat>

        {/** <Text style={styles.sectionTitle}>Cuentas</Text>
        {accounts.map((account) => (
          <AccountCard key={account.id} {...account} />
        ))}
        <View style={styles.newAccountContainer}>
          <AntDesign name="pluscircle" size={24} color="black" />
          <Text style={styles.newAccountText}>
            Abrir una nueva cuenta de ahorros
          </Text>
        </View>
        <View>
          <Text style={styles.helpText}>
            ¿Necesitas ayuda?{" "}
            <Text style={styles.contactText}>Contáctanos</Text>
          </Text>
        </View>
        **/}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    maxWidth: "100%",
    width: "100%",
    padding: 16,
    gap: 10,
  },
  textColorPrimary: {
    color: "#51566b",
  },
  textColorSecondary: {
    color: "#7d7b98",
  },
  textColorTertiary: {
    color: "#404040",
  },
  greetingText: {
    fontSize: 24,
    color: "#51566b",
  },
  fondosContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 15,
    padding: 16,
  },
  sectionTitle: {
    marginTop: 12,
    fontWeight: "200",
  },
  newAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#D1D5DB",
    padding: 12,
  },
  newAccountText: {
    marginLeft: 8,
  },
  helpText: {
    fontSize: 12,
    fontWeight: "200",
    marginTop: 16,
  },
  contactText: {
    color: "#3B82F6",
  },
});

export default home;
