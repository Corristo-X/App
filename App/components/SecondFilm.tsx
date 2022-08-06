import React from "react";
import { Button,View,Text,Image} from "react-native";

const Movie2= ({ navigation, route } : {navigation:any,route:any}) => {
  console.log(route)
  const {title,description,release} = route.params.movieparams
  return (
    <View>
        <View><Image source ={require('../assets/Wszystko_za_zycie.jpg')}></Image></View>
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
     <Text>{JSON.stringify(title)}</Text>
     <Text>{JSON.stringify(description)}</Text>
     <Text>{JSON.stringify(release)}</Text>
    </View>
   
  );
};
export default Movie2