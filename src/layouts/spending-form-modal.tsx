
import {Button} from '@/components/Button';
import {Input, DateInput, CurrencyInput} from '@/components/Input';
import React from 'react';
import Sheet from 'react-modal-sheet';

import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    title: yup.string().required(),
    value: yup.number().min(0).required(),
    date: yup.string().required()
});

const SpendingForm = ({ children }: React.PropsWithChildren<any>) =>  {
    const [isOpen, setOpen] = React.useState(false);
    const form = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            { children(() => setOpen(true)) }

            <Sheet isOpen={ isOpen } onClose={ () => setOpen(false) } style={ { zIndex: 1300 } }>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        <FormProvider { ...form }>
                            <form className="p-4" onSubmit={ form.handleSubmit(onSubmit) }>
                                <Input
                                  name="title"
                                  label="Title"
                                  autoFocus={ true }
                                />

                                <CurrencyInput
                                  name="value"
                                  label="Value"
                                />

                                <DateInput
                                  name="date"
                                  label="Date"
                                />

                                <Button type="submit" >
                                    Save
                                </Button>
                            </form>
                        </FormProvider>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    );
};

export default SpendingForm;
