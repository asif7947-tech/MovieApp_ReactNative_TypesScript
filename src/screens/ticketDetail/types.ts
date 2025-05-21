import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/rootStack/types";
import Screens from "../../navigation/screens";

export type T_TICKET_DETAIL_SCREEN = NativeStackScreenProps<
  RootStackParamList,
  typeof Screens.TICKET_DETAIL
>;

export type T_TICKET_DETAIL_SCREEN_ROUTE_PARAMS = {
  moviesName: string;
  releaseDate: string;
}