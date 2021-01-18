import React from 'react';
import cn from 'classnames';
import {useFormContext} from 'react-hook-form';

export function Input(props: React.HTMLProps<any> & { label: string, icon?: string, name: string }): JSX.Element {

    const { register, errors, formState } = useFormContext();

    return (
        <div className={ cn('mb-5', props.className) }>
            <label htmlFor={ props.id }>{ props.label }</label>
            <div className="flex">
                { props.icon && (
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center text-gray-400 text-lg">
                        <i className={ cn('mdi', props.icon, 'text-gray-400 text-lg') } />
                    </div>
                ) }
                <input
                  { ...props }
                  ref={ register }
                  className={ cn(
                      'w-full',
                      { 'pl-10 -ml-10': !!props.icon },
                      { 'field-touched': formState.touched[props.name] },
                      { 'field-untouched': !formState.touched[props.name] },
                      { 'field-dirty': formState.dirtyFields[props.name] },
                      { 'field-pristine': !formState.dirtyFields[props.name] },
                      { 'field-error': formState.errors[props.name] }
                  ) }
                />
            </div>
            { errors[props.name] && (
                <p className="validation-message --error">{ errors[props.name].message }</p>
            ) }
        </div>
    );
}
