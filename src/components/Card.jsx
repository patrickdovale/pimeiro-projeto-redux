import React from 'react';
import './Card.css';

export default function Card(props) {

    function getColor(props){
        if(props.red) return 'red';
        if(props.green) return 'green';
        if(props.blue) return 'blue';
        if(props.purple) return 'purple';
        return '';
    }
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>

            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}