
import Screens from "../screens";

export type T_BOTTOM_TAB_SCREEN_PARAM = {
  [Screens.DASHBOARD]: undefined;
  [Screens.WATCH]: undefined;
  [Screens.MEDIA_LIBRARY]: undefined;
  [Screens.MORE]: undefined;
};


export type BottomTabScreenProps<T extends keyof T_BOTTOM_TAB_SCREEN_PARAM> = {
  navigation: {
    navigate: (screen: T, params?: T_BOTTOM_TAB_SCREEN_PARAM[T]) => void;
    goBack: () => void;
  };
  route: {
    key: string;
    name: T;
    params?: T_BOTTOM_TAB_SCREEN_PARAM[T];
  };
};



