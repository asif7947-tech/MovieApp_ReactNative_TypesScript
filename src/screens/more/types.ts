import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { T_BOTTOM_TAB_SCREEN_PARAM } from "../../navigation/homeStack/types";
import Screens from "../../navigation/screens";


export type T_MORE_SCREEN = NativeStackScreenProps<
  T_BOTTOM_TAB_SCREEN_PARAM,
  typeof Screens.MORE
>;

export type T_MORE_SCREEN_PARAM = undefined;