import { createStore, combineReducers } from 'redux';
import numerosReducers from './reducers/numerosReducers';


const reducers = combineReducers({
    numeros: numerosReducers,
    nomes: function (state, action) {
        console.log('reducers.nomes...')
        console.log(state, " ", action)
        return [
            'ana',
            'gabriela'
        ]
    }
});

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;