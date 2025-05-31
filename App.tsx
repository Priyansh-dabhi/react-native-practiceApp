import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
const App = ():React.JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView style={{marginTop:60}}>
        
        {/* <Text style={{fontSize:42}}>App</Text> */}
        <FlatCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App