import React from 'react';
import { Center, Pressable, Actionsheet, useDisclose } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionScreen from '../screens/ActionScreen';

export default (props) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { zoomRatio, site } = props;

  return (
    <>
      <Pressable onPress={onOpen}>
        <Center bg="#fff" borderRadius={60} p={3 * zoomRatio} borderWidth={2 * zoomRatio} borderColor="#F8D29B">
          <MaterialCommunityIcons name={"bicycle-basket"} size={30 * zoomRatio} color="#F8D29B" />
        </Center>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionScreen onClose={onClose} site={site} />
      </Actionsheet>
    </>
  );
}
