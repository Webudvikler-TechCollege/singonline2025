import { Link } from "react-router-dom"
import { SongListItemContainer } from "./SongListItemContainer.styled"
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs"

export const SongListItem = ({ id, title, artist, artist_id }) => {

  return (
    <SongListItemContainer>
      <Link to={`/${id}`} title="Gå til detaljer">
        {title}
      </Link>
      <Link to={`/artist/${artist_id}`} title="Se alle sange med denne artist">
        {artist}
      </Link>
      <div>
          <>
            <Link to={`/admin/songs/update/${id}`}>
              <BsFillPencilFill />
            </Link>
            <Link to={`/admin/songs/delete/${id}`}>
              <BsFillTrash3Fill />
            </Link>
          </>
      </div>
    </SongListItemContainer>
  )
}
