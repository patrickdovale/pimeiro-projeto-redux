const valoresInicial = {
    min: 0,
    max: 20
}

export default function numerosReducers(state = valoresInicial, action) {

    switch (action.type) {
        case 'NUM_ALTERADO':
            return {
                ...state,
                min: action.payload
            }
        case 'NUM2_ALTERADO':
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}