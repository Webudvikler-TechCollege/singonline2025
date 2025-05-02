import { useEffect, useState } from "react"
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { SongList } from "../../components/SongList/SongList"

export const SearchPage = () => {
  const [keyword, setKeyword] = useState("")
  const [headline, setHeadline] = useState("")

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value)
  }

  useEffect(() => {
    if (keyword) {
      setHeadline(`Search for word ${keyword}`)
    } else {
      setHeadline(`10 random`)
    }
  })

  const arrButtonPanel = [
    { id: 1, text: "Opret ny sang", link: "/admin/songs/create" }
  ]

  return (
    <ContentWrapper title="Home" buttons={arrButtonPanel}>
      <p>
        <label htmlFor="keyword">Search the songbook:<br /></label>
        <input type="text" name="keyword" onChange={handleKeywordChange} />
      </p>
      <h2>{headline}</h2>
      <SongList type="search" keyword={keyword} />
    </ContentWrapper>
  )
}
