import React from "react";
import {useForm} from "react-hook-form";
import "../../styles/SearchBar.css";

type AuthFormValues = {
    searchQuery: string;
};
export const SearchBar = () => {
    const {register, handleSubmit, formState:{ errors }, clearErrors}= useForm<AuthFormValues>();
    return (<input type={"text"} className={"searchBar"} placeholder={"Type issue code or smth"} {...register("searchQuery", { minLength: 40, maxLength: 40 })}/>)
}