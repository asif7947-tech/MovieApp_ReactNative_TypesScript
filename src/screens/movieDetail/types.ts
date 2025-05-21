import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { T_BOTTOM_TAB_SCREEN_PARAM } from "../../navigation/homeStack/types";
import Screens from "../../navigation/screens";
import { RootStackParamList } from "../../navigation/rootStack/types";


export type T_MOVIE_DETAIL_SCREEN = NativeStackScreenProps<
  RootStackParamList,
  typeof Screens.MOVIE_DETAIL
>;

export type T_MOVIE_DETAIL_SCREEN_PARAM = {
    movieId: number;
}