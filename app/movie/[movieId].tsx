import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

type DetailedMovie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: [string];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const MovieId = () => {
  const [movie, setMovie] = useState<DetailedMovie>();
  const { movieId } = useLocalSearchParams();

  const fetchMovie = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      );

      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <View>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        className='w-full h-[220px]'
        resizeMode='cover'
      />
      <View className='w-full h-full px-6 bg-primary'>
        <Text className='mt-5 text-3xl text-center text-text font-acme'>
          {movie?.title}
        </Text>
        <Text className='mt-5 text-2xl text-center text-text font-acme'>
          {movie?.tagline}
        </Text>
        <Text className='mt-5 text-lg text-text font-acme'>
          {movie?.overview}
        </Text>
        <Text className='mt-5 text-lg text-text font-acme'>
          Genres: {movie?.genres?.map((genre) => genre.name).join(', ')}
        </Text>
        <Text className='mt-2 text-lg text-text font-acme'>
          Runtime: {movie?.runtime}m
        </Text>
        <Text className='mt-2 text-lg text-text font-acme'>
          Release Date: {movie?.release_date}
        </Text>
        <Text className='mt-2 text-lg text-text font-acme'>
          Rating: {movie?.vote_average.toFixed(1)}
        </Text>
      </View>
    </View>
  );
};

export default MovieId;
