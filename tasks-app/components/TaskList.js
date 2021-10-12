import React,{ useState, useEffect }from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import { getTask, deleteTask } from '../api'
import TaskItem from './TaskItem'


const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const focus=useIsFocused() // da true o false

    const loadTask=async()=>{
        const data=await getTask()
        setTasks(data)
    }

    useEffect(() => {
        loadTask()
    }, [focus])
    const onDeleteTask=async(id)=>{
        await deleteTask(id)
        loadTask()
    }


    const renderItem=({item})=>{
        return <TaskItem task={item} handleDelete={onDeleteTask}/>
    }
    const onRefresh=React.useCallback(async()=>{
        setRefreshing(true)
        await loadTask()
        setRefreshing(false)
    })

    return (
        <FlatList style={{width:"100%"}}
            data={tasks}
            keyExtractor={(item)=>item.id+""}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                refreshing={refreshing}
                colors={["#78e08f"]}
                onRefresh={onRefresh}
                />
            }
            />
    )
}

export default TaskList
