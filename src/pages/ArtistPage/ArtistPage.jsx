import { Link } from "react-router-dom"
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { SongList } from "../../components/SongList/SongList"

export const ArtistPage = () => {
  return (
    <ContentWrapper title="Artist">
      <Link className="back" to="/">
        &laquo; Tilbage
      </Link>
      <SongList type="artist" />
    </ContentWrapper>
  )
}
