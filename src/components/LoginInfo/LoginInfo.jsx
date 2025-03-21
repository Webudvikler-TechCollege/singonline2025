import { useAuth } from "../../providers/AuthProvider"
import { Button } from "../Button/Button";
import { LoginInfoContainer } from "./LoginInfo.style"

export const LoginInfo = () => {
  const { loginData, logout } = useAuth()

  return (
    <>
      {loginData &&
        loginData?.user && (
          <LoginInfoContainer>
            <p>
              Logget ind som:
              <br />
              {`${loginData?.user?.firstname} ${loginData?.user?.lastname}`}
            </p>
            <Button event={logout}>Logout</Button>
          </LoginInfoContainer>
        )}
    </>
  )
}
