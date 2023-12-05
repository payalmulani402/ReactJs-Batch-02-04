import React from 'react'
import { useState , useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

const Parent_Components = () => {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(250000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    } , [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 10000)
    } , [salary])

    return (
        <div className='flex justify-center items-center'>
            <div>
                <Title />
                <Count text="Age" count={age} />
                <Button handleClick={incrementAge}>IncrementAge</Button>
                <Count text="Salary" count={salary} />
                <Button handleClick={incrementSalary}>IncrementSalary</Button>
            </div>
        </div>
    )
}

export default Parent_Components
