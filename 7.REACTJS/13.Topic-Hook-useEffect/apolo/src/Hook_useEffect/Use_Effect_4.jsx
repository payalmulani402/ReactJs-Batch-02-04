import React from 'react'
import { useEffect } from 'react';

const Use_Effect_4 = ({message}) => {
    useEffect(() => {
        setInterval(() => {
          console.log(message);
        }, 2000);
      }, [message]);
    
      return <div>I'm logging to console "{message}"</div>;
}

export default Use_Effect_4
