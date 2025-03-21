import { Link } from "react-router-dom"
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"

export const NotFoundPage = () => {
  return (
    <ContentWrapper title="404 Not found">
      <p><Link to="/">Go to homepage</Link></p>      
    </ContentWrapper>
  )
}
