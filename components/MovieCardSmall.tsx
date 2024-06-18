import { View, Text, Image } from 'react-native';
import React from 'react';
import { Movie } from './MovieCardLarge';

const MovieCardSmall = ({ movie }: { movie: Movie }) => {
  return (
    <View className='mb-3'>
      <View className='h-[140px] flex-row border-2 border-red-300 w-[100px]'>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className='w-[100px] h-[140px] rounded-md'
          resizeMode='cover'
        />
      </View>
    </View>
  );
};

export default MovieCardSmall;
