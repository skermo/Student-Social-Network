import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NativeWindStyleSheet } from "nativewind";
import { useCallback } from "react";
import { View } from "react-native";
import { AuthProvider } from "./app/context/AuthProvider";
import Layout from "./app/layout/Layout";

NativeWindStyleSheet.setOutput({
  default: "native",
});

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded] = useFonts({
    "light": require("./assets/fonts/Montserrat-Light.ttf"),
    "normal": require("./assets/fonts/Montserrat-Medium.ttf"),
    "bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "black": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <View
        onLayout={handleOnLayout}
        style={{
          flex: 1,
          fontFamily: "normal",
          fontSize: 45,
        }}
      >
        <Layout></Layout>
      </View>
    </AuthProvider>
  );
}
