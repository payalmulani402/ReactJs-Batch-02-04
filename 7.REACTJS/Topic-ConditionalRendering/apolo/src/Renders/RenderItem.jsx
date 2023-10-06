import PropTypes  from "react"


const ItemStatus = ({Item , ItemPacked}) => {
     return(
          <>
               <h1>This Is Item Section {Item}</h1>
               <h1>This Is Item Section {ItemPacked}</h1>
          </>
     )
}

ItemStatus.propTypes = {
     Item : PropTypes.string,
     ItemPacked : PropTypes.boolean
}



const RenderItem = () => {
  return (
    <div>
      <ItemStatus Item ="OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)" ItemPacked={true}/>
    </div>
  )
}


export default RenderItem
