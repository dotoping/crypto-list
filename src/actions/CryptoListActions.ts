import axios from 'axios'
import { Dispatch } from 'redux'
import { CRYPTO_GET_LIST_FAILURE, CRYPTO_GET_LIST_SUCCESS } from './CryptoListActionTypes'

export const fetchCryptoListData = (perPage:number, page:number) => async (dispatch: Dispatch) => {

    // const perPage = 100
    // const page = 1

    try {
        const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&
                    order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`
        )
        // const response = await axios.get("https://jsonplaceholder.typicode.com/comments")
        const data = response.data

        dispatch({ type: CRYPTO_GET_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CRYPTO_GET_LIST_FAILURE })
        // type: CRYPTO_GET_LIST_FAILURE
    }
}