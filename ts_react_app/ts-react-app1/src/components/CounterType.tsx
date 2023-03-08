import React from 'react';

type Name = {
    number: string;
}

export default function counter2({ number }: Name){  
    return <h1>{ number }</h1>
}