import { useForm } from "react-hook-form";
import { FormField } from "../Molecyles/FormField";
import { Button } from "../Atoms/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../providers/AuthProvider";
import { useState } from "react";
import { fetchApi } from "../../../utils/api";

export const LoginForm = ({
    defaultValues = {}}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues });
    const [message, setMessage] = useState("");
    const { loginData, login } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (formdata) => {
        try {
            const data = await fetchApi("/login", "POST", formdata);
            login(data); // Kald login-funktion fra AuthProvider
            navigate("/"); // Navigér brugeren til en ny side efter login
        } catch (error) {
            console.log(`Login error: ${error}`);
            setMessage("Forkert brugernavn eller adgangskode");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
                label="Username"
                name="username"
                rules={{ required: "Username is required" }}
                error={errors?.username?.message}
                autoComplete="current-user"
                register={register}
            />

            <FormField
                label="Password"
                name="password"
                type="password"
                rules={{ required: "Password is required" }}
                error={errors?.password?.message}
                autoComplete="current-password"
                register={register}
            />

            <Button type="submit">Login</Button>
        </form>
    )
}