import PropTypes from "prop-types"
import React from "react";

const Count = ({text , count}) => {

     console.log(`Rendering ${text}`);
  return (
    <div>
          <div className="button">
               {text} - {count}
          </div>
    </div>
  )
}

Count.propTypes = {
     text: PropTypes.string,
     count: PropTypes.number
}

export default React.memo(Count)
