import { StatusBar, } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Menu({navigation}) {
    return (
        <View style={styles.main}>
            <View style={styles.menu}>
                <View style={styles.boxMenu}>
                    <TouchableOpacity style={{ height: '100%', width: '20%' }}>
                        <Image style={{ resizeMode: 'contain', width: '70%', height: '70%', marginLeft: '40%', marginTop: '10%' }} source={require('../assets/img/menu-aberto.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: '100%', width: '20%' }} onPress={() => navigation.navigate('Home')}>
                        <Image style={{ resizeMode: 'contain', width: '70%', height: '70%', marginLeft: '15%', marginTop: '10%' }} source={require('../assets/img/casa.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: '100%', width: '20%' }} onPress={() => navigation.navigate('Solicitações')}>
                        <Image style={{ resizeMode: 'contain', width: '70%', height: '70%', marginRight: '50%', marginTop: '10%' }} source={require('../assets/img/relogio.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    boxMenu: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '100%'

    },

    menu: {
        backgroundColor: 'blue',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 0
    }
})