import React from "react";
import { Button,View,Text } from "react-native";

const HomeScreen = ({ navigation, route } : {navigation:any,route:any}) => {
  console.log(route)
 // const {name} = route.params
  return (
    <View>
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
   <Button
      title="Gesture"
      onPress={() =>
        navigation.navigate('Gesture', { description: 'Gesture' })
      }
    />
     <Button
      title="Pan Gesture Hanlder"
      onPress={() =>
        navigation.navigate('GestureHandler', { description: 'GestureHandler' })
      }
    />
    </View>
   
  );
};
export default HomeScreen