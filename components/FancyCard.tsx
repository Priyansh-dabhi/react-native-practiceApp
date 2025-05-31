import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
        <Text style={styles.headingText}>Tranding PC Setup</Text>
        <View style={[styles.card,styles.cardElevated]}>
            <Image style={styles.img} source={require('../assets/myApp.jpg')}/>
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>RTX 3050</Text>
                <Text style={styles.cardLable}>RYZRN 5</Text>
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
    card:{
        // borderWidth:2,
        // borderColor:'black',
        // width:355,
        // height: 200,
        margin: 12,
        // padding:8

    },
    cardElevated:{

    },
    img:{
        width: '100%',
        height:300
    },
    cardBody:{

    },
    cardTitle:{
        
    },
    cardLable:{

    }

})