import { connect } from "react-redux"
import { buyCake } from "./Redux/Cake/CakeActions"
import {Proptypes} from 'prop-types'

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number Of Cakes - {props.numOfCake}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

CakeContainer.propTypes = {
     numOfCake : Proptypes.number,
     buyCake : Proptypes.function,
}



const mapStateToProps = state =>{
     return{
          numOfCake : state.numOfCake
     }
}

const mapDispatchToProps = dispatch =>{
     return{
          buyCake : () => dispatch(buyCake())
     }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer) 
