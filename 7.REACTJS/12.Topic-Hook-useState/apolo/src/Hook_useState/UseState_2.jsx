import { useState } from "react"

const UseState_2 = () => {

     const [age , setAge] = useState(18);
     const [name , setName] = useState("");
     const [todos , setTodos] = useState("");

     function setAges(){
          setAge(age + 1)
     }

     function setNames(){
          setName("Vivek")
          setName("Jaydip")
          setName("Rajat")
          setName("Ranjit")
     }

     function viewTodos(){
          setTodos("Daily Worked Assign To Vivek!")
          setTodos("Daily Worked Assign To Jaydip!")
          setTodos("Daily Worked Assign To Rajat!")
          setTodos("Daily Worked Assign To Ranjit!")
     }

     function Reset(){
          setAge(18)
          setName("Vivek")
          setTodos("Daily Worked Assign!")
     }

  return (
    <div className="flex mt-40 p-2 bg-slate-600 rounded-2xl">
      <button className="button" onClick={setAges}>{age}</button>
      <button className="button" onClick={setNames}>{name}</button>
      <button className="button" onClick={viewTodos}>{todos}</button>
      <button className="button" onClick={Reset}>Reset</button>
    </div>
  )
}

export default UseState_2
