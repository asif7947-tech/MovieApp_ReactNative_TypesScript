import * as React  from 'react';
import { COLORS } from '../../theme/theme';
import { FlatList, ImageBackground, Image,ScrollView, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { horizontalScale, verticalScale } from '../../theme/responsive';
import { Seat, T_SEAT_BOOKING_SCREEN } from './types';
import ScreenWrapper from '../../component/screenWrapper';
import AppHeader from '../../component/appHeader';
import { baseImagePath } from '../../api/apiCalls';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import AppLocalimages from '../../assets/images';

const ROWS = 10;
const COLS = 14;

const SEAT_PRICES = {
  regular: 50,
  vip: 150,
};

const generateSeats = (): Seat[][] => {
  // Generate a 2D array of seats with some unavailable and VIP seats
  // You can customize this logic as needed
  return Array.from({ length: ROWS }, (_, row) =>
    Array.from({ length: COLS }, (_, col) => ({
      id: `${row}-${col}`,
      row,
      col,
      type: row === 9 ? "vip" : "regular",
      status: Math.random() < 0.1 ? "unavailable" : "available",
    }))
  );
};

const seatCategories = [
  { label: "Selected", color: "#C9A74B" },
  { label: "Not available", color: "#D1D5DB" },
  { label: "VIP (150$)", color: "#4B367C" },
  { label: "Regular (50 $)", color: "#7EC4FA" },
];

const SeatBookingScreen: React.FC<T_SEAT_BOOKING_SCREEN> = ({ navigation, route }) => {
  const [seats, setSeats] = React.useState<Seat[][]>(generateSeats());
  const [selectedSeats, setSelectedSeats] = React.useState<Seat[]>([]);

  const handleSeatPress = (seat: Seat) => {
    if (seat.status === "unavailable") return;
    if (seat.status === "selected") {
      setSeats(prev =>
        prev.map(row =>
          row.map(s =>
            s.id === seat.id ? { ...s, status: "available" } : s
          )
        )
      );
      setSelectedSeats(prev => prev.filter(s => s.id !== seat.id));
    } else if (seat.status === "available") {
      setSeats(prev =>
        prev.map(row =>
          row.map(s =>
            s.id === seat.id ? { ...s, status: "selected" } : s
          )
        )
      );
      setSelectedSeats(prev => [...prev, { ...seat, status: "selected" }]);
    }
  };

  const totalPrice = selectedSeats.reduce((sum, seat) => sum + SEAT_PRICES[seat.type], 0);

  return (
<ScreenWrapper>
      <View style={styles.container}>
      {/* Movie Info */}
      <View style={styles.headerContainer}>
    <TouchableOpacity style={styles.backButton} onPress={
      () => navigation.goBack()
    }>
      <Ionicons name="chevron-back" size={28} color="#111" />
    </TouchableOpacity>
    <View style={styles.headerTextContainer}>
      <Text style={styles.title}>{route.params.movieName}</Text>
      <Text style={styles.subtitle}>`{route.params.releaseDate} | {route.params.selectedTime} | {route.params.selectedCinema}`</Text>
      </View>
      </View>

      {/* Seat Map */}
      <ScrollView horizontal >
        <View style={styles.seatMap}>
         <View style={{paddingHorizontal:horizontalScale(20) , marginTop:verticalScale(30)}}>
         <Text style={styles.screenLabel}>SCREEN</Text>
          {seats.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.seatRow}>
              {row.map(seat => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.type === "vip" && styles.vipSeat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "unavailable" && styles.unavailableSeat,
                  ]}
                  onPress={() => handleSeatPress(seat)}
                  disabled={seat.status === "unavailable"}
                />
              ))}
            </View>
          ))}
         </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>

        // Seat Categories Info Section
<View style={styles.legendContainer}>

<View style={styles.row}>
      <View style={styles.item}>
        <Image source={AppLocalimages.MovieSeat} style={[styles.icon, { tintColor: seatCategories[0].color }]} />
        <Text style={styles.label}>{seatCategories[0].label}</Text>
      </View>
      <View style={[styles.item, {marginStart:verticalScale(12)}]}>
        <Image source={AppLocalimages.MovieSeat} style={[styles.icon, { tintColor: seatCategories[1].color }]} />
        <Text style={styles.label}>{seatCategories[1].label}</Text>
      </View>
    </View>
    <View style={styles.row}>
      <View style={[styles.item]}>
        <Image source={AppLocalimages.MovieSeat} style={[styles.icon, { tintColor: seatCategories[2].color }]} />
        <Text style={styles.label}>{seatCategories[2].label}</Text>
      </View>
      <View style={[styles.item]}>
        <Image source={AppLocalimages.MovieSeat} style={[styles.icon, { tintColor: seatCategories[3].color }]} />
        <Text style={styles.label}>{seatCategories[3].label}</Text>
      </View>
    </View>
</View>

      {/* Selected seat info */}
      {selectedSeats.length > 0 && (
        <View style={styles.selectedSeatBox}>
          <Text style={styles.selectedSeatText}>
            {selectedSeats.length} / {selectedSeats.map(s => `${s.row + 1} row`).join(", ")}
          </Text>
          <TouchableOpacity onPress={() => {

          }}>
            <Ionicons name="close" size={20} color="#6B7A99" />
          </TouchableOpacity>
        </View>
      )}

      {/* Price and Pay button */}
      <View style={styles.pricePayRow}>
        <View style={styles.priceBox}>
          <Text style={styles.priceLabel}>Total Price</Text>
          <Text style={styles.priceValue}>${totalPrice}</Text>
        </View>
        <TouchableOpacity style={styles.payButton} onPress={
          () => {
            
          }
        }>
          <Text style={styles.payButtonText}>Proceed to pay</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
</ScreenWrapper>
  );
};

export default SeatBookingScreen;