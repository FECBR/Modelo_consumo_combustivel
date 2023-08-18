import React,{useState} from 'react';
import { Text, SafeAreaView,View,TextInput,Button,TouchableOpacity, StyleSheet } 
from 'react-native';


export default function App() {
  const [km,setKm]=useState('');
const [combustivel,setCombustivel]=useState('');
  function CalculoCombustivel(){
  const resultado= km  /combustivel
  alert('O consumo por litro do seu carro é:'+ resultado);
}
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
       Consumo de Combustivel        
      </Text>   

      <TextInput 
      style={styles.input}
        placeholder="Digite os Km percorridos: "
        placeholderTextColor='#fff'
        keyboardType="numeric"
        onChangeText={(km)=>setKm(km)}
      />  

      <TextInput
      style={styles.input}
        placeholder="Digite a quantidade de combustível :"
        placeholderTextColor='#fff'
        keyboardType="numeric"
        onChangeText={(combustivel)=>setCombustivel(combustivel)}
      />  

    <TouchableOpacity style={styles.btn} onPress={CalculoCombustivel}>
    <Text style={styles.textbtn}>Calcular o consumo</Text>
    </TouchableOpacity>
    

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:60
  },
  btn:{
    alignItems:'center',
    backgroundColor:'#FF0000',
    padding:15,
    borderRadius:10,
    margin:15,
    marginTop:50
  },
  textbtn:{
    fontSize:30,
    color:'#fff'
  },
  input:{
    fontSize:17,
    padding:20,
    backgroundColor:'#a0c225',
    borderRadius:10,
    margin:15,
    
  }
});
