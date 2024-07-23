import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { details } from '@/constants/data';

const MovieId = () => {
  // 'https://api.themoviedb.org/3/movie/1022789?language=en-US'
  const { movieId } = useLocalSearchParams();
  const movieDetails = details;

  return (
    <View>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
        className='w-full h-[220px]'
        resizeMode='cover'
      />
      <View className='w-full h-full px-6 bg-primary'>
        <Text className='mt-5 text-3xl text-center text-text font-acme'>
          {movieDetails.title}
        </Text>
        <Text className='mt-5 text-2xl text-center text-text font-acme'>
          {movieDetails.tagline}
        </Text>
        <Text className='mt-5 text-lg text-text font-acme'>
          {movieDetails.overview}
        </Text>
        <Text className='mt-5 text-lg text-text font-acme'>
          Genres: {movieDetails.genres.map((genre) => genre.name).join(', ')}
        </Text>
        <Text className='mt-2 text-lg text-text font-acme'>
          Runtime: {movieDetails.runtime}m
        </Text>
        <Text className='mt-2 text-lg text-text font-acme'>
          Release Date: {movieDetails.release_date}
        </Text>
        <Text className='mt-2 text-lg text-text font-acme'>
          Rating: {movieDetails.vote_average.toFixed(1)}
        </Text>
      </View>
    </View>
  );
};

export default MovieId;
