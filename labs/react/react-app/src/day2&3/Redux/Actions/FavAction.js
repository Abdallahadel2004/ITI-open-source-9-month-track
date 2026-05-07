export const FavMovie=(payload)=>{
    return{
        type:"Add_Fav",
        payload
    }
}

export const RemoveFavMovie=(payload)=>{
    return{
        type:"Remove_Fav",
        payload
    }
}