import { View, Text, Image } from 'react-native';
import React from 'react';
import { Movie } from './MovieCardLarge';
import { Link } from 'expo-router';

const MovieCardSmall = ({ movie }: { movie: Movie }) => {
  return (
    <View className='mb-3'>
      <Link href={`/movie/${movie.id}`}>
        <View className='h-[180px] w-[120px]'>
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

export default MovieCardSmall;
