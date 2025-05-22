import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import { icons } from '../constants/icons';


interface Props  {
    placeholder: string;
    onPress: () => void;
}


const SearchBar = ({onPress, placeholder}: Props) => {
  return (
    <View className='flex flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#AB8BFF"/> 
      <TextInput 
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => {}}
        placeholderTextColor={"#A8B5DB"}
        className='text-white ml-2 flex-1'
        />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})