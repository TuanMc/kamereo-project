const INITIAL_STATE = {
    info: {
        id: "",
        logoUrl: "",
        name: "",
        address: "",
        district: "",
        city: "",
        phone: "",
        redInvoice: {
            name: "",
            address: "",
            district: "",
            city: "",
            zipCode: "",
            taxCode: ""
        }
    },
    errorMessage: ""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "STORE_INFO_FETCH_SUCCEEDED":
            return {
                ...state,
                info: action.payload
            };
        case "STORE_INFO_FETCH_FAILED":
            return {
                ...state,
                errorMessage: action.message
            };
        case "STORE_INFO_UPDATE_SUCCEEDED":
            return {
                ...state,
                info: action.payload
            };
        case "STORE_INFO_UPDATE_FAILED":
            return {
                ...state,
                errorMessage: action.message
            };
        default:
            return state;
    }
}