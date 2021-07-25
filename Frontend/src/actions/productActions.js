import Axios from 'axios';
import {PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCES, PRODUCT_DETAILS_SUCCES, PRODUCT_DETAILS_FAIL} from '../constants/productConstants';

export const listProducts = ()=> async(dispatch)=>{
    dispatch({type: PRODUCT_LIST_REQUEST});
    try {
        const {data} = await Axios.get('/api/products');
        dispatch({type:PRODUCT_LIST_SUCCES, payload: data})
    } catch (error) {
        dispatch({type:PRODUCT_LIST_FAIL,payload: error.message})
    }
}

export const detailsProduct = (productId)=> async(dispatch)=>{
    dispatch({type:PRODUCT_DETAILS_REQUEST})
    try {
        const {data} = await Axios.get(`/api/product/${productId}`);
        dispatch({type:PRODUCT_DETAILS_SUCCES,payload: data})
    } catch (error) {
        dispatch({type:PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                 ? error.response.data.message
                 : error.message,
        })
    }
}