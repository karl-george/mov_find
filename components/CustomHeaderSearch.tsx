import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { usePathname, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderSearch = () => {
  const [query, setQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  return (
    <View className='w-full h-16 px-4 py-14 bg-primary'>
      <View className='flex-row items-center w-full gap-2 h-14'>
        <TouchableOpacity onPress={router.back}>
          <Ionicons
            name='arrow-back'
            size={24}
            style={{
              color: '#FAFAFA',
              backgroundColor: '#222632',
              borderRadius: 10,
              padding: 10,
              width: 46,
            }}
          />
        </TouchableOpacity>
        <View className='flex-row items-center w-10/12 px-4 rounded-md bg-secondary h-11'>
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
    </View>
  );
};

export default CustomHeaderSearch;
