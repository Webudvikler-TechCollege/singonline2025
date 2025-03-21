import { useForm } from "react-hook-form";
import { LoginFormContainer } from "./LoginForm.style";
import { FormInput } from "../FormInput/FormInput";
import { Button } from "../Button/Button";
import { useState } from "react";
import { fetchApi } from "../../utils/api";
import { useAuth } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [message, setMessage] = useState("");
    const { loginData, login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (formdata) => {
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
        <LoginFormContainer>
            <form method="POST" onSubmit={handleSubmit(handleLogin)}>
                <h3>El Mando Login</h3>
                <FormInput value="" label="Username" id="username" type="text" register={register} errors={errors} />
                <FormInput value="" label="Password" id="password" type="password" register={register} errors={errors} />
                {message && <span className="error">{message}</span>}
                <Button type="submit">Send</Button>
            </form>
        </LoginFormContainer>
    );
};
