import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import { Video } from "expo-av";
import { Image } from "expo-image";
import { Title, Subheading, Text, Button } from "react-native-paper";
import { Color } from "../utils/colors";
import { Href } from "expo-router/build/link/href";
import Animated, { BounceIn, SlideInDown } from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";

interface CarouselItemProps {
  item: {
    title: string;
    subtitle: string;
    imageUrl?: string;
    videoUrl?: string;
    caption: string;
    link: string;
  };
  navigation: (href: Href) => void;
}

const { width, height } = Dimensions.get("window");

const CarouselItem = ({ item, navigation }: CarouselItemProps) => {
  const isVideo = !!item.videoUrl;

  const renderMedia = () => {
    if (isVideo) {
      return (
        <Video
          source={{ uri: item.videoUrl || "" }}
          style={styles.media}
          isLooping
          shouldPlay
        />
      );
    }
    return <Image source={{ uri: item.imageUrl }} style={styles.media} />;
  };

  return (
    <View style={styles.itemContainer}>
      <Title style={styles.title}>{item.title}</Title>
      <Subheading style={styles.subtitle}>{item.subtitle}</Subheading>
      {renderMedia()}
      <Text style={styles.caption}>{item.caption}</Text>
    </View>
  );
};

interface TutorialCarouselProps {
  data: {
    title: string;
    subtitle: string;
    imageUrl?: string;
    videoUrl?: string;
    caption: string;
    link: string;
  }[];
  steps?: number;
  currentStep?: number;
  // biome-ignore lint/suspicious/noExplicitAny: wip
  navigation: any;
}

const TutorialCarousel = ({ data, navigation }: TutorialCarouselProps) => {
  const ref = React.useRef<ICarouselInstance>(null);
  const [flag, setFlag] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const goToHome = () => {
    navigation("/home");
  };
  const goNextSlide = () => {
    ref.current?.next();
  };

  return (
    <Animated.View entering={SlideInDown} style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 60, height: 60, alignSelf: "center" }}
      />
      <Carousel
        ref={ref}
        loop={false}
        snapEnabled={true}
        width={width}
        height={height * 0.8}
        data={data}
        scrollAnimationDuration={500}
        onSnapToItem={(index) => {
          setCurrentStep(index);
          if (index === data.length - 1) {
            return setFlag(true);
          }
          setFlag(false);
        }}
        renderItem={({ item }) => (
          <CarouselItem item={item} navigation={navigation} />
        )}
      />
      <StepDots steps={data.length} currentStep={currentStep} />
      {flag ? (
        <Animated.View entering={BounceIn}>
          <Button
            mode="contained"
            buttonColor={Color.button.secondary}
            style={styles.button}
            onPress={goToHome}
          >
            ¡Ir a Factú!
          </Button>
        </Animated.View>
      ) : (
        <Button
          mode="contained"
          buttonColor={Color.button.primary}
          style={{ ...styles.button, marginBottom: 20 }}
          onPress={goNextSlide}
        >
          Avanzar
        </Button>
      )}
    </Animated.View>
  );
};

const StepDots = ({
  steps,
  currentStep,
}: {
  steps: number;
  currentStep: number;
}) => {
  return (
    <View style={styles.dots}>
      {Array.from({ length: steps }).map((_, index) => (
        <View
          // biome-ignore lint/suspicious/noArrayIndexKey: wip
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor:
                index === currentStep
                  ? Color.text.primary
                  : Color.text.secondary,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    color: Color.text.primary,
  },
  subtitle: {
    textAlign: "center",
    color: Color.text.secondary,
    marginBottom: 10,
  },
  media: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  caption: {
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    margin: 16,
  },
});

export default TutorialCarousel;
