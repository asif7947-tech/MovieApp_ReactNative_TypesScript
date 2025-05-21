import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { I_SEACRH_MOVIE_PROPS } from './types';
import styles from './style';
import { baseImagePath } from '../../api/apiCalls';
import AppLocalimages from '../../assets/images';


const SearchMovieCard: React.FC<I_SEACRH_MOVIE_PROPS> = ({ title, posterPath, genre = 'Sci-Fi', onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{
            uri: baseImagePath('w200', posterPath)
        }}
        // source={{ 
        //     // uri: `https://image.tmdb.org/t/p/w200${posterPath}` 
        //     uri: baseImagePath( 'w200', posterPath)
        // }}
        style={styles.thumbnail}
      />
       <View style={styles.contentWrapper}>
    <View style={styles.textContainer}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {title.length > 20 ? `${title.slice(0, 20)}...` : title}
      </Text>
      <Text style={styles.genre}>{genre}</Text>
    </View>
    </View>
      <Image source={AppLocalimages.MovieSearchMenu} style={styles.menuIcon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default SearchMovieCard;