import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

function Media(props) {

    const { num1, num2 } = props

    console.log(props)

    return (
        <Card title="Média dos números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{parseFloat((num1 + num2) / 2)}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        num1: state.numeros.min,
        num2: state.numeros.max,
        primeiroNome: state.nomes[0]
    }
}

export default connect(mapStateToProps)(Media)