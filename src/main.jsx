import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./Styled/Global.style.js"
import { theme } from "./styled/Theme.style.js"
import { AuthProvider } from './providers/AuthProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { SongProvider } from './providers/SongProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SongProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </SongProvider>
    </AuthProvider>
  </StrictMode>,
)
