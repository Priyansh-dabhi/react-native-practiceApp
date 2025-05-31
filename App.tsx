import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import FlatCard from './components/FlatCard'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
const App = ():React.JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView style={{marginTop:60}}>
        
        {/* <Text style={{fontSize:42}}>App</Text> */}
        <FlatCard/>
        <ElevatedCard/>
        <FancyCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App