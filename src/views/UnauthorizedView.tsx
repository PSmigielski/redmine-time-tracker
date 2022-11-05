import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {AuthContext} from "../context/AuthContext";

import "../styles/UnauthorizedView.css";
import {redirect} from "react-router-dom";
type AuthFormValues = {
    apiKey: string;
    redmineUrl: string;
};

export const UnauthorizedView = () => {
    const authContext = React.useContext(AuthContext);
    const {register, handleSubmit, formState:{ errors }, clearErrors}= useForm<AuthFormValues>();
    const onSubmit: SubmitHandler<AuthFormValues> = async ({apiKey, redmineUrl}) => {
        await authContext.authorize(apiKey, redmineUrl);
    };
    return (
        <div className="unauthorizedView">
            <form className="unauthorizedView__form" onSubmit={handleSubmit(onSubmit)}>
                <p className="unauthorizedView__header">Autoryzacja</p>
                <div className="unauthorizedView__inputContainer">
                    <input placeholder={"Podaj swój klucz API"} {...register("apiKey", { minLength: 40, maxLength: 40 })}/>
                    <p>{errors.apiKey?.type ? "Klucz api jest błędny" : ""}</p>
                </div>
                <div className="unauthorizedView__inputContainer">
                    <input placeholder={"Podaj URL do Redmine"} {...register("redmineUrl", { pattern: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.?[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/})} />
                    <p>{errors.apiKey?.type ? "Niepoprawne Url" : ""}</p>
                </div>
                <button className="unauthorizedView__submitBtn" type="submit">Kontynuuj</button>
            </form>
        </div>
    )
}