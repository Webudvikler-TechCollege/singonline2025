import { useMemo } from "react"
import { SongListContainer } from "./SongListContainer.styled"
import { SongListItem } from "../SongListItem/SongListItem"
import { FlushArray } from "../../utils/index"
import { useParams } from "react-router-dom"
import { useSongs } from "../../providers/SongProvider"

export const  SongList = ({ type, keyword, limit = 10 }) => {
  const { artist_id } = useParams()  
  const { songList } = useSongs()

  if(type === 'search' && !keyword) {
    type = 'random'
  }

  // Data filter function
  const data = useMemo(() => {

    if (!songList) return []

    switch (type) {
      case "random":
      default:
        return FlushArray(songList).slice(0, limit)
        break
      case "search":
        if(keyword) {
          const lowerKeyword = keyword.toLowerCase()
          const titlesMatch = songList.filter((x) =>
            x.title.toLowerCase().includes(lowerKeyword)
          )
          const artistsMatch = songList.filter((x) => 
            x.artist?.name?.toLowerCase().includes(lowerKeyword)
          )
          return Array.from(new Set([...titlesMatch,...artistsMatch]));  
        }
        break
        case "artist":
          console.log(artist_id);
          
          if(artist_id) {
            return songList.filter((x) => x.artist.id === parseInt(artist_id,10))
          }
          break
    }
  }, [songList, keyword, type])

  return (
    <SongListContainer>
      {data &&
        data.map((song) => {
          return (
            <SongListItem
              key={song.id}
              id={song.id}
              title={song.title}
              artist={song.artist.name}
              artist_id={song.artist.id}
            />
          )
        })}
    </SongListContainer>
  )
}
