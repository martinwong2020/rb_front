import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';
import { Avatar, Card, Surface } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const validateInputs = () => {
        if (!username || username.length < 3) {
          Alert.alert("Invalid Username", "Username must be at least 3 characters long.");
          return false;
        }
    
        // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!email || !emailPattern.test(email)) {
        //   Alert.alert("Invalid Email", "Please enter a valid email address.");
        //   return false;
        // }
    
        if (!password || password.length < 6) {
          Alert.alert("Invalid Password", "Password must be at least 6 characters long.");
          return false;
        }
    
        return true; // All validations passed
    };
    const uploadAccount = async() =>{
        try{
            const response = await fetch('http://10.0.2.2:3001/register',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({username,email,password})
            })
            const data = await response.json();
            console.log("data",data["message"]);
            return data["message"];
        }
        catch (error) {
            console.error('Error during registration:', error);
            setMessage('An error occurred. Please try again later.');
        }
    }
    const handleRegister = async () => {
        // Add your registration logic here
        if(!validateInputs()){
            console.log("here")
            return
        }
        const result = await uploadAccount();
        if(!result){
            Alert.alert("Error in signing up. Maybe Account exists already");
        }
        else{
            navigation.navigate('Auth')
        }
        console.log('Registering:', { username, email, password });
    };

    return (
        <SafeAreaView style={styles.registerContainer}>
        <Text style={styles.title}>Sign Up!</Text>
        
        <View style={styles.avatarContainer}>
            <Avatar.Image size={80} source={{}}/>
        </View>
        
        <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
        />

        {/* <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
        /> */}

        <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Sign Up</Text>
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
