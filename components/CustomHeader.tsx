import { View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = () => {
  const [query, setQuery] = useState('');

  return (
    <SafeAreaView>
      <View className='w-full h-16 px-4 bg-primary'>
        <View className='flex-row items-center px-4 rounded-md bg-secondary h-14'>
          <TextInput
            className='flex-1 text-text font-acme'
            placeholder='Search for movies...'
            placeholderTextColor={'#30343F'}
            value={query}
            onChangeText={(e) => setQuery(e)}
          />
          <TouchableOpacity>
            <Ionicons name='search' size={24} color='#FAFAFA' />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
