//**********************Componentes do React**************************/
import { StatusBar, } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//************************Telas do App********************************/
import Menu from './assets/menu.js';
import Asfalto from './assets/asfalto'
import Onibus from './assets/onibus'
import Tubulacao from './assets/tubulacao'
import Iluminacao from './assets/iluminacao'
import Limpeza from './assets/limpeza'
import Rua from './assets/meioFio'
import Sinal from './assets/sinal'
import Fiscal from './assets/fiscal'
import Ponte from './assets/pontes'
import Cadastro from './assets/cadastroApp'
import Login from './assets/login'
import Info from './assets/info'

//********************************************************************/
//Função de navegação
//Pilha(pt-br) == Stack(en)
//********************************************************************/
const Pilha = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName='Login' >
        <Pilha.Screen name='Home' component={TelaInicial} options={{ headerShown: false }}></Pilha.Screen>
        <Pilha.Screen name='Menu' component={Menu}></Pilha.Screen>
        <Pilha.Screen name='Reparo no asfalto' component={Asfalto}></Pilha.Screen>
        <Pilha.Screen name='Reparo em pontos de ônibus' component={Onibus} options={{ headerTitleStyle: { fontSize: 17 } }}></Pilha.Screen>
        <Pilha.Screen name='Reparo em tubulações' component={Tubulacao}></Pilha.Screen>
        <Pilha.Screen name='Reparo em poste de luz' component={Iluminacao}></Pilha.Screen>
        <Pilha.Screen name='Limpeza de área pública' component={Limpeza}></Pilha.Screen>
        <Pilha.Screen name='Manutenção na calçada' component={Rua}></Pilha.Screen>
        <Pilha.Screen name='Manutenção na sinalização' component={Sinal} options={{ headerTitleStyle: { fontSize: 18 } }}></Pilha.Screen>
        <Pilha.Screen name='Fiscalização de terrenos' component={Fiscal}></Pilha.Screen>
        <Pilha.Screen name='Manutenção em pontes' component={Ponte}></Pilha.Screen>
        <Pilha.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false }}></Pilha.Screen>
        <Pilha.Screen name='Login' component={Login} options={{ headerShown: false }}></Pilha.Screen>
        <Pilha.Screen name='Perfil' component={Info} options={{ headerShown: false }}></Pilha.Screen>
      </Pilha.Navigator>
    </NavigationContainer>
  );
}

//************************Tela Inicial********************************/
function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <View style={styles.header}>
        <Image style={{ width: 70, height: 50, marginLeft: 10 }} source={require('./assets/logo.png')}></Image>
        <Text style={{fontWeight: 'bold', marginRight: '5%',}}>Prefeitura de Patos de Minas</Text>
      </View>
      <View style={styles.main}>
        <ScrollView style={styles.scroll}>
          <View style={styles.scr}>
            <Text style={{alignSelf: 'center', fontStyle: 'italic', fontWeight: '100'}}>Qual serviço você procura?</Text>
            <View style={styles.row}>
              <TouchableOpacity style={styles.boxOnibus} onPress={() => navigation.navigate('Reparo em pontos de ônibus')}>
                <Image style={styles.img} source={require('./assets/img/frente-do-onibus.png')}></Image>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>Reparo em ponto</Text>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>de ônibus</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.boxIluminacao} onPress={() => navigation.navigate('Reparo em poste de luz')}>
                <Image style={styles.img} source={require('./assets/img/lampada-brilhante.png')}></Image>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>Reparo em </Text>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>poste de luz</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.boxTubulacao} onPress={() => navigation.navigate('Reparo em tubulações')}>
                <Image style={styles.img} source={require('./assets/img/agua-da-torneira.png')}></Image>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>Reparo em tubulações</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.boxAsfalto} onPress={() => navigation.navigate('Reparo no asfalto')}>
                <Image style={styles.img} source={require('./assets/img/carro-esporte.png')}></Image>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>Reparo no asfalto</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.boxLimpeza} onPress={() => navigation.navigate('Limpeza de área pública')}>
                <Image style={styles.img} source={require('./assets/img/pessoas.png')}></Image>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>Limpeza de área</Text>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>pública</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.boxCalcada} onPress={() => navigation.navigate('Manutenção na calçada')}>
                <Image style={styles.img} source={require('./assets/img/homem-andando.png')}></Image>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>Manutenção na</Text>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>calçada</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.boxSinal} onPress={() => navigation.navigate('Manutenção na sinalização')}>
                <Image style={styles.img} source={require('./assets/img/semaforo.png')}></Image>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>Manutenção na</Text>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>sinalização</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.boxFiscal} onPress={() => navigation.navigate('Fiscalização de terrenos')}>
                <Image style={styles.img} source={require('./assets/img/lupa-arredondada.png')}></Image>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>Fiscalização de</Text>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>terrenos</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.boxPonte} onPress={() => navigation.navigate('Manutenção em pontes')}>
                <Image style={styles.img} source={require('./assets/img/ponte.png')}></Image>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>Manutenção em</Text>
                <Text style={{ alignSelf: 'center', fontSize: 11 }}>pontes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.menu}>
        <View style={styles.boxMenu}>
          <TouchableOpacity style={{ height: '100%', width: '100%' }} onPress={() => navigation.navigate('Perfil')}>
            <Image style={{ resizeMode: 'contain', width: '70%', height: '70%', marginLeft: '15%', marginTop: '2%' }} source={require('./assets/img/menu-aberto.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DFE6EF',
    borderRadius: 15,
    height: '13%',
    marginTop: '9%',
    marginLeft: 10,
    marginRight: 10,
  },
  main: {
    height: '73%',
  },
  menu: {
    backgroundColor: 'blue',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  scroll: {
    backgroundColor: 'white',
    flexDirection: 'column',
    marginBottom: '0%'
  },
  scr: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 550
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    height: 80
  },
  //estilo dos botões
  img:{
    width: '45%',
    height: '45%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  //estilo onibus
  boxOnibus: {
    backgroundColor: 'gray',
    width: '30%',
    borderRadius: 5,
    justifyContent: 'center'
  },
  boxIluminacao: {
    backgroundColor: 'yellow',
    width: '30%',
    borderRadius: 5,
    justifyContent: 'center'
  },
  boxTubulacao: {
    backgroundColor: '#DFEDFB',
    width: '30%',
    borderRadius: 5,
    justifyContent: 'center'
  },
  boxAsfalto: {
    backgroundColor: '#1981C1',
    width: '30%',
    borderRadius: 5,
    justifyContent: 'center'
  },
  boxLimpeza: {
    backgroundColor: '#6297AE',
    width: '30%',
    borderRadius: 5,
    justifyContent: 'center'
  },
  boxCalcada: {
    backgroundColor: '#38B6FF',
    width: '30%',
    borderRadius: 5,
    justifyContent: 'center'
  },
  boxSinal: {
    backgroundColor: '#F80909',
    width: '30%',
    borderRadius: 5,
    justifyContent: 'center'
  },
  boxFiscal: {
    backgroundColor: '#FFFC00',
    width: '30%',
    borderRadius: 5,
    justifyContent: 'center'
  },
  boxPonte: {
    backgroundColor: 'brown',
    width: '30%',
    borderRadius: 5,
    justifyContent: 'center'
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
});