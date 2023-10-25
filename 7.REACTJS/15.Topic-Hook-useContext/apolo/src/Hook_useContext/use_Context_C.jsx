import React from 'react'
import {UserContext} from '../App'

const Use_Context_C = () => {
  return (
    <div>
      <UserContext.Consumer>
        {
            user => {
                return <div>User Context Value {user}</div>
            }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default Use_Context_C
