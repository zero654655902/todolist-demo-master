export const checkAction=(index)=>{
    return{
        type:"CHECK",
        text:index

    }
}

export const deleteAction=(index)=>{
    return{
        type:"DELETE",
        text:index

    }
}