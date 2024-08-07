import { View, Image } from 'react-native';
import { Link } from 'expo-router';

export type Movie = {
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

const MovieCardLarge = ({ movie }: { movie: Movie }) => {
  return (
    <View className='mr-3'>
      <Link href={`/movie/${movie.id}`}>
        <View className='w-[150px] h-[240px] py-3 rounded-md'>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className='w-full h-full rounded-md'
            resizeMode='cover'
          />
        </View>
      </Link>
    </View>
  );
};

export default MovieCardLarge;
