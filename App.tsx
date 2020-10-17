import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import Onboarding from "react-native-onboarding-swiper";
import AsyncStorage from "@react-native-community/async-storage";

import Routes from "./src/routes";
import image from "./src/assets/map-marker.png";
import { Image } from "react-native";

export default function App() {
  const [hasOnboarding, setHasOnboarding] = useState(false);
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  useEffect(() => {
    (async () => {
      const hasOnboarding = await AsyncStorage.getItem("@hasOnboarding");
      if (hasOnboarding) {
        setHasOnboarding(JSON.parse(hasOnboarding));
      }
    })();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  async function compleOnboarding() {
    try {
      await AsyncStorage.setItem("@hasOnboarding", JSON.stringify(true));
      setHasOnboarding(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {hasOnboarding ? (
        <Routes />
      ) : (
        <Onboarding
          onDone={compleOnboarding}
          onSkip={compleOnboarding}
          pages={[
            {
              backgroundColor: "#fff",
              image: <Image source={image} />,
              title: "Onboarding",
              subtitle: "Done with React Native Onboarding Swiper",
            },
            {
              backgroundColor: "#fe6e58",
              image: <Image source={image} />,
              title: "The Title",
              subtitle: "This is the subtitle that sumplements the title.",
            },
            {
              backgroundColor: "#999",
              image: <Image source={image} />,
              title: "Triangle",
              subtitle: "Beautiful, isn't it?",
            },
          ]}
        />
      )}
    </>
  );
}
