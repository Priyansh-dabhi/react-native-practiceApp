import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
        <ScrollView horizontal={true}>
              <View style={styles.container}>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text style={styles.innerText}>read</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text style={styles.innerText}>more</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text style={styles.innerText}>home</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text style={styles.innerText}>buy</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text style={styles.innerText}>timePass</Text>
                </View>
            </View>
        </ScrollView>
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
        margin: 12,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{ width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4

    },
    cardElevated:{
        backgroundColor:'#FFFFFF'
    },
    innerText:{}
})