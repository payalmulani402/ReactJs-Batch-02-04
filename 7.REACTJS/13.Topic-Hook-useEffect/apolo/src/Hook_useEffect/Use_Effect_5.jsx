import React from 'react'
import { useEffect } from 'react';

const Use_Effect_5 = () => {
    useEffect(() => {
        const id = setInterval(() => {
          console.log(message);
        }, 2000);
        return () => {
          clearInterval(id);
        };
      }, [message]);
    
      return <div>I'm logging to console "{message}"</div>;
}

export default Use_Effect_5
