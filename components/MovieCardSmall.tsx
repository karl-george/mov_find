import { View, Text, Image } from 'react-native';
import React from 'react';
import { Movie } from './MovieCardLarge';

const MovieCardSmall = ({ movie }: { movie: Movie }) => {
  return (
    <View className='mb-3'>
      <View className='h-[180px] w-[120px]'>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className='w-full h-full rounded-md'
          resizeMode='cover'
        />
      </View>
    </View>
  );
};

export default MovieCardSmall;
