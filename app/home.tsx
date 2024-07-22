import { useEffect } from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';
import data from '../constants/data.json';
import MovieCardLarge from '@/components/MovieCardLarge';
import MovieCardSmall from '@/components/MovieCardSmall';
const Home = () => {
  const topMovies = data.results.slice(0, 5);
  const latestMovies = data.results.slice(0, 9);

  const fetchTopMovies = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        options
      );

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLatestMovies = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        options
      );

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // fetchTopMovies();
  }, []);

  return (
    <ScrollView>
      <View className='w-full h-full px-4 pt-8 bg-primary'>
        <View>
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
        {/* TODO: Categories */}
        {/* Latest Movies */}
        <View className='mt-3'>
          <Text className='text-2xl text-text font-acme'>Latest Movies</Text>
          {/* Try ScrollList? */}
          <FlatList
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            data={latestMovies}
            renderItem={({ item }) => <MovieCardSmall movie={item} />}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            scrollEnabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
