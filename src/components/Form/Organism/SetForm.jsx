import { useForm } from "react-hook-form";
import { Button } from "../Atoms/Button";
import { FormField } from "../Molecyles/FormField";
import { useAuth } from "../../../providers/AuthProvider";
import { fetchApi } from "../../../utils/api";
import { useNavigate } from "react-router-dom";

export const SetForm = ({ defaultValues = {}, mode = "create" }) => {
    const { loginData } = useAuth()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues });

    const onSubmit = async formdata => {
        if (!loginData?.access_token) return;

        const method = mode === "update" ? "PUT" : "POST"
        const endpoint = mode === "update" ? `/sets/${defaultValues.id}` : `/sets`

        try {
            const data = await fetchApi(endpoint, method, formdata, loginData.access_token);
            if (data.response?.id) {
                setSongs(prev => {
                    if (mode === "update") {
                        return prev.map(set =>
                            set.id === data.response.id ? data.response : set
                        )
                    }
                    return [...prev, data.response]
                })
                navigate(`/${data.response.id}`)
            }
        } catch (error) {
            console.error(`Error creating song: ${error}`);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
                label="Title"
                name="title"
                rules={{ required: "Title is required" }}
                error={errors?.title?.message}
                register={register}
            />

            <FormField
                as="textarea"
                label="Description"
                name="description"
                rules={{ required: "Description is required" }}
                error={errors?.description?.message}
                register={register}
            />

            <div className="form-actions">
                <Button type="submit">{mode === "update" ? "Update" : "Save"}</Button>
            </div>
        </form>
    )
}