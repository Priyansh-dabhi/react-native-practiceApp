import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import nandu from '../assets/nandu.jpg';
import priyansh from '../assets/priyansh.jpg';
import pandu from '../assets/pandu.jpg';
import shivam from '../assets/shivam.jpg';
import ashok from '../assets/ashok.jpg';

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Priyansh Dabhi',
            status: 'The Silent One',
            ImageURL: priyansh
        },
        {
            uid: 2,
            name: 'Vrajesh Pandu',
            status: 'The Funny One',
            ImageURL: pandu
        },
        {
            uid: 3,
            name: 'Shivam Patel',
            status: 'The Honest One',
            ImageURL: shivam
        },
        {
            uid: 4,
            name: 'Ashok Bhatt',
            status: 'The Nerd',
            ImageURL: ashok
        },
        {
            uid: 5,
            name: 'Narendra Samanta',
            status: 'The Anime Lover',
            ImageURL: nandu
        },
    ]
    return (
        <View>
        <Text style={styles.headingText}>ContactList</Text>
        <ScrollView style={styles.container} scrollEnabled={false}>
            {/* inside it if ()[then it does not return value]if {}[it return value] */}
            {contacts.map(({uid,name,status,ImageURL})=> (
                <View key={uid} style={styles.userCard}>
                    <Image source={ImageURL} style={styles.userImage} />
                    <View>
                    <Text style={styles.userName}>{name} </Text>
                    <Text style={styles.userStatus}> {status}</Text>
                    </View>
                </View>
            ) )} 
            <View>
                
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    container:{
        backgroundColor:"#FFFFFF",
        width:350,
        margin:12,
        padding:15,
        marginHorizontal:16,
        borderRadius:8,
    },
    userCard:{
        padding:10,
        flexDirection:'row',
        backgroundColor:'#d1db9d',
        marginBottom:8,
        borderRadius:8,

    },
    userImage:{
        width:60,
        height:60,
        borderRadius: 30,
        
    },
    userName:{
        paddingTop:8,
        paddingLeft:10,
        fontSize:18
    },
    userStatus:{
        // paddingTop:19,
        fontSize:12,
        paddingLeft:10,

    },

})