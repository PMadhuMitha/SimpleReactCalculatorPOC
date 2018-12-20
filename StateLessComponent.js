import React from 'react';

export default function StateLessComponent(props){

    return(
        <div>
            <p> Hello {props.name} </p>
            </div>
    )
    // this is a simple stateless componnet(static data), add this class in index.js to see the work flow. since it is stateless,
    // it can be declared as function and no need of extends react.componnet here. babel itself extends when it sees
    // functiona and props
}