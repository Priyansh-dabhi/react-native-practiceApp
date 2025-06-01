import { Image, StyleSheet, Text, TouchableOpacity, View , Linking } from 'react-native'
import React, { useState } from 'react'

export default function ActionCard() {


  function openWebsite(websitelink:string){
      Linking.openURL(websitelink);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              The One Piece
            </Text>
        </View>
        <Image source={require('../assets/one-piece-pictures-sttm4i3gccsq45ca.webp')} style={styles.cardImage}/>

        <View style={styles.cardBody}>
          <Text numberOfLines={4}>
            The narrative follows Monkey D. Luffy, a spirited young pirate whose body gains rubber-like properties after consuming a Devil Fruit. Inspired by the legendary pirate Gol D. Roger, Luffy sets out to find the ultimate treasure, the One Piece, aiming to become the King of the Pirates. He assembles a diverse crew known as the Straw Hat Pirates, each with unique dreams and abilities, as they journey through the perilous Grand Line .
          </Text>
        </View>
        <View style={styles.btncontainer}>
          <TouchableOpacity>
                <Text style={styles.btnText}>Follow Me</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={()=> {openWebsite('https://mangafire.to/manga/one-piecee.dkw')}}>
              <Text style={styles.footerText}>
              Embark on the Grand Line the Straw Hat Pirates!
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
  },
  card:{
        width:350,
        // height:470,
        margin: 12,
        marginVertical:12,
        marginHorizontal:16,
        borderRadius:8,
        backgroundColor:'#FFFFFF'
  },
  elevatedCard:{ 
    elevation:8
  },
  button:{},
  headerContainer:{
    height:40,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  headerText:{
      fontSize:18,
      fontWeight:'bold'
  },
  cardImage:{
    width:'100%',        
    height:300,

  },
  cardBody:{
    
    padding:20
  },
  btncontainer:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  btnText:{
    color:'#FFFFFF',
    backgroundColor: '#808080',
    padding:12,
    borderRadius:8
  },
  footerContainer:{
    marginTop:30,
    marginBottom:25
  },
  footerText:{
    color:"#0000EE",
  }
  

})