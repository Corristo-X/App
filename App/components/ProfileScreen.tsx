import React from "react";
import { Button, View,Text } from "react-native";

const ProfileScreen = ({ navigation,route } : {navigation:any,route:any}) => {
  console.log(route)
  const {name} = route.params
  
    return (
        <View>
    <Button
      title="Go to Home Screen"
      onPress={() =>
        navigation.navigate('Home', { name: 'Home' })
      }
    />
    <Text>{name}</Text>
    <Button
      title="First Movie"
      onPress={() =>
        navigation.navigate('Movie', { movieparams: {
            title:      "Wszystko za życie",
            release:    "2007",
            description:"The movie about life"
        } })
      }
    />
    <Button
      title="Second Movie"
      onPress={() =>
        navigation.navigate('Movie2', { movieparams: {
            title:"Zielona Mila",
            release:"1999",
            description:"A retired prison guard tells a friend about an unusual man who was sentenced to death for the murder of two 9-year-old girls."
            
        } })
      }
      
    />
    </View>
  );
};
export default ProfileScreen