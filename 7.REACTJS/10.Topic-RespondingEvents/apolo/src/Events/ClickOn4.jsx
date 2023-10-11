
const ClickOn4 = () => {
     /* Passing a Function */
     /* Calling a Function*/
     const handleClick = () => {
          alert("You are use Function")
     }
  return (
    <div>
      <button className="button" onClick={handleClick}>Click</button>
    </div>
  )
}

export default ClickOn4
