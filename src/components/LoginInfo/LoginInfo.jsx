import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider"
import { LoginInfoStyled } from "./LoginInfo.styled"
import { Button } from "../Form/Atoms/Button";

export const LoginInfo = () => {
  const { loginData, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <>
      {loginData &&
        loginData?.user && (
          <LoginInfoStyled>
            <p>
              Logged in as:
              <br />
              {`${loginData?.user?.firstname} ${loginData?.user?.lastname}`}
            </p>
            <Button onClick={handleLogout}>Logout</Button>
          </LoginInfoStyled>
        )}
    </>
  )
}
