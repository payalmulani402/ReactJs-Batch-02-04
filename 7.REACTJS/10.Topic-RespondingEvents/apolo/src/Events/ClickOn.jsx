const ClickOn = () => {
     
     /* React Events Handling */
     
     
     function alerts(){
          alert("You are clicked me!");
     }

     const handleClick = () => {
          alert("You are useing Function")
     }

     const handleClick1 = () => {
          alerts();
          handleClick();
     }

  return (
    <div>
      <h1 className="text-6xl">React onClick Events</h1>

      <button className="px-12 h-16 w-48 bg-purple-600 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={alerts}>Click</button>

      <button className="px-12 h-16 w-48 bg-purple-600 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={handleClick}>ClickMe</button>

      <button className="px-12 h-16 w-48 bg-purple-600 hover:text-white text-2xl m-10 hover:border-4 border-black" onClick={handleClick1}>ClickMeAll</button>
    </div>
  )
}

export default ClickOn
