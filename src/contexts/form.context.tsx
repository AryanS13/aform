'use client'
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Form } from '@/models/form.model';

interface FormContextInterface {
    form: Form,
    setForm: Dispatch<SetStateAction<Form>>
}

export const FormContext = createContext<FormContextInterface>({
    form: new Form(),
    setForm: () => {}
});

export default function FormContextProvider({ children }) {
    const [form, setForm] = useState<Form>(new Form());
  
    return (
        <FormContext.Provider value={{ form, setForm }}>
            {children}
        </FormContext.Provider>
    );
}
