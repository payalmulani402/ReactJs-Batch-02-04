import React from 'react'


// A functional React component uses props and/or state to calculate the output. If the component makes calculations that don't target the output value, then these calculations are named side-effects.

// Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(), and more.

// Component rendering and the side-effect logic are independent. Performing side-effects directly in the body of the component is a mistake, because the body computes the component's output or calls hooks.

// How often the component renders isn't something you can control — if React wants to render the component, you cannot stop it.



const Side_Effect = ({name}) => {
    const message = `Hello, ${name}!`; // Calculates output

    // Bad!
    document.title = `Greetings to ${name}`; // Side-effect!
  
    return <div>{message}</div>; 
}

export default Side_Effect
