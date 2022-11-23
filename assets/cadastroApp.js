import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, } from 'firebase/auth';
import { useState } from 'react';

export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function entrar() {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate('Login')
                Alert.alert('Usuário cadastrado com sucesso!')
            })
            .catch((error) => {
                switch(error.message){
                    case('Firebase: Error (auth/email-already-in-use).'):{
                        Alert.alert('Este e-mail já está em uso, tente outro!')
                    }
                    case('Firebase: Error (auth/invalid-email).'):{
                        Alert.alert('E-mail inválido!')
                    }
                    case('Firebase: Password should be at least 6 characters (auth/weak-password).'):{
                        Alert.alert('Senha muito curta!')
                    }
                }

            })

    }
/*if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
                    Alert.alert('Este e-mail já está em uso, tente outro!')
                }
                if (error.message == 'Firebase: Error (auth/invalid-email).') {
                    Alert.alert('E-mail inválido!')
                }
                else (Alert.alert('Senha muito curta!'))* */
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Text style={{ textAlign: 'center', fontSize: 25, marginTop: '20%' }}>Criar nova conta</Text>
                <View style={{ height: 380, width: "90%", alignSelf: 'center', padding: 5, backgroundColor: '#e6e6fa', borderRadius: 10, justifyContent: 'space-around', alignItems: 'center' }}>
                    <Text style={{ alignSelf: 'flex-start', marginLeft: '5%', marginTop: '5%' }}>Email:</Text>
                    <TextInput
                        style={{ backgroundColor: 'white', borderRadius: 5, width: "90%", padding: 10 }}
                        placeholder='Digite seu Email'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={(value) => setEmail(value)}
                    />
                    <Text style={{ alignSelf: 'flex-start', marginLeft: '5%', marginTop: '5%' }}>Senha:</Text>
                    <TextInput
                        style={{ backgroundColor: 'white', borderRadius: 5, width: "90%", padding: 10 }}
                        secureTextEntry={true}
                        placeholder='Digite sua Senha'
                        onChangeText={(value) => setPassword(value)}
                    />
                    <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                        <Text style={{ color: 'red' }}>*</Text>
                        <Text style={{ fontStyle: 'italic', fontSize: 12 }}>Para uma melhor eficiência nos serviços, você precisa estar cadastrado para usar este aplicativo. Ao se cadastrar você concorda com isso.</Text>
                    </View>
                    <TouchableOpacity
                        style={{ backgroundColor: '#00BFFF', borderRadius: 5, padding: 15, marginTop: 10 }}
                        onPress={() => entrar(auth, email, password)}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Cadastrar</Text>
                    </TouchableOpacity>
                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({

});