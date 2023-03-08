import React from 'react';

interface Name {
    number: string;
}

export default function counter3({ number }: Name){  
    return <h1>{ number }</h1>
}