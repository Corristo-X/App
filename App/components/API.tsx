import React, { useEffect, useState } from "react";
import { Button,View,Text,Image } from "react-native";

const API= ({ navigation, route } : {navigation:any,route:any}) => {
        const movie = route.params.movie
        const [movieDetails,setMovieDetails] = useState(null)

        
  
    useEffect(()=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET','http://www.omdbapi.com/?i=tt3896198&apikey=99ee16eb')
        xhr.send();
        xhr.onload = () =>{
          if(xhr.status == 200){
          
            //console.log(xhr.responseText)
           let Response = JSON.parse(xhr.response)
          setMovieDetails(Response)
          }else{
            console.log(`HTTP Request Failed ${xhr.status}`);
          }
        }
      
    },[])

  
    console.log(route)
  const {title,description,release} = route.params.movieparams
  return (
    <View>
      <Text>{(
      movieDetails == null ? "" : movieDetails.Title)}</Text>
     <Text>{
     (movieDetails == null ? "" : movieDetails.Released)}</Text>
     <Text>{( movieDetails == null ? "" : movieDetails.Plot)}
      </Text>
     
    </View>
   
  );
};
export default API