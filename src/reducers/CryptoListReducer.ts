import {
    CRYPTO_GET_LIST_FAILURE, CRYPTO_GET_LIST_SUCCESS, CryptoListType, CryptoGetListDispatchType
} from '../actions/CryptoListActionTypes'

interface InitialState {
    success: boolean
    cryptoList?: CryptoListType
}

const initialState: InitialState = {
    success: false
}

const CryptoListReducer = (state = initialState, action: CryptoGetListDispatchType): InitialState => {
    switch (action.type) {
        case CRYPTO_GET_LIST_FAILURE:
            return {
                ...state,
                success: false
            }
        case CRYPTO_GET_LIST_SUCCESS:
            const { lists } = action.payload
            return {
                ...state,
                success: true,
                cryptoList: {
                    lists
                }
            }

        default:
            return state;
    }
}

export default CryptoListReducer