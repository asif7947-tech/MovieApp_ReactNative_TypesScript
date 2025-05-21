import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/rootStack/types";
import Screens from "../../navigation/screens";


export type T_SEAT_BOOKING_SCREEN = NativeStackScreenProps<
  RootStackParamList,
  typeof Screens.SEAT_BOOKING
>;

export type T_SEAT_BOOKING_SCREEN_ROUTE_PARAMS = {
  movieName: string;
  releaseDate: string;
  selectedTime: string;
  selectedCinema: string;
};


// src/screens/seatBooking/types.ts
export type SeatType = "regular" | "vip";
export type SeatStatus = "available" | "selected" | "unavailable";

export type Seat = {
  id: string;
  row: number;
  col: number;
  type: SeatType;
  status: SeatStatus;
};