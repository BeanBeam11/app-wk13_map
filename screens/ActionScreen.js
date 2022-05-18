import React from 'react';
import { Box, VStack, Center, Text, Pressable } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { VictoryPie } from 'victory-native';

const ActionScreen = ({ onClose, site }) => {
   const {
      sna,
      sbi,
      sarea,
      mday,
      lat,
      lng,
      ar,
      bemp,
   } = site;

   return (
      <VStack h="50%" w="100%" bg="#fff" borderRadius={20} >
         <Pressable onPress={onClose} position="absolute" top={2} right={3}>
            <MaterialCommunityIcons name="close" color="gray" size={30} />
         </Pressable>
         <Box borderBottomColor={"white"} w={"15%"} h={1} borderRadius={3} bg="grey" mt={3} alignSelf="center"></Box>
         <Text mt={4} mb={1} textAlign="center" color={"#878787"}>{sna.split('_')[0]}</Text>
         <Text fontSize="lg" mb={4} textAlign="center" fontWeight={'bold'} color={"#484848"}>{sna.split('_')[1]}</Text>
         <Box px={8}>
            <Text><Text fontWeight={'bold'}>地址：</Text>{sarea}{ar}</Text>
            <Text mt={2}><Text fontWeight={'bold'}>經/緯度：</Text>{Number(lng).toFixed(2)} / {Number(lat).toFixed(2)}</Text>
            <Text mt={2}><Text fontWeight={'bold'}>更新時間：</Text>{mday}</Text>
            <Center pb={2}>
               <VictoryPie
                  width={250}
                  height={250}
                  colorScale={["#A9D295", "#F8D29B"]}
                  data={[
                     { x: 1, y: Number(sbi), label: `可借(${sbi})` },
                     { x: 2, y: Number(bemp), label: `可還(${bemp})` },
                  ]}
                  style={{
                     data: {
                        fillOpacity: 1, stroke: "#fff", strokeWidth: 3
                     },
                     labels: {
                        fontSize: 14, fill: "#484848",
                        padding: 6,
                     }
                  }}
               />
            </Center>
         </Box>
      </VStack>
   );
};

export default ActionScreen;
