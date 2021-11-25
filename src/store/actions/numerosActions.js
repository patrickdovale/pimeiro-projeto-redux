

//Action Creator
export function alterarNum1(novoNumero){
    return {
        type: 'NUM_ALTERADO',
        payload: parseInt(novoNumero)
    };
}

export function alterarNum2(novoNumero){
    return{
        type: 'NUM2_ALTERADO',
        payload: +novoNumero
    }
}