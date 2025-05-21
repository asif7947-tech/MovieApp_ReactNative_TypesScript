

export type T_MOVIE_API_RESPONSE = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: T_MOVIE[];
  total_pages: number;
  total_results: number;
};


export type T_MOVIE = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};


export type T_MOVIE_DETAIL = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: T_GENRE[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: T_PRODUCTION_COMPANY[];
  production_countries: T_PRODUCTION_COUNTRY[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: T_SPOKEN_LANGUAGE[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type T_GENRE  ={
  id: number
  name: string
}

export type T_PRODUCTION_COMPANY = {
  id: number
  logo_path: any
  name: string
  origin_country: string
}

export type T_PRODUCTION_COUNTRY = {
  iso_3166_1: string
  name: string
}

export type T_SPOKEN_LANGUAGE = {
  english_name: string
  iso_639_1: string
  name: string
}
