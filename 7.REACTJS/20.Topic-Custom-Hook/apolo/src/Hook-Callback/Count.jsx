import React from 'react'

const Count = ({text , count}) => {
    console.log(`Rendering ${count}`);
  return (
    <div className='button'>
      {text} - {count}
    </div>
  )
}

export default Count
