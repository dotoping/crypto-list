export const CRYPTO_GET_LIST_SUCCESS = 'CRYPTO_GET_LIST_SUCCESS'
export const CRYPTO_GET_LIST_FAILURE = 'CRYPTO_GET_LIST_FAILURE'

export type CryptoListType = {
    lists: CryptoList[]
}

export type CryptoList = {
    // "postId": number
    // "id": number
    // "name": string
    // "email": string
    // "body": string
    "id": string
    "symbol": string
    "name": string
    "image": string
    "current_price": number
    "market_cap": number
    "market_cap_rank": number
    "total_volume": number
    "last_updated": string
}

export interface cryptoGetListFailDispatch {
    type: typeof CRYPTO_GET_LIST_FAILURE
}

export interface cryptoGetListSuccessDispatch {
    type: typeof CRYPTO_GET_LIST_SUCCESS
    payload: {
        lists: CryptoList[]
    }
}

export type CryptoGetListDispatchType = cryptoGetListFailDispatch | cryptoGetListSuccessDispatch