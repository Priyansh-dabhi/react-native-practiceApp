import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.card1]}>
          <Text style={styles.innerText}>Red</Text>
        </View>
        <View style={[styles.card,styles.card2]}>
          <Text style={styles.innerText}>green</Text>
        </View>
        <View style={[styles.card,styles.card3]}>
          <Text style={styles.innerText}>blue</Text>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal: 8
  },
  container:{
    flex:1,
    flexDirection:'row',
    // borderWidth:2,
    // borderColor:'blue',
    padding:8
  },
  card:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:100,
    width:100,
    borderRadius:4,
    margin: 12
  },
  card1:{
    
    backgroundColor:'red'
  },
  card2:{
    
    backgroundColor:'green'
  },
  card3:{
    
    backgroundColor:'blue'
  },
  innerText:{
    // textAlign:'center'
  }
})