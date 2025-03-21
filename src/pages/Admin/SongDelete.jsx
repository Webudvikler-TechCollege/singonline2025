import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSongs } from "../../providers/SongProvider"
import { useAuth } from "../../providers/AuthProvider"
import { fetchApi } from "../../utils/api"

export const SongDelete = () => {
  const { loginData } = useAuth()
  const { id } = useParams()
  const [ song, setSong ] = useState([])
  const { songList, setSongList } = useSongs()
  const navigate = useNavigate();

  const getSong = async () => {
    try {
      const data = await fetchApi(`/songs/${id}`, "GET", null, loginData.access_token);
      setSong(data.response); 
    } catch (error) {
      console.error(`Error fetching artists: ${error}`);
    }
  }

  useEffect(() => {
    getSong()

  }, [id])

  const deleteSong = async () => {
    try {
      const data = await fetchApi(`/songs/${id}`, "DELETE", null, loginData.access_token);
      setSongList(prevList => prevList.filter(song => song.id !== parseInt(id)));
      navigate('/')
    } catch (error) {
      console.error(`Error fetching artists: ${error}`);
    }
  }

  return (
    <ContentWrapper title="Slet sang">
      {song && song.title && 
        <>
          <p>Vil du slette sangen <i>{song.title}?</i></p>
          <button onClick={deleteSong}>Slet sang</button>
        </>
      }
    </ContentWrapper>
  )
}
