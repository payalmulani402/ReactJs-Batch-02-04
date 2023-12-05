import React from 'react'
import { useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

const Parent_Components = () => {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(250000)

    const incrementAge = () => {
        setAge(age + 1)
    }
    const incrementSalary = () => {
        setSalary(salary + 10000)
    }

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
