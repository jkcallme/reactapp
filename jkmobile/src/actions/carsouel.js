import axios from 'axios';
export const getCarsouelListData = (data)=>{
    return {
        type   : 'GETCAROUSEL',
        payload: data
    }
}

export function fetchCarsouelList(params={page:1}){
    return dispatch=>{
        var url = `http://localhost:3000/carousel`;
        return axios({
            url   : url,
            method: 'get'
        }).then(res=>{

            dispatch(getCarsouelListData(res.data));
        })
    }
}