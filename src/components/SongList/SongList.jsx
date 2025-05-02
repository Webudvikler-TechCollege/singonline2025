import { useEffect, useMemo, useState } from "react"
import { SongListStyled } from "./SongList.styled"
import { SongListItem } from "../SongListItem/SongListItem"
import { FlushArray } from "../../utils/index"
import { useParams } from "react-router-dom"
import { useSongs } from "../../providers/SongProvider"

export const SongList = ({ type, keyword, limit = 10 }) => {
  const [ headline, setHeadline ] = useState("")
  const { artist_id } = useParams()
  const { songs } = useSongs()

  if (type === 'search' && !keyword) {
    type = 'random'
  }

  // Data filter function
  const data = useMemo(() => {
    if (!songs) return []

    switch (type) {
      case "random":
      default:
        return FlushArray(songs).slice(0, limit)
        break
      case "search":
        if (keyword) {
          const lowerKeyword = keyword.toLowerCase()
          const titlesMatch = songs.filter((x) =>
            x.title.toLowerCase().includes(lowerKeyword)
          )
          const artistsMatch = songs.filter((x) =>
            x.artist?.name?.toLowerCase().includes(lowerKeyword)
          )
          const result = Array.from(new Set([...titlesMatch, ...artistsMatch]));
          return result
        }
        break
      case "artist":
        if (artist_id) {
          return songs.filter((x) => x.artist.id === parseInt(artist_id, 10))
        }
        break
    }
  }, [songs, keyword, type])

  useEffect(() => {
    switch(type) {
      case "random":
        setHeadline('10 random');
        break;
      case "search":
        setHeadline(`Search results - Found ${data.length} song(s)`);
        break;
      case "artist":
        setHeadline('Songs by artist');
        break;
      default:
        setHeadline('');
    }
  }, [type, data]);

  return (
    <>
      <h3>{headline}</h3>
      <SongListStyled>
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
      </SongListStyled>
    </>
  )
}
