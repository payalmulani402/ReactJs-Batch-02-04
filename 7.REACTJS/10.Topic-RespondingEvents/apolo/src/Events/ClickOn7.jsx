import PropTypes from 'prop-types'

const ButtonAlert = ({onReact , children}) => {
     return(
          <button className='button' onClick={onReact}>{children}</button>
     );
}

ButtonAlert.propTypes = {
     onReact : PropTypes.string,
     children : PropTypes.string,
}

const ClickOn7 = () => {

     /* Naming event handler props  */

  return (
    <div>
      <h1 className='text-6xl'>Naming event handler props</h1>
      <ButtonAlert onReact={() => alert("Playing!!!!!")}>Play Games</ButtonAlert>
      <ButtonAlert onReact={() => alert("Uploding!!!!!")}>Upload Games</ButtonAlert>
    </div>
  )
}

export default ClickOn7
