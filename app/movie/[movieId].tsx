import { View, Text, Image, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { details } from '@/constants/data';
import { Movie } from '@/components/MovieCardLarge';

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
      <View className='h-full px-6 bg-primary'>
        <Text className='mt-5 text-3xl text-center text-text font-acme'>
          {movieDetails.title}
        </Text>
        <View className='mt-5'></View>
        <Text className='mt-5 text-2xl text-center text-text font-acme'>
          {movieDetails.tagline}
        </Text>
        <Text className='mt-5 text-lg text-text font-acme'>
          {movieDetails.overview}
        </Text>
      </View>
    </View>
  );
};

export default MovieId;
