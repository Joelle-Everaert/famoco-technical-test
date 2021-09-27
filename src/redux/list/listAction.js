import axios from 'axios'
import { FETCH_LIST_FAILURE, FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS } from "./listTypes"

export const fetchListRequest = () => {
    return {
        type: FETCH_LIST_REQUEST
    }
}

export const fetchListSucces = list => {
    return {
        type: FETCH_LIST_SUCCESS,
        payload: list
    }
}

export const fetchListFailure = error => {
    return {
        type: FETCH_LIST_FAILURE,
        payload: error
    }
}

export const fetchList = () => {
    return (dispatch) => {
        dispatch(fetchListRequest)
        // axios({
        //     method: 'get',
        //     url: 'https://botw-compendium.herokuapp.com/api/v2/category/monsters',
        //     withCredentials: true,
        // })
        axios.get('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
            .then(res=>{
                const listData = res.data
                dispatch(fetchListSucces(listData))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchListFailure(errorMsg))
            })
    }
}
