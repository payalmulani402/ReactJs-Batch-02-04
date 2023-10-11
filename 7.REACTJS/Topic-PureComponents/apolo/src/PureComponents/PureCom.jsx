import React from 'react'

const PureCom = () => {

    let guest = 0;
    // console.log(guest);

    function Cup() {
        // Bad: changing a preexisting variable!
        guest = guest + 1;
        console.log(guest);
        return <h2>Tea cup for guest #{guest}</h2>;
      }


  return (
    <div>
        <Cup/>
        <Cup/>
        <Cup/>
        <Cup/>
        <Cup/>
        <Cup/>
        <Cup/>
    </div>
  )
}

export default PureCom
