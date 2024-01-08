import { BUY_CAKE } from "./CakeTypes"


export const buyCake = () => {
     return{
          type:BUY_CAKE,
          payload: number
     }
}