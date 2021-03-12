import {InputContainer, InputContainerProps} from '@/components/Input/input-container';
import React from 'react';
import IntlCurrencyInput from 'react-intl-currency-input';


const currencyConfig = {
    locale: 'pt-BR',
    formats: {
        number: {
            BRL: {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        }
    }
};

export function CurrencyInput(props: InputContainerProps): JSX.Element {


    return (
        <InputContainer { ...props }>
            { (({register, setValue}, { name, className, id }) => {
                React.useEffect(() => {
                    register(name);
                }, []);
                return (
                    <IntlCurrencyInput
                      currency="BRL"
                      id={ id }
                      className={ className }
                      config={ currencyConfig }
                      onChange={ (_: any, value: string) => setValue(name, value) }
                    />
                );
            }) }
        </InputContainer>

    );
}
