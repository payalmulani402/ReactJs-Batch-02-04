import { useState , useCallback } from "react"
import Button from "./Button"
import Title from "./Title"
import Count from "./Count"



const ParentComponent = () => {

     const[age , setAge] = useState(25)
     const[salary , setSalary] = useState(10000)

     const incrementAge = useCallback(() => {
      setAge(age + 1);
 } , [age])
     const incrementSalary = useCallback(() => {
      setSalary(salary + 2000)
 } , [salary])
  return (
    <div>
      <Title/>
      <Count  text="Age" count={age}/>
      <Button handleClick={incrementAge}>Incerement Age</Button>
      <Count text="Salary" count={salary}/>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
