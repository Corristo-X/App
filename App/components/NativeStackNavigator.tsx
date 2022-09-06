import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import Movie from './Film';
import Movie2 from './SecondFilm';
import Gesture from './Gesture';
import GestureHandler from './PanGestureHandler';
import API from './API';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Test_App'
      screenOptions={
        {
            headerTintColor:'white',
            headerStyle:{backgroundColor:'orange'}
        }
      }
      
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome',
        headerTitleStyle:{
            fontWeight:'bold',
            fontSize:30
        }
        }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen 
        name="Movie" component={Movie}
        options={({route})=>({title: route.params.movieparams.title})}//to dziala
        />
        <Stack.Screen name="Movie2" component={Movie2}/>
        <Stack.Screen name="Gesture" component={Gesture}/>
        <Stack.Screen name="GestureHandler" component={GestureHandler}/>
        <Stack.Screen name ="API" component={API}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack