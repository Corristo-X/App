import React from "react";
import { Button,View,Text,Image} from "react-native";
import { StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
const GestureHandler= ({ navigation, route } : {navigation:any,route:any}) => {
 
  return (
    <PanGestureHandler
    onGestureEvent={(GestureEvent)=>{
        alert("dziala")
        let tranX = GestureEvent.nativeEvent.translationX;
        let tranY = GestureEvent.nativeEvent.translationY;
        console.log("TranslateX: "+tranX + "\n"+ "TranslateY: "+tranY+"\n");
    }}
    >
        <View style={styles.container}>
        </View>
    </PanGestureHandler>
  );
};
export default GestureHandler

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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