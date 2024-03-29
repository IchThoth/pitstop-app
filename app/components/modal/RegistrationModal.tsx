'use client'

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import {FcGoogle} from 'react-icons/fc';
import { useState, useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegistrationModal";
import { toast } from 'react-hot-toast'
import Modal from "./Modal";
import Heading from "../Header";
import Input from "../inputs/Input";
import Button from "../Button";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register',data)
        .then(() => {
            registerModal.onClose();
        })
        .catch((error) => {
            toast.error('wetin you dey do ???');
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome to Pitstop" subtitle="Create an account" center/>
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
            <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required/>
            <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required/>
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr/>
            <Button outline icon={FcGoogle} onClick={() => {}} label="Continue with Google" />
            <Button outline icon={AiFillGithub} onClick={() => {}} label="Continue with Github" />
            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className="justify-center flex flex-row items-center gap-2">
                    <div>Already have an account?</div>
                    <div className="text-neutral-800 cursor-pointer hover:underline" onClick={registerModal.onClose}>Log in</div>
                </div>
            </div>
        </div>
    ) 


    return(
        <Modal disabled={isLoading} isOpen={registerModal.isOpen} title="Register" actionlabel="Continue" onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent} />
    );
}

export default RegisterModal



