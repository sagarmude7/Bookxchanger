import {FETCH_ALL,CREATE} from '../constants/actions'
const api = require('../api/index')

export const getBooks = ()=>async(dispatch)=>{
    try {
        //get data from api
        const {data } = await api.fetchBooks()
        console.log(data)
        dispatch({type:FETCH_ALL,payload:data})
    } catch (err) {
        console.log(err.response.data)
    }
}

export const createBookAd = (formData)=>async(dispatch)=>{
    try{
        const {data} = await api.createBookAd(formData)
        console.log(data)
        dispatch({type:CREATE,payload:data})
    }catch(err){
        console.log(err.response.data)
    }
}