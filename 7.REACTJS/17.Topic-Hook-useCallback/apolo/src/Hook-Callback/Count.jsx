import React from 'react'

const Count = ({text , count}) => {
    console.log(`Rendering ${text}`);
  return (
    <div className='button'>
      {text} - {count}
    </div>
  )
}

export default React.memo(Count)
