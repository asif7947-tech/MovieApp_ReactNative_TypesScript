import { View, Text, Image, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { gotoDetailScreenFromWatch, T_WATCH_SCREEN } from './types'
import ScreenWrapper from '../../component/screenWrapper'
import {T_MOVIE, T_MOVIE_API_RESPONSE} from '../../api/types';
import { apiRequest, apiRoutes } from '../../api/apis'
import styles from './style'
import { Ionicons } from '@expo/vector-icons';
import TabHeader from '../../component/tabHeader';
import { MovieCard } from '../../component/movieCard';
import SearchBar from '../../component/searchBar';
import SearchMovieCard from '../../component/searchMovieCard';
import Screens from '../../navigation/screens';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/rootStack/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type RootNavigation = NativeStackNavigationProp<RootStackParamList, typeof Screens.MOVIE_DETAIL>;

const WatchScreen: React.FC<T_WATCH_SCREEN> = () => {

    const navigation = useNavigation<RootNavigation>();

 const [upcomingMovies, setUpcomingMovies] =
    useState<T_MOVIE[] | null>([]);

  const [movies, setMovies] = useState<T_MOVIE[]>([]);
  const [filtered, setFiltered] = useState<T_MOVIE[]>([]);
  const [search, setSearch] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [searchMoviesList,setSearchMoviesList] = useState<T_MOVIE[]>([]);


   const fetchUpcomingMovies = async () => {
  console.log('fetchUpcomingMovies22222');
  const response = await apiRequest(apiRoutes.UPCOMING_MOVIE, 'get',);
  return response.results;
};

const goToMovieDetailScreen = (movieId: number) => {
  navigation.navigate(Screens.MOVIE_DETAIL, { movieId });
  };

const onSearchMovies = async (movieName: string) => {
    console.log("call search ",movieName);
    try {
    const searchApiResponse = await apiRequest(apiRoutes.SEARCH_MOVIE+movieName, 'get');
    setSearchMoviesList(searchApiResponse.results);
  } catch (error) {
    console.log('Api Error ',error);
  } 
  };

const loadMovies = async () => {
  searchActive && setSearchActive(false);
      const data = await fetchUpcomingMovies();
      console.log('movies size', data.length);
    
      setUpcomingMovies(data);
      setMovies(data);
    };


  useEffect(() => {
    loadMovies();
  }, []);

  useEffect(() => {
    if (search === '') {
      setFiltered([]);
      setUpcomingMovies(movies);
      setSearchActive(false);
    } else if (search.length > 3) {
      const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(filteredMovies);
    }
  }, [search]);

  return (
    <ScreenWrapper>
       <View style={styles.container}>
      {!searchActive && (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Watch</Text>
          <TouchableOpacity onPress={() => setSearchActive(true)}>
            <Ionicons name="search" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      )}

      {searchActive && (
        <SearchBar
          value={search}
          onChangeText={text => 
            {
              setSearch(text);
              // onSearchMovies(text);
            }
          }
          onClear={() => {
            setSearch('');
            setFiltered(movies);
            setSearchActive(false);
            setSearchMoviesList([]);
          }}
          />
      )}
      <View style={styles.mainContainer}>
      {/* <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        numColumns={searchActive ? 2 : 1}
        columnWrapperStyle={searchActive ? { justifyContent: 'space-between' } : undefined}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false} 
        key={searchActive ? 'grid' : 'list'} // Forces re-render between layouts
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            posterPath={item.poster_path}
            selected={item.id === 0}
            style={{ 
        flex: 1, 
        margin: searchActive ? 8 : 0, 
        width: searchActive ? '48%' : '100%' 
      }}
            onPress={() => {
        
              setSearchActive(false);
              setSearch('');
            }}
          />
        )}
      /> */}

      {searchActive && filtered.length > 0 ? (
            filtered.length > 0 ? (
              <FlatList
                data={filtered}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                 <SearchMovieCard
                  title={item.title}
                  posterPath={item.poster_path}
                  genre={"Sci-Fi"}
                  onPress={() => {
                    goToMovieDetailScreen(item.id);
                  }}
                />
                )}
              />
            ) : (
              search.length > 3 && (
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                  <Text>No movies found</Text>
                </View>
              )
            )
          ) : (
                  <FlatList
        data={upcomingMovies}
        keyExtractor={item => item.id.toString()}
        numColumns={searchActive ? 2 : 1}
        columnWrapperStyle={searchActive ? { justifyContent: 'space-between' } : undefined}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false} 
        key={searchActive ? 'grid' : 'list'} // Forces re-render between layouts
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            posterPath={item.poster_path}
            selected={item.id === 0}
            style={{ 
        flex: 1, 
        margin: searchActive ? 8 : 0, 
        width: searchActive ? '48%' : '100%' 
      }}
            onPress={() => {
              goToMovieDetailScreen(item.id);
            }}
          />
        )}
      />
          )}
        </View>
    </View>
    </ScreenWrapper>
  )
}

export default WatchScreen