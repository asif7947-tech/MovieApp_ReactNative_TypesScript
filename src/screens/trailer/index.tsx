import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { T_MOVIE_TRAILER_SCREEN } from './types'
import { apiRequest, apiRoutes } from '../../api/apis'
import { WebView } from 'react-native-webview';


const MovieTrailerScreen: React.FC<T_MOVIE_TRAILER_SCREEN> = ({navigation, route}) => {
 const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
    const { movieId } = route.params
  console.log('movieId', movieId);

  const fetchMovieTrailer = async () => {
    try {
      setLoading(true)
      const response: any = await apiRequest(apiRoutes.MOVIE_VIDEO+movieId+'/videos', 'get');

      console.log('trailer data', response);
      const trailer = response.results.find(
        (vid: any) => vid.site === 'YouTube' && vid.type === 'Trailer'
      );
      console.log('trailer', trailer);

      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=1`);
        console.log('trailerUrl', trailerUrl);
      } else {
        setTrailerUrl(null);
      }
    } catch (error) {
      console.error('Failed to load trailer:', error);
    } finally {
      console.log("calllllll")
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, [])
  
  return (
    <View style={styles.container}>
      <WebView
        source={{ 
          uri: trailerUrl || 'https://www.youtube.com/watch?v=videoId',
         }}
        style={styles.webview}
        allowsFullscreenVideo
        javaScriptEnabled={true}
          mediaPlaybackRequiresUserAction={false}
          onMessage={(event) => {
            if (event.nativeEvent.data === 'videoEnded') {
              navigation.goBack();
            }
          }}
      />
    </View>
  )
}

export default MovieTrailerScreen