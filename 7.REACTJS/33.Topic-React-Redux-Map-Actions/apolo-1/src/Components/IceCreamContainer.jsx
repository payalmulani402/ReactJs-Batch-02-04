import { connect } from "react-redux"
import { buyIceCream } from "./Redux/IceCream/IceCreamActions"

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2 className="link">Number Of IceCream - {props.numOfIceCream}</h2>
      <button className="button" onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = state =>{
     return{
          numOfIceCream : state.numOfIceCream
     }
}

const mapDispatchToProps = dispatch =>{
     return{
          buyIceCream : () => dispatch(buyIceCream())
     }
}

export default connect(mapStateToProps , mapDispatchToProps)(IceCreamContainer)
