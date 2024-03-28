import { Text, TouchableOpacity, View } from "react-native";

const Button = ({
  children,
  className,
  color,
  size,
  onPress,
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity className="my-2" onPress={onPress}>
      <Text
        className={`${
          color ?? "bg-blue-500"
        } text-white p-2 rounded-md text-center ${
          size === "sm"
            ? "text-sm"
            : size === "lg"
            ? "text-lg p-4"
            : "text-md p-3"
        }`}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
