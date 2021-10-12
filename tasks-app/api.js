import axios from "axios"
const url="http://10.0.2.2:3001/tasks"

export const getTask=async()=>{
    const res=await axios.get(url)
    return res.data
}
export const saveTask=async(newTask)=>{
    const res=await axios.post(url,newTask)
    return res
}
export const deleteTask=async(id)=>{
    await axios.delete(url,{data:id})
}
export const getTaskById=async(id)=>{
    const res=await axios.get(`${url}/${id}`)
    return res.data
}
export const updateTask=async(data)=>{
    await axios.put(url,data)
}