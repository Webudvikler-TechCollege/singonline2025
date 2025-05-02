import { useForm } from "react-hook-form";
import { Button } from "../Atoms/Button";
import { FormField } from "../Molecyles/FormField";
import { useArtists } from "../../../providers/ArtistProvider";
import { useAuth } from "../../../providers/AuthProvider";
import { fetchApi } from "../../../utils/api";
import { useSongs } from "../../../providers/SongProvider";
import { useNavigate } from "react-router-dom";

export const SongForm = ({ defaultValues = {}, mode = "create" }) => {
    const { artists } = useArtists()
    const { loginData } = useAuth()
    const { setSongs } = useSongs()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues });

    const onSubmit = async formdata => {
        if (!loginData?.access_token) return;

        const method = mode === "update" ? "PUT" : "POST"
        const endpoint = mode === "update" ? `/songs/${defaultValues.id}` : `/songs`

        try {
            const data = await fetchApi(endpoint, method, formdata, loginData.access_token);
            if (data.response?.id) {
                setSongs(prev => {
                    if (mode === "update") {
                        return prev.map(song =>
                            song.id === data.response.id ? data.response : song
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
                label="Content"
                name="content"
                rules={{ required: "Content is required" }}
                error={errors?.content?.message}
                register={register}
            />

            {artists.length > 0 && (
                <FormField
                    as="select"
                    label="Artist"
                    name="artist_id"
                    options={artists.map((a) => ({ value: a.id, label: a.name }))}
                    rules={{ required: "Artist is required" }}
                    error={errors?.artist_id?.message}
                    register={register}
                />
            )}

            <div className="form-actions">
                <Button type="submit">{mode === "update" ? "Update" : "Save"}</Button>
            </div>
        </form>
    )
}