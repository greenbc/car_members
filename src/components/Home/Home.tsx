import React from 'react';

export const Home = (props:any) => {
    return (
        <div>
            <h1>Welcome to your Car Collection!</h1>
            <h4>{ props.title }</h4>
        </div>
    )
}