import { View } from "react-native-ui-lib";

const Stat = ({
  children,
  horizontal,
  vertical,
}: {
  children: React.ReactNode;
  horizontal?: boolean;
  vertical?: boolean;
}) => {
  return (
    <View
      className={`bg-white p-4 shadow-lg ${
        horizontal
          ? "flex-row justify-between items-center"
          : vertical
          ? "flex-col justify-center"
          : "flex-row"
      } w-full rounded-lg`}
    >
      {children}
    </View>
  );
};

export default Stat;
