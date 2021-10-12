import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import TaskFromScreen from './screens/TaskFromScreen'

const Stack=createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} 
        options={({ navigation })=>({
          title:"Task App",
          headerStyle:{backgroundColor:"#222f3e"},
          headerTitleStyle:{color:"#ffffff"},
          headerRight:()=>(
          <TouchableOpacity onPress={()=>navigation.navigate("TaskFromScreen")} >
            <Text style={{color:"#ffffff",marginRight:20,fontSize:20}} >New</Text>
          </TouchableOpacity>)
        })
          } />
        <Stack.Screen name="TaskFromScreen" component={TaskFromScreen}
        options={{
          title:"New Task",
          headerStyle:{
            backgroundColor:"#222f3e",
          },
          headerTitleStyle:{color:"#ffffff"},
          headerTintColor:"#ffffff"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
