// import React, {useRef, useState, useEffect} from "react";
// import {
//   Input,
//   IconButton,
//   Checkbox,
//   Text,
//   Box,
//   VStack,
//   HStack,
//   Heading,
//   Icon,
//   Center,
//   NativeBaseProvider,
// } from "native-base";
// import { Feather, Entypo } from "@expo/vector-icons";
// import { Button } from "react-native";
// import { SwiperFlatList } from "react-native-swiper-flatlist";
// import Carousel, {ParallaxImage} from 'react-native-snap-carousel';

// function UserInput() {
//   const instState = [
//     {
//       title: "Code",
//       isCompleted: true,
//     },
//   ];
//   const data = ['hi', 'hello', 'bye', 'goodbye', 'good morning', 'good night'];

//   const [list, setList] = React.useState(instState);
//   const [inputValue, setInputValue] = React.useState("");

//   const addItem = (title: string) => {
//     setList([
//       ...list,
//       {
//         title: title,
//         isCompleted: false,
//       },
//     ]);
//   };

//   const handleDelete = (index: number) => {
//     const temp = list.filter((_, itemI) => itemI !== index);
//     setList(temp);
//   };

//   const handleStatusChange = (index: number) => {
//     const temp = list.map((item, itemI) =>
//       itemI !== index ? item : { ...item, isCompleted: !item.isCompleted }
//     );
//     setList(temp);
//   };

//   return (
//     <Box>
//       <VStack space={1}>
//         <HStack space={1}>
//           <Input
//             flex={1}
//             onChangeText={(v) => setInputValue(v)}
//             value={inputValue}
//             placeholder="Add Text"
//           />
//           <IconButton
//             borderRadius="sm"
//             variant="solid"
//             icon={
//               <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />
//             }
//             onPress={() => {
//               addItem(inputValue);
//               setInputValue("");
//             }}
//           />
//         </HStack>
//         <VStack space={2}>
//           {list.map((item, itemI) => (
//             <HStack
//               w="50%"
//               justifyContent="space-between"
//               alignItems="center"
//               key={item.title + itemI.toString()}
//             >
//               <Checkbox
//                 isChecked={item.isCompleted}
//                 onChange={() => handleStatusChange(itemI)}
//                 value={item.title}
//               >
//                 <Text
//                   mx="2"
//                   strikeThrough={item.isCompleted}
//                   _light={{
//                     color: item.isCompleted ? "gray.400" : "coolGray.800",
//                   }}
//                   _dark={{
//                     color: item.isCompleted ? "gray.400" : "coolGray.50",
//                   }}
//                 >
//                   {item.title}
//                 </Text>
//               </Checkbox>
//               <IconButton
//                 size="sm"
//                 colorScheme="trueGray"
//                 icon={
//                   <Icon
//                     as={Entypo}
//                     name="minus"
//                     size="xs"
//                     color="trueGray.400"
//                   />
//                 }
//                 onPress={() => handleDelete(itemI)}
//               />
              
//             </HStack>
//           ))}
//         </VStack>
//       </VStack>
//     </Box>
//   );
// }

// export default UserInput;
