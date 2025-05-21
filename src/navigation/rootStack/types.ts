// navigation/types.ts

import { T_MOVIE_DETAIL_SCREEN_PARAM } from "../../screens/movieDetail/types";
import { T_SEAT_BOOKING_SCREEN_ROUTE_PARAMS } from "../../screens/seatBooking/types";
import { T_SPLASH_SCREEN_PARAM } from "../../screens/splash/types";
import { T_TICKET_DETAIL_SCREEN_ROUTE_PARAMS } from "../../screens/ticketDetail/types";
import { T_MOVIE_TRAILER_SCREEN_ROUTE_PARAMS } from "../../screens/trailer/types";
import Screens from "../screens";


export type RootStackParamList = {
  [Screens.SPLASH]: T_SPLASH_SCREEN_PARAM;
  [Screens.HOME_STACK]: undefined;
  [Screens.MOVIE_DETAIL]: T_MOVIE_DETAIL_SCREEN_PARAM
  [Screens.TICKET_DETAIL]: T_TICKET_DETAIL_SCREEN_ROUTE_PARAMS;
  [Screens.SEAT_BOOKING]: T_SEAT_BOOKING_SCREEN_ROUTE_PARAMS;
  [Screens.MOVIE_TRAILER]: T_MOVIE_TRAILER_SCREEN_ROUTE_PARAMS;
};
