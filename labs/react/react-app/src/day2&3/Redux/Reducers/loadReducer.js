const INTIAL_VALUE={
    loader:true
};

export default function loadReducer(state=INTIAL_VALUE,action){
    switch(action.type){
        case "Start_Loading":
        return{
            ...state,
            loader:action.payload
        }
    default:
        return state;
    }
}