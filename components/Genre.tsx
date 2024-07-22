import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface Props {
  genre: { name: string; id: number };
  setGenreSelected: Function;
  genreSelected: string;
}

const Genre = ({ genre, setGenreSelected, genreSelected }: Props) => {
  return (
    <TouchableOpacity onPress={() => setGenreSelected(genre.name)}>
      <Text
        className={`mr-2 text-xl capitalize font-acme ${
          genreSelected === genre.name
            ? 'text-text border-l border-blue-400 pl-1.5'
            : 'text-tertiary'
        }`}
      >
        {genre.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Genre;
