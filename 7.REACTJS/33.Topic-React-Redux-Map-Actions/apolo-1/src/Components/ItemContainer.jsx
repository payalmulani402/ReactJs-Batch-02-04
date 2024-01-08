import React from 'react'
import {connect} from 'react-redux'

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item} </h2>
    </div>
  )
}
const mapStateToProps = (state  , owmProps) =>{
     const itemState = owmProps.cake ? state.cake.numOfCakes : state.iceCreaam.numOfIceCream
     return {
      item: itemState
     }
}
export default connect (mapStateToProps) (ItemContainer)
