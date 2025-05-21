import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MovieCardProps } from './types';
import styles from './style';
import { baseImagePath } from '../../api/apiCalls';

export const MovieCard: React.FC<MovieCardProps> = ({ title, posterPath, selected, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card,style ,selected && styles.selectedBorder]}>
      <Image source={{
        //  uri: `https://image.tmdb.org/t/p/w500${posterPath}`
        uri: baseImagePath('w500', posterPath)
          }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

