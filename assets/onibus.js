import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, ScrollView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ImagePickerExample({ navigation }) {

  const [rua, setRua] = useState(null)
  const [num, setNum] = useState(null)
  const [bairro, setBairro] = useState(null)
  const [nome, setNome] = useState(null)
  const [desc, setDesc] = useState(null)
  const [email, setEmail] = useState(null)

  const buscarEmail = async () => {
    const valor = await AsyncStorage.getItem('EMAIL')
    setEmail(valor)
  }
  buscarEmail()

  async function enviarDados() {
    const req = await fetch(url + '/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rua: rua,
        num: num,
        bairro: bairro,
        nome: nome,
        desc: desc,
        email: email
      })
    })
    const resposta = await req.json()
    if (resposta) {
      Alert.alert(resposta)
      navigation.navigate('Home')
    }
  }

  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [100, 100],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center', padding: 25 }}>
          <View style={{ backgroundColor: 'gray', margin: 10, borderRadius: 10 }}>
            <Image style={{ resizeMode: 'contain', width: 100, height: 100, margin: 10 }} source={require('../assets/img/frente-do-onibus.png')}></Image>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'red' }}>*</Text>
            <Text style={{ fontStyle: 'italic', fontSize: 12 }}>Preencha todos os campos.</Text>
          </View>
          <View style={{ fontSize: 35, borderRadius: 10, padding: 25, width: "100%", backgroundColor: '#fffaf0', marginBottom: 10 }}>
            <Text >Rua:</Text>
            <TextInput
              placeholder='Digite sua rua'
              autoCapitalize='words'
              onChangeText={(value) => setRua(value)} />
          </View>
          <View style={{ fontSize: 35, borderRadius: 10, padding: 25, width: "100%", backgroundColor: '#fffaf0', marginBottom: 10 }}>
            <Text >Número:</Text>
            <TextInput
              placeholder='Digite o número'
              keyboardType='decimal-pad'
              onChangeText={(value) => setNum(value)} />
          </View>
          <View style={{ fontSize: 35, borderRadius: 10, padding: 25, width: "100%", backgroundColor: '#fffaf0', marginBottom: 10 }}>
            <Text >Bairro:</Text>
            <TextInput
              placeholder='Digite seu Bairro'
              autoCapitalize='words'
              onChangeText={(value) => setBairro(value)} />
          </View>
          <View style={{ fontSize: 35, borderRadius: 10, padding: 25, width: "100%", backgroundColor: '#fffaf0' }}>
            <Text >Nome:</Text>
            <TextInput
              placeholder='Confirme seu nome'
              autoCapitalize='words'
              onChangeText={(value) => setNome(value)} />
          </View>
          <Text style={{ fontSize: 20, borderRadius: 35, marginBottom: 7, marginTop: 20, width: "100%", }}>O que está acontecendo ?</Text>
          <TextInput style={{ marginTop: 2, padding: 6, height: 100, width: "100%", backgroundColor: '#fffaf0', fontSize: 16, borderRadius: 10,  marginBottom: '5%' }}
            placeholder='Detalhe o problema'
            onChangeText={(value) => setDesc(value)} />
          
          <TouchableOpacity
            style={{
              backgroundColor: '#00BFFF',
              padding: 10, borderRadius: 10
            }}
            onPress={() => enviarDados()}
          >
            <Text style={{
              color: 'white',
              fontWeight: 'bold'
            }}>Enviar solicitação</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}