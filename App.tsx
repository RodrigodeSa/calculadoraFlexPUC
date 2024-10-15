import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';


const App = () => {

  const [gas, setGas] = useState('')
  const [eta, setEta] = useState('')
  const [res, setRes] = useState('')

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Calculadora Flex" />
      </Appbar.Header>

      <View style={styles.body} >
        <TextInput
          style={styles.input}
          label="Preço da Gasolina"
          value={gas}
          onChangeText={text => setGas(text)}
        />
        <TextInput
          style={styles.input}
          label="Preço do Etanol"
          value={eta}
          onChangeText={(text) => setEta(text)}
        />
        <Button mode='contained' onPress={() => console.log('Pressed')} >
          Calcular
        </Button>
        <Text style={styles.text}> {gas} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
  body: {
    margin: 8
  },
  input: {
    backgroundColor: '#FFFF',
    marginBottom: 8
  },
  text: {
    textAlign: 'center',
    margin: 8
  }
});

export default App;
