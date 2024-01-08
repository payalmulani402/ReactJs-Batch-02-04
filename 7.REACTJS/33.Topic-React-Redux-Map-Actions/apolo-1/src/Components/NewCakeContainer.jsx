import { connect } from "react-redux"
import { buyCake } from "./Redux/Cake/CakeActions"
import { useState } from "react"

const NewCakeContainer = (props) => {

     const [number  , setNumber] = useState(1);


  return (
    <div>
      <h2 className="link">Number Of NewCakes - {props.numOfCakes}</h2>
      <input class="border border-black bg-red-500" type="text" value={number} onChange={e => setNumber(e.target.value)} />
      <button className="border border-black" onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  )
}


const mapStateToProps = state =>{
     return{
          numOfCakes : state.numOfCakes
     }
}

const mapDispatchToProps = dispatch =>{
     return{
          buyCake : number => dispatch(buyCake(number))
     }
}

export default connect(mapStateToProps , mapDispatchToProps)(NewCakeContainer) 
