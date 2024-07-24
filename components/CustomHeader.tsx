import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';

const CustomHeader = () => {
  const [query, setQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  return (
    <View className='w-full h-16 px-4 py-14 bg-primary'>
      <View className='flex-row items-center px-4 rounded-md bg-secondary h-14'>
        <TextInput
          className='flex-1 text-text font-acme'
          placeholder='Search for movies...'
          placeholderTextColor={'#30343F'}
          value={query}
          onChangeText={(e) => setQuery(e)}
        />
        <TouchableOpacity
          onPress={() => {
            if (!query) {
              return Alert.alert(
                'No Search term',
                'Please enter a search term'
              );
            }

            if (pathname.startsWith('/search')) router.setParams({ query });
            else router.push(`/search/${query}`);
          }}
        >
          <Ionicons name='search' size={26} color='#FAFAFA' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
