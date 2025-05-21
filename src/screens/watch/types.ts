import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { T_BOTTOM_TAB_SCREEN_PARAM } from "../../navigation/homeStack/types";
import Screens from "../../navigation/screens";
import { T_MOVIE_DETAIL_SCREEN_PARAM } from "../movieDetail/types";
import { RootStackParamList } from "../../navigation/rootStack/types";


export type T_WATCH_SCREEN = NativeStackScreenProps<
  T_BOTTOM_TAB_SCREEN_PARAM,
  typeof Screens.WATCH
>;

export type T_WATCH_SCREEN_PARAM = undefined;

 

export const gotoDetailScreenFromWatch = (
  navigation:  NativeStackNavigationProp<RootStackParamList, typeof Screens.MOVIE_DETAIL>,
  params: T_MOVIE_DETAIL_SCREEN_PARAM,
) => {
  navigation.navigate(Screens.MOVIE_DETAIL, params)
}