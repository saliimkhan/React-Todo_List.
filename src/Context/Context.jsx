import React,{createContext}  from 'react'
import { useState } from 'react'

 export const todoContext = createContext(null)
const Context = (props) => {
    const [tasks,setTasks] = useState([{title:"Task 1", completed: false}]);
  return (
    <todoContext.Provider value={[tasks,setTasks]}>
       {props.children}
    </todoContext.Provider>
  )
}

export default Context

/*
for CreateContext 3 things to do 
1.Create 
2.provider .
3.useContext.
*/