import {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput,Button, TouchableOpacity } from 'react-native';




export default function App() {
  
function CalculoCombustivel(){
  const resultado = km/comb;
  alert ('O consumo do seu carro é '+resultado);
}
  const [km,setKm]= useState (''); 
  const [comb, setComb]= useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
       Consumo de Combústivel
      </Text>

      <TextInput
      style={styles.input}
      placeholder="Digite os k/m percorridos:"
      placeholderTextColor='#fff'
      keyboardType="numeric"
      onChangeText={(km)=>setKm(km)}
      />

      <TextInput
      style={styles.input}
      placeholder="Digite a quantidade de Combústivel:"
      placeholderTextColor='#fff'
      keyboardType="numeric"
      onChangeText={(comb)=>setComb(comb)}
      />
    <TouchableOpacity style={styles.btn}
    onPress={CalculoCombustivel}>
    <Text style={styles.textbtn}>Calcular o Consumo</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:60
  },
  btn:
  {
    alignItems:'center',
    backgroundColor:'#FF0000',
    padding: 15,
    borderRadius:10,
    margin:15
  },

  textbtn:
  {
    fontSize:30,
    color:'#fff'
  },
  input:
  {
    fontSize:'20',
    padding:20,
    backgroundColor:'#a0c225',
    borderRadius:'10',
    margin:15
  },

  
});
