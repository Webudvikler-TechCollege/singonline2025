import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { ContentWrapper } from "../ContentWrapper/ContentWrapper"
import { useAuth } from "../../providers/AuthProvider"
import { fetchApi } from "../../utils/api"
import { SongDetailsStyled } from "./SongDetails.styled"
import iconEdit from "../../assets/images/icon-edit.svg";
import iconPrint from "../../assets/images/icon-print.svg";
import iconHome from "../../assets/images/icon-home.svg";
import { Loader } from "../Loader/Loader"

export const SongDetails = () => {
  const [song, setSong] = useState({})
  const { loginData } = useAuth()
  const { id } = useParams()
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)

  const getSong = async () => {
    if (!loginData?.access_token) return; // Stop hvis der ikke er en token

    try {
      const data = await fetchApi(`/songs/${id}`, "GET", null, loginData.access_token);
      setSong(data.response); // Opdater state med sange
    } catch (error) {
      console.error("Fejl ved hentning af sang:", error);
    } finally {
      setLoader(false); // Stop loader uanset hvad
    }
  }

  useEffect(() => {
    setLoader(true)
    getSong()
  }, [id, loginData])

  if (!song) return <p>Loading song details...</p>

  const arrButtonPanel = [
    { icon: iconEdit, text: "Rediger", link: `/admin/songs/update/${id}` },
    { icon: iconPrint, text: 'Print', event: () => window.print() },
    { icon: iconHome, text: 'Home', link: `/` }
  ]

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <SongDetailsStyled>
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
        </SongDetailsStyled>

      )}
    </>
  )
}
