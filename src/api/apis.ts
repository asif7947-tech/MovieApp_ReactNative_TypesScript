import {axiosClient} from '.';
import { T_MOVIE_API_RESPONSE } from './types';

export const apiRoutes = {
   NOW_PLAYING: `/movie/now_playing`,
  UPCOMING_MOVIE: `/movie/upcoming`,
  POPULAR_MOVIE: `/movie/popular`,
  SEARCH_MOVIE: `/search/movie?query=`,
  MOVIE_DETAIL: `/movie/`,
  MOVIE_CAST: `/movie/`,
  GENRE_API_URL: `/genre/movie/list`,
  MOVIE_VIDEO: `/movie/`,
};

export const apiRequest = async (
  url: string,
  method: 'post' | 'get' | 'put',
  data?: any,
  params?: any,
) => {
  try {
    const response = await axiosClient({
      url,
      method,
      data,
      params,
    });    
    console.log('API request response data:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('API request error:', error);
    console.error('API request error message:', error.message);
    console.error('API request error response:', error.response);
    throw error;
  }
};
