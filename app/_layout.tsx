import CustomHeader from '@/components/CustomHeader';
import CustomHeaderSearch from '@/components/CustomHeaderSearch';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Acme-Regular': require('../assets/fonts/Acme-Regular.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontError) throw fontError;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) null;

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen
        name='home'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='movie/[movieId]'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='search/[query]'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

const RootLayoutNav = () => {
  return (
    <>
      <StatusBar style='dark' />
      <InitialLayout />
    </>
  );
};

export default RootLayoutNav;
