import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

export default function Index() {
  return (
    <View className='w-full h-full px-6 bg-primary'>
      <Image
        source={require('../assets/images/app-logo.png')}
        className='flex-1 w-full h-full mt-32'
        resizeMode='cover'
      />
      <View className='py-24'>
        <Text className='text-4xl leading-[48px] text-center text-white font-acme'>
          Find The Perfect Movies For You
        </Text>
        <TouchableOpacity
          className='py-3 mt-10 rounded-md bg-accent'
          onPress={() => router.push('/home')}
        >
          <Text className='text-[28px] text-center text-white font-acme'>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
