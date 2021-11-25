import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

function Soma(props) {

    const {num1, num2} = props

    return (
        <Card title="Soma dos números" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{+(num1 + num2)}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return{
        num1: state.numeros.min,
        num2: state.numeros.max,
    }
}


export default connect(mapStateToProps)(Soma)