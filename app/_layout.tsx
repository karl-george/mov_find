import CustomHeader from '@/components/CustomHeader';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

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
          header: () => <CustomHeader />,
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
