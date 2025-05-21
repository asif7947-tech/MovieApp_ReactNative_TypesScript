import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import styles from './style';
import AppLocalimages from '../../assets/images';
import { T_TICKET_DETAIL_SCREEN } from './types';
import Screens from '../../navigation/screens';
import { Ionicons } from "@expo/vector-icons"; // or use react-native-vector-icons/Ionicons
import ScreenWrapper from '../../component/screenWrapper';
import { verticalScale } from '../../theme/responsive';


interface I_TIME_DATE {
  date: string;
  year: string;
}

const hallDates: I_TIME_DATE[] = [
  { date: '5 Mar', year: '2023' },
  { date: '6 Mar', year: '2025' },
  { date: '7 Mar', year: '2024' },
  { date: '8 Mar', year: '2020' },
  { date: '9 Mar', year: '2022' },
  { date: '10 Mar', year: '2019' },
];
interface Showtime {
  id:number;
  time: string;
  hall: string;
  price: number;
  bonus: number;
}
const showtimes: Showtime[] = [
  { id: 0, time: '12:30', hall: 'Cinetech + Hall 1', price: 50, bonus: 2500 },
  { id: 1, time: '13:30', hall: 'Cinetech + Hall 2', price: 75, bonus: 3000 },
    {id: 1,  time: '3:30', hall: 'Cinetech + Hall 1', price: 75, bonus: 3000 },
    { id: 1, time: '2:30', hall: 'Cinetech + Hall 1', price: 75, bonus: 3000 },

];

const TicketDetailScreen: React.FC<T_TICKET_DETAIL_SCREEN> = ({ navigation, route }) => {
  const [selectedDate, setSelectedDate] = useState<string>('5 Mar');
  const [selectedTime, setSelectedTime] = useState<I_TIME_DATE>({ date: '5 Mar', year: '2023' });
  const [selectedTimeIndex, setSelectedTimeIndex] = useState<number>(0);
  const [selectedHall, setSelectedHall] = useState<Showtime>({ id: 0, time: '12:30', hall: 'Cinetech + Hall 1', price: 50, bonus: 2500 });

  return (
    <ScreenWrapper >
      <View style={styles.container}>

<View style={styles.headerContainer}>
    <TouchableOpacity style={styles.backButton} onPress={
      () => navigation.goBack()
    }>
      <Ionicons name="chevron-back" size={28} color="#111" />
    </TouchableOpacity>
    <View style={styles.headerTextContainer}>
      <Text style={styles.title}>{route.params.moviesName}</Text>
      <Text style={styles.subtitle}>`In Theaters {route.params.releaseDate}`</Text>
      </View>
      </View>

<View style={styles.mainContainer}>
      {/* Date Tabs */}
      <Text style={styles.dateLabel}>Date</Text>
      <View style={styles.dateRow}>
        {hallDates.map(dateTime => (
          <TouchableOpacity
            key={dateTime.date}
            style={[
              styles.dateButton,
              selectedDate === dateTime.date && styles.selectedDateButton,
            ]}
            onPress={() =>{
              setSelectedDate(dateTime.date);
              setSelectedTime(dateTime);
            }}
          >
            <Text
              style={[
                styles.dateText,
                selectedDate === dateTime.date && styles.selectedDateText,
              ]}
            >
              {dateTime.date}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Showtime + Hall */}
      <FlatList
        data={showtimes}
        horizontal
        contentContainerStyle={{ paddingVertical: 10 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.hallContainer}>
            <View style ={{flexDirection:'row', marginStart:verticalScale(12)}}>
              <Text style={styles.hallTime}>{item.time}</Text>
            <Text style={styles.hallName}>{item.hall}</Text>
              </View>
          <TouchableOpacity
            style={[
              styles.hallCard,
              selectedTimeIndex === index && styles.selectedHallCard,
            ]}
            onPress={() => {
              setSelectedTimeIndex(index);
              setSelectedHall(item);
            }}
          >
            <Image
              source={ AppLocalimages.MovieHallLayout2 }
              style={styles.hallImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style ={{flexDirection:'row', marginStart:verticalScale(12), marginTop:verticalScale(8)}}>
            <Text style={styles.priceText}>
              From <Text style={styles.bold}>${item.price}</Text> or{' '}
              <Text style={styles.bold}>{item.bonus} bonus</Text>
            </Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Select Seats Button */}
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate(Screens.SEAT_BOOKING,{
        movieName: route.params.moviesName,
        releaseDate: route.params.releaseDate,
        selectedTime: `${selectedTime?.date}, ${selectedTime?.year}`,
        selectedCinema: selectedHall?.hall || '',
      })}}>
        <Text style={styles.buttonText}>Select Seats</Text>
      </TouchableOpacity>
    </View>
    </View>

      </ScreenWrapper>
  );
};

export default TicketDetailScreen;
