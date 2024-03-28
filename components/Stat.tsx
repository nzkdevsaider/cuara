import { View, StyleSheet } from "react-native";

const Stat = ({ children, horizontal, vertical }: StatProps) => {
  const containerStyle = [
    styles.container,
    horizontal && styles.horizontal,
    vertical && styles.vertical,
  ];

  return <View style={containerStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 0.40,
    elevation: 2,
    borderRadius: 15,
    width: "100%",
    flexDirection: "row",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  vertical: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Stat;
