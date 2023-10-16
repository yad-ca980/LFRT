
import { useFonts, Montserrat_300Light, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat"
import RootNavigation from "./src/components/navigation/RootNavigation";
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { View, StyleSheet } from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    secondary: 'black',
  },
};

export default function App() {
  const [fontLoaded, fontError] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontLoaded && !fontError) return null;

  return (
    <RootNavigation />
  );
}


