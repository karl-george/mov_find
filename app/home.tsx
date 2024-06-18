import { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import data from '../constants/data.json';
import MovieCardLarge from '@/components/MovieCardLarge';
const Home = () => {
  const topMovies = data.results.slice(0, 5);
  const fetchAllMovies = async () => {
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

  useEffect(() => {
    // fetchAllMovies();
  }, []);

  return (
    <View className='w-full h-full px-4 pt-8 bg-primary'>
      <View>
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
      <View>
        <Text className='text-2xl text-text font-acme'>Latest Movies</Text>
        <FlatList
          data={[1, 2, 3]}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    </View>
  );
};

export default Home;
