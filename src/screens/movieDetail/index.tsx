import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { apiRequest, apiRoutes } from '../../api/apis';
import { T_MOVIE_DETAIL } from '../../api/types';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { T_MOVIE_DETAIL_SCREEN } from './types';
import { SPACING } from '../../theme/theme';
import Screens from '../../navigation/screens';

const genreColors = ['#15D2BC', '#E26CA5', '#564CA3', '#CD9D0F']; // green, red, blue, yellow

const MovieDetailScreen: React.FC<T_MOVIE_DETAIL_SCREEN> = ({navigation, route}) => {
    
  const { movieId } = route.params;
  console.log('movieId', movieId);

  const [movie, setMovie] = useState<T_MOVIE_DETAIL | null>(null);

  const fetchMovieDetails = async () => {
    try {
      const response = await apiRequest(apiRoutes.MOVIE_DETAIL+movieId, 'get');
      setMovie(response);
    } catch (error) {
      console.log('Error fetching movie details:', error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return null;

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }}
        style={styles.poster}
        resizeMode="cover"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#fff" />
          <Text style={styles.backText}>Watch</Text>
        </TouchableOpacity>
        <View style={styles.posterContent}>
          <Text style={styles.subTitle}>
            In Theaters {new Date(movie.release_date).toDateString()}
          </Text>

          <TouchableOpacity style={styles.primaryButton} onPress={() => {
            console.log('Get Tickets Pressed');
            navigation.navigate(Screens.TICKET_DETAIL, {
              moviesName: movie.original_title,
              releaseDate: movie.release_date,
            })
          }}>
            <Text style={styles.primaryText}>Get Tickets</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => {
            console.log('Watch Trailer Pressed');
            navigation.navigate(Screens.MOVIE_TRAILER, {
              movieId: movie.id,
            })
          }}>
            <Ionicons name="play" size={16} color="#00A8E8" />
            <Text style={styles.secondaryText}>Watch Trailer</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Genres</Text>

        <View>
            {movie && (
              <View style={styles.genreContainer}>
                {movie?.genres.slice(0, 4).map((item: any, index: number) => {
                          const bgColor = genreColors[index] || '#ccc';
                    {
                        console.log('item', item);
                    }
                  return (
    <View key={item.id}
          style={{
            backgroundColor: bgColor,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '500', fontSize: 13 }}>
            {item.name}
          </Text>
        </View>
                  );
                })}
              </View>
            )}
            <Text style={[styles.tagline, {marginTop: SPACING.space_20}]}>
              {movie?.tagline}
            </Text>
          </View>

        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.overviewText}>{movie.overview}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetailScreen;
