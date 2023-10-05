import PropTypes from 'prop-types';

const ListItem = ({Update}) =>{
     
     
     return(
          <>
          <h1>Conditional Rendering In React {Update}</h1>
          </>
          )
     }
     
     ListItem.propTypes = {
          Update : PropTypes.string
     }

const Render = () => {
     return (
    <div>
     <ListItem Update="vivek"/>
    </div>
  )
}



export default Render
