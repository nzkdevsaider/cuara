import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button as ButtonPaper } from "react-native-paper";
import { Color } from "../utils/colors";

const Button = ({
  children,
  buttonColor,
  icon,
  mode,
  disabled,
  loading,
  onPress,
}: ButtonProps) => {
  return (
    <ButtonPaper
      mode={mode ?? "contained"}
      icon={icon}
      loading={loading}
      disabled={disabled}
      buttonColor={buttonColor ?? Color.button.primary}
      onPress={onPress}
    >
      {children}
    </ButtonPaper>
  );
};

export default Button;
