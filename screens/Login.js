import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { storeToken } from './components/SecureStore'
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const validateLogin = async()=>{
        try{
            const response = await fetch('http://10.0.2.2:3001/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({username,password})
            });
            const data = await response.json();
            // console.log("login",data);
            storeToken(data["token"]);
            return data["message"];
        }
        catch(err){
            console.error('Error during login:', err);
            setMessage('An error occurred. Please try again later.');
        }
    }
    const handleLogin = async () => {
        console.log('login');
        const result = await validateLogin();
        if(!result){
            Alert.alert("invalid credentials");
        }
        else{
            navigation.replace('MainApp');
        }
    };

    return (
        <SafeAreaView style={styles.registerContainer}>
        <Text style={styles.title}>Login!</Text>
        
        <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
        />

        <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#333',
    color: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  avatarContainer:{
    marginBottom:15,
  }
});
