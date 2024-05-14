import { useState } from "react";

export const useForm = ( initialForm = {valueSearch: ''} ) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState( initialForm );
    };


    return {
        ...formState,
        formState,

        valueSearch: formState.valueSearch,
        onInputChange,
        onResetForm,
    }

}