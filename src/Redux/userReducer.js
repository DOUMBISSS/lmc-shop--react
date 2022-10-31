const initialState = {
    user:[],
}

export function userReducer (state = initialState, action){
    switch (action.type) {
        case "GET-USER": { 
            // console.log(action.payload)
            return {...state,user: action.payload}
        }
        // case "GET-NEW-USER":{
        //     return {...state,newUser:action.payload}
        // }
        default:{
            return state
        }
            
    }

}