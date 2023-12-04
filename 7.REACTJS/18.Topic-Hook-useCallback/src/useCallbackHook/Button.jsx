import { PropTypes } from "prop-types"
import React from "react";
const Button = ({handleClick , children}) => {

     console.log(`Rendering button - ` , children);
  return (
    <div>
      <button className="button" onClick={handleClick}>
          {children}
      </button>
    </div>
  )
}



Button.propTypes = {
     handleClick: PropTypes.func,
     children: PropTypes.string
}

export default React.memo(Button)
