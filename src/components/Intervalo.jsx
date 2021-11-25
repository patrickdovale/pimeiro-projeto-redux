import React from 'react';
import { connect } from 'react-redux';
import './Intervalo.css';

import Card from './Card';
import { alterarNum1, alterarNum2 } from '../store/actions/numerosActions';


function Intervalo(props) {

    const { num1, num2 } = props

    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo: </strong>
                    <input name="num1" type="number" value={num1} onChange={e=>props.changeNum1(e.target.value)}/>
                </span>
                <span>
                    <strong>Maximo: </strong>
                    <input name="num2" type="number" value={num2} onChange={e=>props.changeNum2(e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}


function mapStateToProps(state) {
    return {
        num1: state.numeros.min,
        num2: state.numeros.max,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeNum1(novoNumero) {
            //Action Creator
            const action = alterarNum1(novoNumero)
            dispatch(action)
        },
        changeNum2(novoNumero){
            const action = alterarNum2(novoNumero)
            dispatch(action)
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)