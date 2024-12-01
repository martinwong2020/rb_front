import { StyleSheet, View, SafeAreaView, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { Button, Card, Text, TextInput } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { getToken } from './components/SecureStore';

export default function Prompt() {
  const [prompt, setPrompt] = useState("");
  const [reasoning,setReasoning] = useState('');
  const [choice, setChoice] = useState('');
  const [loading, setLoading] = useState(false);
  const [promptId,setPromptId]=useState(0);
  useEffect(()=>{
    fetchPrompt();
  },[]);
  useFocusEffect(
    useCallback(()=>{
    fetchPrompt();
    },[])
  );
  const fetchPrompt = async () =>{
    try{
      const response = await fetch('http://10.0.2.2:3001/getPrompt');
      const data = await response.json();
      setPromptId(data["promptId"]);
      setPrompt(data["prompt"]);
    }
    catch(err){
      console.error('Error in fetching Prompt',err);
    }
  }
  const uploadResponse = async () =>{
    try{
      const token = await getToken();
      console.log("responding",token);
      const response = await fetch('http://10.0.2.2:3001/uploadResponse',
        {
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`,
          },
          body:JSON.stringify({promptId,choice,reasoning}),
        }
      );
      const data = await response.json();
      return data["message"];
    }
    catch(err){
      console.error("error in uploading repsonse",err);
    }
    
  }
  const handleSubmit = async () =>{
    try{
      setLoading(true);
      if(choice ==""){
        Alert.alert("Please choose a choice");
        setLoading(false);
        return;
      }
      if(reasoning==""){
        Alert.alert("Please elaborate your choice");
        setLoading(false);
        return;
      }
      const result = await uploadResponse();
      setLoading(false);
    }
    catch(err){
      console.error("error in handle submit",err);
    }
    finally{
      setLoading(false);
    }
  }
  const handleRed = () =>{
    setChoice('red');
  }
  const handleBlue = () =>{
    setChoice('blue');
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Card style={styles.card}>
            <Text style={styles.promptText}>{prompt}</Text>
          </Card>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.redButton, choice =="red"? styles.highlight:'']} onPress={() => handleRed()}>
              <Text style={styles.buttonText}>Red</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.blueButton, choice =="blue"? styles.highlight:'']} onPress={() => handleBlue()}>
              <Text style={styles.buttonText}>Blue</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="Enter your thoughts here..."
            value={reasoning}
            onChangeText={(text) => { setReasoning(text) }}
            numberOfLines={7}
            multiline={true}
            mode='outlined'
            style={styles.textArea}
          />
          
          <TouchableOpacity mode="contained" onPress={handleSubmit} style={styles.submitButton}>
            {loading?
              <Text style={styles.buttonText}>Loading ... </Text>
              :
              <Text style={styles.buttonText}>Submit</Text>
            }   
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 4,
    marginBottom: 20,
  },
  promptText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  redButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    opacity:0.8
  },
  blueButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    opacity:0.8
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  highlight:{
    opacity:1,
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius:100,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    fontSize: 18,
    borderRadius:8,
  },
});