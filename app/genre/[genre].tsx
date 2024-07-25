import CustomHeaderSearch from '@/components/CustomHeaderSearch';
import MovieCardSmall from '@/components/MovieCardSmall';
import { genres } from '@/constants/data';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const Genre = () => {
  const { genre } = useLocalSearchParams();
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);

  const genreName = genres.reduce((acc, current) => {
    if (current.id === Number(genre)) {
      return current.name;
    }
    return acc;
  }, '');

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
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`,
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
  }, [genre, page]);

  return (
    <View className='w-full h-full px-4 pt-4 bg-primary'>
      <CustomHeaderSearch />
      <View className='mt-6'>
        <Text className='mb-4 text-2xl text-text font-acme'>{genreName}</Text>
        <FlatList
          numColumns={3}
          keyExtractor={(item) => item.id}
          data={movies}
          renderItem={({ item }) => <MovieCardSmall movie={item} />}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          onEndReached={() => setPage(page + 1)}
          showsVerticalScrollIndicator={false}
          className='mb-40'
        />
      </View>
    </View>
  );
};

export default Genre;
