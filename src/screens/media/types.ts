import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { T_BOTTOM_TAB_SCREEN_PARAM } from "../../navigation/homeStack/types";
import Screens from "../../navigation/screens";


export type T_MEDIA_LIBRARY_SCREEN = NativeStackScreenProps<
  T_BOTTOM_TAB_SCREEN_PARAM,
  typeof Screens.MEDIA_LIBRARY
>;

export type T_MEDIA_LIBRARY_SCREEN_PARAM = undefined;