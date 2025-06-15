import React, { useState } from "react"
import Button from "./assets/Components/Button"

function App() {
  const [count , setCount] = useState(1)
 const  increase = () => (setCount (count +1))
  return (

      <div className="text-center  space-y-2">
        <p className="text-3xl"> Your count is {count} </p>
        <Button className='p-1 bg-blue-700 text-white rounded-lg text-lg ' text={'Click !'} onClick={increase} /> 
      </div>
      
  
  )
}

export default App


// props wasn't working and had to structure the code . Create the increase function and set it onClick to count