import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper"
import iconPlus from "../../../assets/images/icon-plus.svg";
import { SetList } from "../../../components/Form/Organism/SetList";


export const SetListPage = () => {

  const arrButtonPanel = [
    { id: 1, icon: iconPlus, text: "Create new set", link: "/admin/sets/create" }
  ]

  return (
    <ContentWrapper title="Set list" buttons={arrButtonPanel}>
      <SetList />
    </ContentWrapper>
  )
}