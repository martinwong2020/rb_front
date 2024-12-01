import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar, Card } from 'react-native-paper'
import { getToken, removeToken } from './components/SecureStore'
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect, useCallback } from 'react';
import {jwtDecode} from 'jwt-decode'; 
export default function Account() {
  const [username,setUsername]=useState('')
  const navigation = useNavigation();
  
  useEffect(()=>{
     fetchUsername();
  })
  const fetchUsername = async () =>{
    try{
      const token = await getToken();
      console.log(token);
      const decoded = jwtDecode(token);
      console.log("decode",decoded);
      setUsername(decoded["username"]);
    }
    catch(err){
      console.error("error in fetch username from token",err);
    }
  }
  const handleLogout = async()=>{
    await removeToken();
    navigation.replace('Auth');
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Avatar.Image size={80} source={{}} style={styles.avatar}/>
        <Card style={styles.card}>
          <Text style={styles.cardText}>{username}</Text>
        </Card>
        {/* <Card style={styles.card}>
          <Text style={styles.cardText}>Password</Text>
        </Card> */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent:'center'
  },
  avatar: {
    marginBottom: 20,
    backgroundColor: '#cccccc', 
  },
  card: {
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems:'center'
  },
  cardText: {
    fontSize: 18,
    color: '#333333',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#ff4d4d',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
  },
  logoutText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});