import CustomHeaderSearch from '@/components/CustomHeaderSearch';
import MovieCardSmall from '@/components/MovieCardSmall';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

const Latest = () => {
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);

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
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
        options
      );

      const data = await response.json();
      if (page === 1) {
        setMovies(data.results.slice(0, 18));
      } else {
        setMovies((prevMovies) => [
          ...prevMovies,
          ...data.results.slice(0, 18),
        ]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <View className='w-full h-full px-4 pt-4 bg-primary'>
      <CustomHeaderSearch />
      <View className='mt-6'>
        <Text className='mb-4 text-2xl text-text font-acme'>Latest Movies</Text>
        <FlatList
          numColumns={3}
          keyExtractor={(item) => item.id}
          data={movies}
          renderItem={({ item }) => <MovieCardSmall movie={item} />}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
          onEndReached={() => setPage(page + 1)}
          className='mb-40'
        />
      </View>
    </View>
  );
};

export default Latest;
