

const handleApiData=(state=[],action)=>{
    switch(action.type){
        case "ADD_API_DATA":
            return action.payload
            default:
                return state;
    }
}
let a=[]
const handleCartItems=(state=[],action)=>{
  
switch(action.type){
    case "ADD_TO_CART":
        return [...state,action.payload];
    case "REMOVE_TO_CART":
        // console.log(state)
         a=[...new Set(state)]
        // console.log(a,action.payload)
        let y= a.findIndex(value=>value==action.payload)
        // console.log(y)
        let x= a.splice(y,1)
        return a;
        default:
            return state;
}
}
const countCardItems=(state=0,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return state+1;
        case "REMOVE_TO_CART":
         
            return a.length;
            default:
                return state;
}}

export { handleCartItems,countCardItems,handleApiData}