import { useEffect, useState } from "react"
import { SongDetailsContainer } from "./SongDetailsContainer.styled"
import { Link, useParams, useNavigate } from "react-router-dom"
import { ContentWrapper } from "../ContentWrapper/ContentWrapper"
import { useAuth } from "../../providers/AuthProvider"
import { fetchApi } from "../../utils/api"

export const SongDetails = () => {
  const [song, setSong] = useState({})
  const { loginData } = useAuth()
  const { id } = useParams()
  const navigate = useNavigate()

  const getSong = async () => {
    if (!loginData?.access_token) return; // Stop hvis der ikke er en token

    try {
      const data = await fetchApi(`/songs/${id}`, "GET", null, loginData.access_token);
      setSong(data.response); // Opdater state med sange
    } catch (error) {
      console.error("Fejl ved hentning af sang:", error);
    }
  }

  useEffect(() => {
    getSong()
  }, [id, loginData])

  if (!song) return <p>Loading song details...</p>  

  const arrButtonPanel = [
    { text: "Rediger", link: `/admin/songs/update/${id}` },
    { text: "Udskriv", event: () => window.print() },
    { text: "Slet", link: `/admin/songs/delete/${id}` },
  ]

  return (
    <SongDetailsContainer>
      <ContentWrapper title={song.title} buttons={arrButtonPanel}>
        {song && song.artist && (
          <>
            <h4>Af {song.artist.name}</h4>
            <Link className="back" onClick={() => navigate(-1)}>
              &laquo; Tilbage
            </Link>
            <div className="content">
              <pre>{song.content}</pre>
            </div>
          </>
        )}
      </ContentWrapper>
    </SongDetailsContainer>
  )
}
