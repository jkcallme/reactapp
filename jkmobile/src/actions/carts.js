export const addToCart=(data)=>{
    console.log('成功',data)
    return{
        type:'ADDTOCARTS',
        payload:data
    }
}

export const clearToCart=(data)=>{
    return{
        type:'CLEARTOCARTS',
        payload:data
    }
}