import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {AuthContext} from "../context/AuthContext";

type AuthFormValues = {
    apiKey: string;
};

export const UnauthorizedView = () => {
    const authContext = React.useContext(AuthContext);
    const {register, handleSubmit, formState:{ errors }}= useForm<AuthFormValues>();
    const onSubmit: SubmitHandler<AuthFormValues> = async ({apiKey}) => {
        await authContext.authorize(apiKey);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register("apiKey", { minLength: 40, maxLength: 40 })}/>
                </div>
                <button type="submit">Kontynuuj</button>
            </form>
        </div>
    )
}