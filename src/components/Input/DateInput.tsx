import TextField from '@material-ui/core/TextField';
import {InputContainer, InputContainerProps} from '@/components/Input/input-container';
import React from 'react';
import format from 'date-fns/format';

import DateFnsUtils from '@date-io/date-fns';
import {
    DateTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';

export const DateInput = (props: InputContainerProps): JSX.Element =>  {
    return (
        <InputContainer { ...props }>
            { (form, fieldProps) => (
                <MuiPickersUtilsProvider utils={ DateFnsUtils }>
                    <DateTimePicker
                      value={ form.getValues(fieldProps.name) }
                      onChange={ newValue => {
                          form.setValue(fieldProps.name, newValue ? new Date(newValue.valueOf()) : new Date());
                      } }
                      TextFieldComponent={ params => (
                        <input
                          ref={ form.register }
                          { ...fieldProps }
                          onClick={ params.onClick }
                          defaultValue={ params.value as any }
                        />
                      ) }
                    />
                </MuiPickersUtilsProvider>
            ) }
        </InputContainer>
    );
};
