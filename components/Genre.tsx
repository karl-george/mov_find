import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface Props {
  genre: { name: string; id: number };
  setGenreSelected: Function;
  genreSelected: {
    name: string;
    id: number;
  };
}

const Genre = ({ genre, setGenreSelected, genreSelected }: Props) => {
  return (
    <TouchableOpacity onPress={() => setGenreSelected(genre)}>
      <Text
        className={`mr-2 text-xl capitalize font-acme ${
          genreSelected.name === genre.name
            ? 'text-text border-l border-[#1E778F] pl-1.5'
            : 'text-tertiary'
        }`}
      >
        {genre.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Genre;
