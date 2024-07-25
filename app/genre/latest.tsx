import CustomHeaderSearch from '@/components/CustomHeaderSearch';
import MovieCardSmall from '@/components/MovieCardSmall';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

const Latest = () => {
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
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
        options
      );

      const data = await response.json();
      setMovies(data.results.slice(0, 18));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <ScrollView>
      <View className='w-full h-full px-4 pt-4 bg-primary'>
        <CustomHeaderSearch />
        <View className='mt-6'>
          <Text className='mb-4 text-2xl text-text font-acme'>
            Latest Movies
          </Text>
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

export default Latest;
