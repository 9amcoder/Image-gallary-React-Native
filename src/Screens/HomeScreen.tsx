import React, { useState, useLayoutEffect } from "react";
import {
  Box,
  Text,
  Center,
  ScrollView,
  HStack,
  Button,
  Icon,
} from "native-base";
import { IMAGES } from "../Services/Config";
import AnimatedGallery from "react-native-animated-gallery";
import { AntDesign } from "@expo/vector-icons";
// import UserInput from '../Components/UserInput';

function HomeScreen({ navigation }: { navigation: any }) {
  //react hook for toggling the background color
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => renderChangeColorButton(),
      headerLeft: () => renderButtons(),
    });
  }, [navigation]);

  let [imageSize, setImageSize] = useState(90);

  //update the image size
  const updateImageSize = () => {
    setImageSize((c) => c + 10);
  };

  const deCreaseImageSize = () => {
    setImageSize((c) => c - 10);
  };

  let [backGroundColor, setBackGroundColor] = useState("#fff");
  //This is the function that will change the background color
  const renderChangeColorButton = () => {
    return (
      <Box>
        <HStack space={2}>
          <Text>Color:</Text>
          <Button
            size="md"
            colorScheme="secondary"
            onPress={() => {
              setBackGroundColor("pink");
            }}
          />
          <Button
            colorScheme="primary"
            size="md"
            onPress={() => {
              setBackGroundColor("#06b6d4");
            }}
          />
          <Button
            colorScheme="warning"
            size="md"
            onPress={() => {
              setBackGroundColor("#f97316");
            }}
          />
          <Button
            colorScheme="warning"
            size="md"
            onPress={() => {
              setBackGroundColor("#f97316");
            }}
          />
        </HStack>
      </Box>
    );
  };

  //render two buttons control the image size
  const renderButtons = () => {
    return (
      <Box>
        <HStack space={2}>
          <Text>Size:</Text>
          <Button
            leftIcon={<Icon as={AntDesign} name="plus" size="xs" />}
            onPress={updateImageSize}
          />
          <Button
            leftIcon={<Icon as={AntDesign} name="minus" size="xs" />}
            onPress={deCreaseImageSize}
          />
        </HStack>
      </Box>
    );
  };

  const Laoder = () => {
    return (
      <Box>
        <Text>Loading..</Text>
      </Box>
    );
  };

  return (
    <>
      <ScrollView>
        <Center flex={1}>
          <Box>
            <AnimatedGallery
              imageUrls={IMAGES}
              renderLoader={<Laoder />}
              disablefullScreen
              thumbBorderWidth={3}
              thumbBorderColor={"white"}
              spacing={5}
              imageSize={imageSize}
              backgroundColor={backGroundColor}
            />
          </Box>
        </Center>
      </ScrollView>
    </>
  );
}

export default HomeScreen;
