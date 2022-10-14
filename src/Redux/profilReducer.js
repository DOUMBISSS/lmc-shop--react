const initialState = {
    
    profils: [],
    selectedProfil : {},
    modify : false

}

export function profilReducer(state = initialState, action) {

    switch(action.type) {
        case "ADD-PROFIL":{
            return  {...state, profils : [...state.profils, action.payload]}
        }
        case "DELETE-PROFIL" :{
            let newState = [...state.profils] 
            let index = newState.findIndex(profil => profil.id == action.payload);
            newState.splice(index, 1);
            return {...state, profils: [...newState]};
        }

        case "SELECT-PROFIL":{
            let newState = [...state.profils] 
            let profil = newState.find(profil => profil.id == action.payload);
            return {...state, selectedProfil : profil , modify:true};
        }

        case "SET-PROFIL":{
            let newState = [...state.profils] 
            let index = newState.findIndex(profil => profil.id == action.payload.id);
            newState[index] = action.payload;
            return {...state, profils : newState , modify:false};
        }
       
        default: {
            return state;
        }
    }
   
}