import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';


function Sorteio(props) {

    return (
        <Card title="Sorteio dos números" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    {parseInt(Math.floor(Math.random() * (+(20) - +(0))) + +(0))}
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

export default connect(mapStateToProps)(Sorteio)