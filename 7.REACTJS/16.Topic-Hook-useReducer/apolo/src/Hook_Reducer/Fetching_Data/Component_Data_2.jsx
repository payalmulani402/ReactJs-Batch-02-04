import React from 'react'
import { useReducer , useEffect } from 'react'
import axios from 'axios'

const initalState = {
  loading : true,
  error : '',
  post : {}
}

const reducer = (state , action) => {
  switch(action.type){
    case 'FETCH_SUCCESS' :
      return{
        loading : false,
        post : action.payload,
        error : ''
      }
    case 'FETCH_ERROR':
    return{
      loading: false,
      post : {},
      error : 'Something Went Wrong!'
    }

    default:
      return state
  }
}

const Component_Data_2 = () => {

    const[state , dispatch] = useReducer(reducer , initalState)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(
            response => {
                dispatch(
                  {
                    type : 'FETCH_SUCCESS' , payload : response.data
                  }
                )
            }
        )
        .catch(
            error => {
                dispatch({
                  type : 'FETCH_ERROR'
                })
            }
        )
    } , [])


  return (
    <div>
      {state.loding ?  'Loading' : state.post.title}
      {state.error ? error  : null}
    </div>
  )
}

export default Component_Data_2
