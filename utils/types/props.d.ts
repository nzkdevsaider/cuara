interface ButtonProps {
  children: React.ReactNode;
  buttonColor?: string;
  icon?: string;
  mode?: "text" | "contained" | "outlined" | "elevated" | "contained-tonal" | undefined;
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
}

interface StatProps {
  children: React.ReactNode;
  horizontal?: boolean;
  vertical?: boolean;
}
