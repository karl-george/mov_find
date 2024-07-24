import CustomHeaderSearch from '@/components/CustomHeaderSearch';
import MovieCardSmall from '@/components/MovieCardSmall';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

const Search = () => {
  const { query } = useLocalSearchParams();
  const [movies, setMovies] = useState();

  const fetchMovies = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
      );

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <ScrollView>
      <View className='w-full h-full px-4 pt-4 bg-primary'>
        <CustomHeaderSearch />
        <View className='mt-6'>
          <Text className='mb-4 text-2xl text-text font-acme'>{query}</Text>
          <FlatList
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            data={movies}
            renderItem={({ item }) => <MovieCardSmall movie={item} />}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            scrollEnabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Search;
