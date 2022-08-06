import React from "react";
import { Button,View,Text,Image } from "react-native";

const Movie= ({ navigation, route } : {navigation:any,route:any}) => {
  console.log(route)
  const {title,description,release} = route.params.movieparams
  return (
    <View>
        <View><Image source ={require('../assets/Zielona_mila.jpg')}></Image></View>
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
     <Text>{JSON.stringify(title)}</Text>
     <Text>{JSON.stringify(description)}</Text>
     <Text>{JSON.stringify(release)}</Text>
    </View>
   
  );
};
export default Movie