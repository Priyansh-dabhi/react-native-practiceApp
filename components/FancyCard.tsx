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
                    <Text style={styles.cardLable}>The HP Victus is a line of gaming laptops designed to offer a balance between performance and affordability, making it suitable for gamers, students, and professionals seeking a versatile machine.

                    </Text>
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
        width:350,
        height: 470,
        margin: 12,
        marginVertical:12,
        marginHorizontal:16,
        borderRadius:8,
        // padding:4,
        
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation: 6,
    },
    img:{
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        width: '100%',
        height:300,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
        // borderWidth:2,
    },
    cardTitle:{
        
    },
    cardLable:{

    }

})