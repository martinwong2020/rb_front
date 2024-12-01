import * as SecureStore from 'expo-secure-store';
export const storeToken = async (token)=>{
    try{
        console.log("token being stored",token);
        await SecureStore.setItemAsync('token', token);
    }
    catch(err){
        console.error("error in storing token",err);
    }
}

export const getToken = async ()=>{
    try{
        const token = await SecureStore.getItemAsync('token');
        return token;
    }
    catch(err){
        console.error("Error in retrieving token",err);
    }
}

export const removeToken = async ()=>{
    try{
        await SecureStore.deleteItemAsync('token');
    }
    catch(err){
        console.error("error in removing token",err);
    }
}
