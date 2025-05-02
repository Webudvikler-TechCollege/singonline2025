import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./styled/Global.styled.js"
import { theme } from "./styled/Theme.styled.js"
import { AuthProvider } from './providers/AuthProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SongProvider } from './providers/SongProvider.jsx'
import { ArtistProvider } from './providers/ArtistProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SongProvider>
        <ArtistProvider>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </ArtistProvider>
      </SongProvider>
    </AuthProvider>
  </StrictMode>,
)
