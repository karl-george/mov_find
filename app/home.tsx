import { FlatList, Text, View } from 'react-native';

const Home = () => {
  return (
    <View className='w-full h-full px-4 pt-8 bg-primary'>
      <View>
        <Text className='text-2xl text-text font-acme'>Top Movies</Text>
        <FlatList
          data={[1, 2, 3]}
          renderItem={({ item }) => <Text>{item}</Text>}
          horizontal
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
