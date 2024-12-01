import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useState,useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Avatar, Card, Surface } from 'react-native-paper';
import React from 'react'
import Chart from './Chart';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Results() {
  const [result,setResult]= useState([]);
  const [blueResult, setBlueResult]=useState(0);
  const [redResult, setRedResult] = useState(0);
  const [responseResult, setResponseResult]= useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    fetchChartResults();
    fetchResponseResults();
  },[]);
  useEffect(()=>{
    console.log("responseresult",responseResult);
  },[responseResult]);
  useFocusEffect(
    useCallback(()=>{
      fetchChartResults();
      fetchResponseResults();
    },[])
  );
  const fetchChartResults = async () =>{
    try{
      const response = await fetch('http://10.0.2.2:3001/getChartResults');
      const data = await response.json();
      console.log(data["result"][0]["choice"]);
      // setResult(data)
      if(data["result"][0]["choice"]=="blue"){
        setBlueResult(data["result"][0]["choice_count"]);
        setRedResult(data["result"][1]["choice_count"]);
      }
      else{
        setBlueResult(data["result"][1]["choice_count"]);
        setRedResult(data["result"][0]["choice_count"]);
      }
      setLoading(false);
    }
    catch(err){
      console.error('Error in fetching result',err);
    }
  }

  const fetchResponseResults = async () =>{
    try{
      const response = await fetch("http://10.0.2.2:3001/getResponseResults");
      const data = await response.json();
      // console.log(responseResult);
      setResponseResult(data.result);
    }
    catch(err){

    }
  }
  return (
    <SafeAreaView>

    
      <ScrollView>
        <View>
          {loading?
            (
              <Text>Loading ... </Text>
            ):
            ( 
              <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>Results of Question</Text>
                <Chart blueValue={blueResult} redValue={redResult}/>
              </View>
              
              
            )
          } 
        </View>
        {responseResult.length==0?
          (
            <Text> Loading </Text>
          ):
          (
            responseResult.map((response,id)=>(
              <View key={id}>
                <View style={styles.container}>
                  <Avatar.Image size={48} source={{}}/>

                  <Surface style={styles.messageBubble}>
                    <Text style={styles.username}>{response.username}</Text>
                    <Text>{response.explanation}</Text>
                  </Surface>
                </View>
              </View>
            ))
          )
        }
        {/* <View>
          <View style={styles.container}>
            <Avatar.Image size={48} source={{}}/>

            <Surface style={styles.messageBubble}>
              <Text style={styles.username}>name</Text>
              <Text>dfnoiangbfvonv o iwejfoiwfNOINFOINFOIN F  IODWFJAOIFJIOAFJAOI J IDJAOIDJAOI</Text>
            </Surface>
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  messageBubble: {
    maxWidth: '90%',
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    marginLeft: 8,
    elevation: 2, // Optional: adds a subtle shadow
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  chartContainer:{
    marginTop:10,
    alignItems:'center',
    borderBottomWidth: 2,
    borderBottomColor: '#6200ee',
    paddingBottom:10,
  },
  chartTitle:{
    fontWeight:'bold',
    fontSize:24,
    marginBottom:10
  }
});