import React from 'react';

export function Button(props: React.ButtonHTMLAttributes<any>): JSX.Element {


    return (
        <button { ...props }>
            { props.children }
        </button>
    );
}
