import React, { useEffect } from "react";
import TutorialCarousel from "../components/Carousel";
import { router } from "expo-router";
import carousel from "./../utils/data/carousel.json";
import { SafeAreaView } from "react-native";

const App = () => {
  return <TutorialCarousel data={carousel} navigation={router.navigate} />;
};

export default App;
