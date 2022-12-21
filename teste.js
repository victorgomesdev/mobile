import React, { useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableHighlight, TouchableOpacity, Button,  } from 'react-native';
import url from './config/url'

const Item = ({title, desc}) => (
    <TouchableOpacity>
        <View style={styles.item}>
            <Text style={styles.title}>{title} - {desc}</Text>
        </View>
    </TouchableOpacity>
);

const App = () => {
    const [DATA, setD] = useState(null)
    const renderItem = ({ item }) => (
        <Item title={item.nome} desc={item.descricao}/>
    );

    async function listar() {
        const req = await fetch(url + '/lista', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const valores = await req.json()
        setD(valores)
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Button title='Lista' onPress={()=>{listar()}}></Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#fffaf0',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15
    },
    title: {
        fontSize: 20,
    },
});

export default App;