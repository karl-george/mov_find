import CustomHeader from '@/components/CustomHeader';
import GenreList from '@/components/GenreList';
import MovieCardLarge from '@/components/MovieCardLarge';
import MovieCardSmall from '@/components/MovieCardSmall';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

const Home = () => {
  const [genreSelected, setGenreSelected] = useState({ id: 0, name: 'Latest' });
  const [moviesByGenre, setMoviesByGenre] = useState();
  const [topMovies, setTopMovies] = useState();
  const [latestMovies, setLatestMovies] = useState();

  const fetchTopMovies = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        options
      );

      const data = await response.json();
      setTopMovies(data.results.slice(0, 5));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLatestMovies = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        options
      );

      const data = await response.json();
      setLatestMovies(data.results.slice(0, 12));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMoviesByGenre = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreSelected.id}`,
        options
      );

      const data = await response.json();
      setMoviesByGenre(data.results.slice(0, 12));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTopMovies();
    fetchLatestMovies();
  }, []);

  useEffect(() => {
    fetchMoviesByGenre();
  }, [genreSelected]);

  return (
    <ScrollView>
      <View className='w-full h-full px-4 pt-4 bg-primary'>
        <CustomHeader />
        <View className='mt-6'>
          {/* Top Movies */}
          <Text className='text-2xl text-text font-acme'>Top Movies</Text>
          <FlatList
            data={topMovies}
            renderItem={({ item }) => <MovieCardLarge movie={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            className='w-full'
          />
        </View>
        {/* Categories */}
        <GenreList
          setGenreSelected={setGenreSelected}
          genreSelected={genreSelected}
        />
        {/* Latest Movies */}
        {genreSelected.name === 'Latest' ? (
          <View className='mt-3'>
            <View className='flex-row items-center justify-between'>
              <Text className='text-2xl text-text font-acme'>
                Latest Movies
              </Text>
              <Link href={'/genre/[genre]'}>
                <Text className='text-lg text-accent font-acme'>See More</Text>
              </Link>
            </View>
            <FlatList
              numColumns={3}
              keyExtractor={(item) => item.id.toString()}
              data={latestMovies}
              renderItem={({ item }) => <MovieCardSmall movie={item} />}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              scrollEnabled={false}
            />
          </View>
        ) : (
          <View className='mt-3'>
            <View className='flex-row items-center justify-between'>
              <Text className='text-2xl text-text font-acme'>
                {genreSelected.name}
              </Text>
              <Link href={'/genre/[genre]'}>
                <Text className='text-lg text-accent font-acme'>See More</Text>
              </Link>
            </View>
            <FlatList
              numColumns={3}
              keyExtractor={(item) => item.id.toString()}
              data={moviesByGenre}
              renderItem={({ item }) => <MovieCardSmall movie={item} />}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              scrollEnabled={false}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
