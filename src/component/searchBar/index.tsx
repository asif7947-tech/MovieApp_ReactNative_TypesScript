import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SearchBarProps } from './types';
import styles from './styles';


export const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText, onClear, ...props }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#1F2937" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="TV shows, movies and more"
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={onClear}>
          <Ionicons name="close" size={20} color="#1F2937" style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;