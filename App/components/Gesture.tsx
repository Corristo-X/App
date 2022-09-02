import React from "react";
import { Button,View,Text,Image} from "react-native";
import { StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
const Gesture= ({ navigation, route } : {navigation:any,route:any}) => {
 
  return (
    <View style={styles.container}
    onStartShouldSetResponder={()=>{
      console.log("1st view should set?");
      return false;
    }}
    >
        <Text>1st (Root) View</Text>
    <View style={styles.container2}
    onStartShouldSetResponder={()=>{
      console.log("2nd view should set?");
      return true;
    }}
    onResponderGrant={()=>{
      console.log("2nd view granted response")
    }}
    onResponderRelease={()=>{
      console.log("2nd view released")
    }}
    onResponderMove={()=>{
      console.log("2nd bview responder move")
    }}
    >
        <Text>2nd View</Text>
        <View style={styles.container3}
        onStartShouldSetResponder={()=>{
          console.log("3rd view should set?");
          return false;
        }}
        >
        <Text>3rd View</Text>
        </View>
    </View>
   
    </View>
   
  );
};
export default Gesture

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor: 'yellow',
  },
  container2: {
    width:'80%',
    height:'80%',
    backgroundColor: 'orange',
  },
  container3: {
    width:'60%',
    height:'60%',
    backgroundColor: 'red',
  },
});