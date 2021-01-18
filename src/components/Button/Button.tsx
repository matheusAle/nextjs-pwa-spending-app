import React from 'react';

export function Button(props: React.HTMLProps<any>): JSX.Element {


    return (
        <button className={ props.className }>
            { props.children }
        </button>
    );
}
