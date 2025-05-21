import { TextInputProps } from "react-native";

export interface SearchBarProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
}