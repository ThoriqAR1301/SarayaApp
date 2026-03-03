import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, ImageBackground } from "react-native";

export default function Index() {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // fade in
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // tahan splash + fade out
    const t = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        router.replace("/main");
      });
    }, 3000);

    return () => clearTimeout(t);
  }, []);

  return (
    <Animated.View style={{ flex: 1, opacity }}>
      <ImageBackground
        source={require("../assets/images/splash.png")}
        style={{ flex: 1 }}
      />
    </Animated.View>
  );
}