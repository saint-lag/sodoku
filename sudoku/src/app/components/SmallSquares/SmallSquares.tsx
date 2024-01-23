import React from 'react';
import './OutsideSquare.css';
Import Number from './Number/Number'; 

export default function InsideSquare(props: {number: number}) {
    return(
        <div className="SmallSquare">
            <div>{props.number}</div>
        </div>
    );
}