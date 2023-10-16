import React from 'react'

const Solution = (box) => {

    
const {button1 , button2 , button3 , button4} = box

function handleClick(){
    box.map((item1) => item1.box[1])
    return 
}

  return (
    <div>
      <button onClick={handleClick}>click</button>
      <div>{box.button1 + box.button2 + box.button3 + box.button4}</div>
    </div>
  )
}

export default Solution
