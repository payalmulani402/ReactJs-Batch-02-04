import {useState , useMemo} from 'react'

const Count1 = () => {

const [counterOne , setCounterOne] = useState(0)
const [counterTwo , setCounterTwo] = useState(0)


const incrementOne = () => {
  setCounterOne(counterOne + 1)
}

const incrementTwo = () => {
  setCounterTwo(counterTwo + 1)
}



const isEven = useMemo(() =>{
     let i = 0
     while( i < 2000000000)i++
     return counterOne % 2 === 0
   } , [counterOne])


  return (
    <>
      <div>
        <div>
        <button className='button' onClick={incrementOne}>CountOne - {counterOne}</button>
        <span className='button'>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <button className='button' onClick={incrementTwo}>CountTwo - {counterTwo}</button>
      </div>
    </>
  )
}

export default Count1
