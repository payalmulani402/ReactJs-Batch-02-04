import React from 'react'

const Title = () => {
    console.log('Rendering Title');
  return (
    <div>
    <h2 className='text-4xl'>
      useCallback Hook
    </h2>
    </div>
  )
}

export default React.memo(Title)
