import React from "react";
import { Button,View,Text,Image } from "react-native";

const Gesture= ({ navigation, route } : {navigation:any,route:any}) => {
 
  return (
    <View>
        <Text>1st (Root) View</Text>
    <View>
        <Text>2nd View</Text>
    </View>
    <View>
        <Text>3rd View</Text>
    </View>
    </View>
   
  );
};
export default Gesture