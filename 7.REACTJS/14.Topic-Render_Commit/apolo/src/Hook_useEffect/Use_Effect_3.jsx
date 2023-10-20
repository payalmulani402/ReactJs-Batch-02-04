import React from 'react'
import { useEffect } from 'react';

const Use_Effect_3 = ({names}) => {
    const message = `Hello, ${names}!`;

    useEffect(() => {
      document.title = `Greetings to ${names}`; 
    }, [names]);
  
    return <div>{message}</div>;
}

export default Use_Effect_3
