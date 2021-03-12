import {InputContainer, InputContainerProps} from '@/components/Input/input-container';
import React from 'react';

export function Input(props: InputContainerProps): JSX.Element {

    return (
        <InputContainer { ...props }>
            { ({register}, inputProps) => (
                <input
                  ref={ register }
                  { ...inputProps }
                />
            ) }
        </InputContainer>
    );
}
