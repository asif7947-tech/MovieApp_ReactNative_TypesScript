import { ViewStyle } from "react-native";

export interface MovieCardProps {
  title: string;
  posterPath: string;
  selected: boolean;
  onPress: () => void;
  style?: ViewStyle;
}