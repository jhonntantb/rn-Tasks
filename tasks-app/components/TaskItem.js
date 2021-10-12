import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import TaskFromScreen from "../screens/TaskFromScreen"

const TaskItem = ({task,handleDelete}) => {

    const navigation=useNavigation()

    return (
        <View style={styles.itemContainer} >
            <TouchableOpacity onPress={()=>{navigation.navigate("TaskFromScreen",{id:task.id})}}>
            <Text style={styles.itemTitle} >{task.title}</Text>
            <Text style={styles.itemDescription}>{task.description}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>handleDelete({id:task.id})}
            style={styles.delete}>
                <Text style={{color:"#ffff"}}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    itemContainer:{
        backgroundColor:"#333333",
        padding:20,
        marginVertical:8,
        borderRadius:10,
        flexDirection: 'row',
        justifyContent:"space-between"

    },
    itemTitle:{
        color:"#000000",
        

    },
    itemDescription:{
        color:"#ee8589"
    },
    delete:{
        backgroundColor:"#ee5253",
        padding:7,
        borderRadius:5
    }
})

export default TaskItem
