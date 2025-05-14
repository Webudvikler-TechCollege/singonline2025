import { NavLink } from "react-router-dom"
import { NavBarStyled } from "./NavBar.styled"
import { useState } from "react"
import { useAuth } from "../../providers/AuthProvider"
import { LoginInfo } from "../LoginInfo/LoginInfo"

export const NavBar = ({ area }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { loginData } = useAuth()

  const navItems = [
    { name: "HOME", path: "/" },
    /* { name: "SETS", path: "/sets" },
    { name: "PROFILE", path: "/profile" }, */
    !loginData?.access_token && { name: "LOGIN", path: "/login" }
  ]

  return (
    <NavBarStyled $area={area} $isOpen={isOpen}>
      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
          <span className="close">&times;</span>
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </div>

      <ul className={`nav ${isOpen ? "open" : ""}`}>
        {navItems.map((item, i) => (
          <li key={i}>
            <NavLink to={item.path} onClick={() => setIsOpen(false)}>
              {item.name}
            </NavLink>
          </li>
        ))}
      {loginData?.access_token && (
        <li><LoginInfo /></li>
      )}
      </ul>

    </NavBarStyled>
  )
}
