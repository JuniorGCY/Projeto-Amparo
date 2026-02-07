import 'react-native-reanimated';
import React from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationLightTheme } from "@react-navigation/native";
import { 
  Provider as PaperProvider, 
  MD3DarkTheme as PaperDarkTheme, 
  MD3LightTheme as PaperLightTheme 
} from "react-native-paper";

import AppEntry from "./src/navigation/AppEntry";

export default function App() {
  const scheme = useColorScheme();

  const paperTheme = scheme === "dark" ? PaperDarkTheme : PaperLightTheme;

  const navigationBaseTheme = scheme === "dark" ? NavigationDarkTheme : NavigationLightTheme;

  const navigationTheme = {
    ...navigationBaseTheme,
    colors: {
      ...navigationBaseTheme.colors,
      ...paperTheme.colors,
      text: paperTheme.colors.onSurface,
      card: paperTheme.colors.surface, 
    },
  };

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={navigationTheme}>
        <AppEntry />
      </NavigationContainer>
    </PaperProvider>
  );
}
