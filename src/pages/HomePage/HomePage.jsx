import { useState } from "react"
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { SongList } from "../../components/SongList/SongList"
import iconPlus from "../../assets/images/icon-plus.svg";
import { SearchForm } from "../../components/Form/Organism/SearchForm";


export const HomePage = () => {
  const [keyword, setKeyword] = useState("")

  const arrButtonPanel = [
    { id: 1, icon: iconPlus, text: "Opret ny sang", link: "/admin/songs/create" }
  ]

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <ContentWrapper title="Search" buttons={arrButtonPanel}>
      <SearchForm keyword={keyword} onKeywordChange={handleKeywordChange} />
      <SongList type="search" keyword={keyword} />
    </ContentWrapper>
  )
}