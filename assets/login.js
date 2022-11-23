import { React, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import { signInWithEmailAndPassword, } from 'firebase/auth';
import { auth } from '../config/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
    
    async function entrar() {
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.reset({index: 0, routes: [{name: 'Home'}]})
                armazenarEmail(email)
            })
            .catch((error) =>{ 
                if(error.message == 'Firebase: Error (auth/invalid-email).'){
                    Alert.alert('E-mail inválido!')
                }
                if(error.message == 'Firebase: Error (auth/wrong-password).'){
                    Alert.alert('Senha incorreta!')
                }
                if(error.message == 'Firebase: Error (auth/user-not-found).'){
                    Alert.alert('Usuário não existente! Faça o seu cadastro.')
                }})
    }
    const armazenarEmail = async (email)=>{
        await AsyncStorage.setItem('EMAIL',email)
    }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.main}>
            <Text style={{ marginTop: '25%', fontSize: 30, marginBottom: '5%' }}>Login</Text>
            <View style={styles.login}>
                <ScrollView style={{height: '100%', width: '90%', }}>
                    <Text style={{ marginLeft: 16, width: '100%', fontSize: 19, marginTop: '8%' }}>E-mail:</Text>
                    <TextInput style={styles.input1}
                        placeholder=' Digite seu e-mail'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={value => setEmail(value)}
                    ></TextInput>
                    <Text style={{ marginLeft: 16, width: '100%', fontSize: 19 }}>Senha:</Text>
                    <TextInput style={styles.input1}
                        placeholder=' Digite sua senha'
                        secureTextEntry={true}
                        onChangeText={value => setPassword(value)}/>                        
                    <TouchableOpacity style={{ backgroundColor: '#00BFFF', padding: 10, borderRadius: 10, width: '40%', marginLeft: '30%' }} onPress={() => entrar(auth, email, password)}>
                        <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Fazer login</Text>
                    </TouchableOpacity>
                    <Text style={{ margin: 10, textAlign: 'center' }}>ou</Text>
                    <TouchableOpacity style={{ backgroundColor: '#00BFFF', padding: 10, borderRadius: 10, width: '40%', marginLeft: '30%' }} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Cadastrar-se</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    login: {
        height: '60%',
        width: '90%',
        backgroundColor: '#e6e6fa',
        borderRadius: 10,
        alignSelf: 'center',
        paddingTop: '1%',
        paddingBottom: '1%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input1: {
        backgroundColor: 'white',
        width: '90%',
        height: 40,
        borderRadius: 5,
        marginBottom: '5%',
        marginLeft: '5%'
    }
})