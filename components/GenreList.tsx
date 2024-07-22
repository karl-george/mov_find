import { FlatList } from 'react-native';
import { genres } from '@/constants/data';
import Genre from './Genre';

interface Props {
  setGenreSelected: Function;
  genreSelected: string;
}

const CategoryList = ({ setGenreSelected, genreSelected }: Props) => {
  return (
    <FlatList
      data={genres}
      renderItem={({ item }) => (
        <Genre
          genre={item}
          setGenreSelected={setGenreSelected}
          genreSelected={genreSelected}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategoryList;
