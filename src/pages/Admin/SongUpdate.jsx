import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { AdminForm } from "../../Styled/Admin.style"
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../providers/AuthProvider"
import { fetchApi } from "../../utils/api"

export const SongUpdate = () => {
  const { id } = useParams()
  const [artists, setArtists] = useState([])
  const navigate = useNavigate()
  const { loginData } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const getArtists = async () => {
    if (!loginData?.access_token) return; // Stop hvis der ikke er en token

    try {
      const data = await fetchApi(`/artists`, "GET", null, loginData.access_token);
      setArtists(data.response); 
    } catch (error) {
      console.error(`Error fetching artists: ${error}`);
    }
  }

  const getSong = async () => {
    try {
      const data = await fetchApi(`/songs/${id}`, "GET", null, loginData.access_token);
      reset({
        title: data.response.title,
        content: data.response.content,
        artist_id: data.response.artist_id,
      });
    } catch (error) {
      console.error(`Error fetching artists: ${error}`);
    }
  }

  useEffect(() => {
    getArtists()
    getSong()
  }, [loginData, id])  

  const handleUpdate = async formdata => {
    if (!loginData?.access_token) return; 

    try {
      const data = await fetchApi(`/songs/${id}`, "PUT", formdata, loginData.access_token);
      if(data.response.id) {
        navigate(`/${data.response.id}`)
      }
    } catch (error) {
      console.error(`Error updating song: ${error}`);
    }
  }

  return (
    <ContentWrapper title="Edit song">
      <AdminForm onSubmit={handleSubmit(handleUpdate)}>
        <div>
          <label htmlFor="title">Titel:</label>
          <input
            {...register("title", { required: true })}
            type="text" 
            id="title"
          />
        </div>
        <div>
          <label htmlFor="title">Tekst:</label>
          <textarea {...register("content", { required: true })} id="content" />
        </div>
        <div>
          <label htmlFor="artist_id">Artist:</label>
          <select
            {...register("artist_id", { required: true })}
            id="artist_id"
            onChange={(e) => setSong({...song, artist_id: e.target.value})}
          >
            {artists.map((artist) => {
              return (
                <option key={artist.id} value={artist.id}>
                  {artist.name}
                </option>
              )
            })}
          </select>
          <button
            type="button"
            onClick={() => {
              const newArtistName = prompt("Enter the name of the new artist:")
              if (newArtistName) {
                handleAddNewArtist(newArtistName)
              }
            }}
          >
            Add New Artist
          </button>
        </div>
        <button type="submit">Gem</button>
      </AdminForm>
    </ContentWrapper>
  )
}
