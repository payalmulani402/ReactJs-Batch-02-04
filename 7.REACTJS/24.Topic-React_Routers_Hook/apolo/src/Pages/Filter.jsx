import {useSearchParams} from 'react-router-dom'
import Navbar from '../Components/Navbar';

const Filter = () => {

     const [searchParams , setSearchParams] = useSearchParams();
     console.log(searchParams.get("age"));
    //  console.log(searchParams.get("city"));
    
    return (
      <div>
     <Navbar/>
      <h1 className='text-6xl'>This is Filter Page</h1>
      <h3>Age is = {searchParams.get("age")}</h3>
      <h3>City is = {searchParams.get("city")}</h3>
      <input type="text" onChange={(e) => setSearchParams({text:e.target.value})} placeholder='Set Text' />
      <button className='button' onClick={() => setSearchParams({age:50})}>Set Age</button>
      <button className='button' onClick={() => setSearchParams({city:"mumbai"})}>Set City</button>
    </div>
  )
}

export default Filter
