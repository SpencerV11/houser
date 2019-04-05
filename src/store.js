import { createStore } from 'redux'

let initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

    function reducer(state = initialState, action) {
        const { type, payload } = action
        switch(type) {
            case UPDATE_NAME:
            return {...state, name: payload}

            case UPDATE_ADDRESS:
            return {...state, address: payload}

            case UPDATE_CITY:
            return {...state, city: payload}

            case UPDATE_STATE:
            return {...state, state: payload}

            case UPDATE_ZIP:
            return {...state, zip: payload}

            case UPDATE_IMG:
            return {...state, img: payload}

            case UPDATE_MORTGAGE:
            return {...state, mortgage: payload}
            
            case UPDATE_RENT:
            return {...state, rent: payload}
        }
    }

    export default reducer(createStore)