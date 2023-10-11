// import PropTypes from 'prop-types'

const ButtonAlert = ({message , children}) => {
     return(
          <button className='button' onClick={() => alert(message)}>{children}</button>
     );
}

// ButtonAlert.propTypes = {
//      message : PropTypes.string,
//      children : PropTypes.element,
// }

const ClickOn5 = () => {
     /* Reading props in event handlers */

  return (
    <div>
      <h1 className='text-6xl'>Reading props in event handlers</h1>
      <ButtonAlert message="Now Playing!">Play</ButtonAlert>
      <ButtonAlert message="Now Uploding!">Upload</ButtonAlert>
    </div>
  )
}

export default ClickOn5
