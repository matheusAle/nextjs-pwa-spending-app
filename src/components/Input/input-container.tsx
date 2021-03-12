import cn from 'classnames';
import React from 'react';
import {useFormContext, UseFormMethods} from 'react-hook-form';


export interface InputContainerProps extends React.HTMLProps<any> {
    label: string,
    name: string,
    icon?: string
}

interface InputContainerPropsChildren extends InputContainerProps {
    children: (form: UseFormMethods, props: { className: string, id?: string, name: string }) => JSX.Element
}

export const InputContainer = (props: InputContainerPropsChildren): JSX.Element => {
    const { icon, label, name, children, id, className } = props;
    const form = useFormContext();

    return (
        <div className={ cn('mb-5', className) }>
            <label htmlFor={ id }>{ label }</label>
            <div className="flex">
                { icon && (
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center text-gray-400 text-lg">
                        <i className={ cn('mdi', icon, 'text-gray-400 text-lg') } />
                    </div>
                ) }
                { children(form, {
                    name,
                    id: id,
                    className: cn(
                        'w-full',
                        { 'pl-10 -ml-10': !!icon },
                        { 'field-touched': form.formState.touched[name] },
                        { 'field-untouched': !form.formState.touched[name] },
                        { 'field-dirty': form.formState.dirtyFields[name] },
                        { 'field-pristine': !form.formState.dirtyFields[name] },
                        { 'field-error': form.formState.errors[name] }
                    )
                }) }
            </div>
            { form.errors[name] && (
                <p className="validation-message --error">{ form.errors[name].message }</p>
            ) }
        </div>
    );
};
