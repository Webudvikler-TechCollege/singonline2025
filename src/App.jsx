import { Footer } from "./components/Footer/Footer"
import { Grid } from "./components/Grid/Grid"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { NavBar } from "./components/NavBar/NavBar"
import { ContainerStyle } from "./styled/Container.styled"
import { AppRouter } from "./components/AppRouter/AppRouter"
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary"

const App = () => {
  return (
    <>
      <ContainerStyle $maxwidth="1440">
        <Grid>
          <Header area="header" />
          <NavBar area="navbar" />
          <Main area="main">
            <ErrorBoundary>
              <AppRouter />
            </ErrorBoundary>
          </Main>
          <Footer area="footer" />
        </Grid>
      </ContainerStyle>
    </>
  )
}
export default App
