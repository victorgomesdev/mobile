import { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import url from "./config/url";
export default function Lista(){
    const [data,setData] = useState(null)

    async function pegarLista(){
        const req = await fetch(url+'/lista')
        const dados = await req.json()
        setData(dados)
        console.log(JSON.parse(data))
    }
    pegarLista()
    return(
        <View style={style.main}>
            <FlatList
            data={data}
            keyExtractor={({item})=>item.id}
            renderItem={
                <View>
                    <Text>{data}</Text>
                </View>
            }/>
        </View>
    )
}

const style = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})