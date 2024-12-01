import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Auth() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require('../assets/Login_page.png')} 
                style={styles.background}
                resizeMode="cover" // Ensures the image covers the entire background
            >
                <View style={styles.container}>
                    <Text style={styles.welcomeText}>Pill Talk</Text>
                    {/* <Button style={styles.loginButton}title="Login" onPress={() => navigation.replace('MainApp')} /> */}
                    <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.ButtonText}>Login</Text>
                    </TouchableOpacity>
                    {/* <Button style={styles.registerButton}title="Sign In" onPress={() => navigation.navigate('SignIn')} /> */}
                    <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.ButtonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 20,
    },
    welcomeText: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    Button: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 5,
    },
    ButtonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    }
    // Button: {
    //     backgroundColor:'black',
    // },
});