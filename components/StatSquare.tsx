import { View, StyleSheet } from "react-native";

const StatSquare = ({ children } : { children: React.ReactNode }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

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
        display: "flex",
        flexDirection: "column",
        gap: 8,
        marginHorizontal: 8,
        width: "100%",
    },
});

export default StatSquare;