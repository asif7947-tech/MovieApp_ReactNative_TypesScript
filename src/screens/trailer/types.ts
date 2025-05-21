import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/rootStack/types";
import Screens from "../../navigation/screens";

export type T_MOVIE_TRAILER_SCREEN = NativeStackScreenProps<
  RootStackParamList,
  typeof Screens.MOVIE_TRAILER
>;

export type T_MOVIE_TRAILER_SCREEN_ROUTE_PARAMS = {
  movieId: number;
}