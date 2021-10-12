import React,{useState, useEffect} from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Layout from '../components/Layout'
import { saveTask, getTaskById, updateTask } from '../api'

const TaskFromScreen = ({ navigation, route }) => {

    const [task, setTask] = useState({
        title:"",
        description:""
    })
    const [editing, setEditing] = useState(false)

    const handleChange=(name,value)=>{
        setTask({
        ...task,
        [name]:value
    })}

    const handleSubmit=async()=>{
        // {
        //     "id":3,	
        //     "changes":{"title":"mi tercera tarea",
        //         "description":"terminar mi serie"}
        // }
        try {
            if(editing){
                await updateTask({id:route.params.id,changes:{title:task.title,description:task.description}})
            }else{
                await saveTask(task)
            }
            navigation.navigate("HomeScreen")
            
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        if(route.params&&route.params.id){
            navigation.setOptions({headerTitle:"Updating a task"});
            setEditing(true);
            (async()=>{
                const task=await getTaskById(route.params.id)
                setTask({title:task.title,description:task.description})
            })();
        }
    }, [])
    return (
        <Layout>
            <TextInput 
            style={style.input} 
            placeholder="write a Title"
            placeholderTextColor="#546574"
            onChangeText={(text)=>handleChange("title",text)}
            value={task.title}
            />
            <TextInput 
            style={style.input} 
            placeholder="Write a Description" 
            placeholderTextColor="#546574"
            onChangeText={(text)=>handleChange("description",text)}
            value={task.description}
            />
            {!editing ?(<TouchableOpacity style={style.buttonSave} onPress={handleSubmit}>
                <Text style={style.buttonText}>Save Task</Text>
            </TouchableOpacity>):
            (<TouchableOpacity style={style.buttonUpdate} onPress={handleSubmit}>
            <Text style={style.buttonText}>Update Task</Text></TouchableOpacity>)
            }
            
        </Layout>
    )
}

const style=StyleSheet.create({
    input:{
        width:"90%",
        marginBottom:7,
        borderWidth:2,
        fontSize:20,
        borderColor:"#10ac84",
        height:50,
        color:"#fff",
        textAlign:"center",
        padding:4,
        borderRadius:5
    },
    buttonSave:{
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:10,
        backgroundColor:"#10ac84",
        width:"90%",
    },
    buttonText:{
        color:"#ffffff",
        textAlign:"center"
    },
    buttonUpdate:{
        padding:5,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:3,
        backgroundColor:"#e58e26",
        width:"90%"
    }
})
export default TaskFromScreen
