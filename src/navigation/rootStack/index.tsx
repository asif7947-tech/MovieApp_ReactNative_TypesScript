import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';
import Screens from '../screens';
import SplashScreen from '../../screens/splash';
import HomeStack from '../homeStack';
import { MovieDetailScreen, SeatBookingScreen, TicketDetailScreen } from '../../screens';
import MovieTrailerScreen from '../../screens/trailer';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName={Screens.SPLASH} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screens.SPLASH}  component={SplashScreen} />
        <Stack.Screen name={Screens.HOME_STACK} component={HomeStack} />
        <Stack.Screen name={Screens.MOVIE_DETAIL} component={MovieDetailScreen} />
        <Stack.Screen name={Screens.TICKET_DETAIL} component={TicketDetailScreen} />
        <Stack.Screen name={Screens.SEAT_BOOKING} component={SeatBookingScreen} />
        <Stack.Screen name={Screens.MOVIE_TRAILER} component={MovieTrailerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
