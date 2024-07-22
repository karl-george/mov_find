import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface Props {
  genre: { name: string; id: number };
  setGenreSelected: Function;
  genreSelected: string;
}

const Genre = ({ genre, setGenreSelected, genreSelected }: Props) => {
  return (
    <TouchableOpacity>
      <Text className='mr-2 text-lg capitalize text-text'>{genre.name}</Text>
    </TouchableOpacity>
  );
};

export default Genre;
