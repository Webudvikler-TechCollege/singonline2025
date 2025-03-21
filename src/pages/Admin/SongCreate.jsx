import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { AdminForm } from "../../Styled/Admin.style"
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../providers/AuthProvider"
import { fetchApi } from "../../utils/api"

export const SongCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [artists, setArtists] = useState([])
  const navigate = useNavigate()
  const { loginData } = useAuth()

  const getArtists = async () => {
    if (!loginData?.access_token) return; // Stop hvis der ikke er en token

    try {
      const data = await fetchApi(`/artists`, "GET", null, loginData.access_token);
      setArtists(data.response); 
    } catch (error) {
      console.error(`Error fetching artists: ${error}`);
    }
  }

  useEffect(() => {
    getArtists()
  }, [loginData])

  const handleAddNewSong = async formdata => {
    if (!loginData?.access_token) return; 

    try {
      const data = await fetchApi(`/songs`, "POST", formdata, loginData.access_token);
      console.log(data);
      if(data.response.id) {
        navigate(`/${data.response.id}`)
      }
    } catch (error) {
      console.error(`Error fetching artists: ${error}`);
    }
  }

  // Function to handle adding a new artist
  const handleAddNewArtist = async newArtistName => {
    if (!loginData?.access_token) return; 

    try {
      const data = await fetchApi(`/artists`, "POST", newArtistName, loginData.access_token);
      setArtists(data.response); 
      if(data.data.id) {
        navigate(`/songs/${data.data.id}`)
      }
    } catch (error) {
      console.error(`Error fetching artists: ${error}`);
    }
  }

  return (
    <ContentWrapper title="Opret ny sang">
      <AdminForm onSubmit={handleSubmit(handleAddNewSong)}>
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
          <select {...register("artist_id", { required: true })} id="artist_id">
            <option value="">Vælg artist</option>
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
