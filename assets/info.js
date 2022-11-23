import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
export default function Info({ navigation }) {
    return (
        <View style={styles.main}>
            <Text style={{ fontSize: 30 }}>Sobre</Text>
            <View style={styles.perfil}>
                <Text style={{ marginTop: 10, padding: 5, fontSize: 15 }}>PatenseOnline</Text>
                <Text style={{fontSize: 15 }}>v1.0.0</Text>
                <Text style={{ margin: 10, padding: 5, fontSize: 15, textAlign: 'center', fontStyle: 'italic' }}>O app PatenseOnline é um meio que o cidadão
                patense tem de ajudar na melhoria da qualidade de vida na cidade.</Text>
                <Text style={{fontSize: 15, fontStyle: 'italic' }}>Copyright-2022</Text>
                <Text style={{fontSize: 15 }}>PI-2</Text>
                <TouchableOpacity style={{ width: '40%',
                height: '15%', backgroundColor: 'white',
                marginTop: '5%', borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'}}
                onPress={()=>navigation.reset({index: 0, routes: [{name: 'Login'}]})}>
                    <Text>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    perfil: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        width: '90%',
        height: '70%',
        borderRadius: 10,
        marginTop: '5%'
    }
})