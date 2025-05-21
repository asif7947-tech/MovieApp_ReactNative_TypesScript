import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootStack/types';
import Screens from '../../navigation/screens';

export type SplashScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  typeof Screens.SPLASH
>;

export type T_SPLASH_SCREEN_PARAM = undefined;