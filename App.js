import React, { useState } from 'react';
import {
 StyleSheet,
 FlatList,
 Button,
 TextInput,
 Text,
 View
} from 'react-native';
import ItemList from './ItemList';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
  },
  appbar: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'cyan',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  content: {
    margin: 10,
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  }   
})

const App = props => {
  const [items, setItems] = useState([
    {id: 1, name: 'This is title one.', price: '2000'},
    {id: 2, name: 'This is title two.', price: '3000'}
  ]);

  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const add = () => {
    setItems([
      ...items,
      {id: items.length + 1, name, price}
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Text style={styles.title}>Hello React Native</Text>
      </View>
      <View style={styles.content}> 
        <FlatList 
        data = {items} 
        renderItem={({item}) => {
          return(
            <ItemList keyboardType="numeric" name={item.name} price={item.price}></ItemList>
          )
        }} 
        keyExtractor={(item) => item.id}/>
      </View>
      <View style={styles.content}>
        <Text>Put Title</Text>
        <TextInput style={styles.input} value={name} onChangeText={(name) => setName(name)}/>
        <Text>Put Price</Text>
        <TextInput style={styles.input} value={price} onChangeText={(price) => setPrice(price)}/>
        <Button title="ADD" onPress={add}></Button>
      </View>
    </View>
  )
}
export default App;