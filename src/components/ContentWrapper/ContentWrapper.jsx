/**
 * Udskriver sidetitel, descriptiob og
 * h1 og h2 overskrifter på sider
 * @param {*} props
 * @returns
 */

import { Link } from "react-router-dom"
import { ContentWrapperContainer } from "./ContentWrapper.style"

export const ContentWrapper = ({ title,subtitle,description,buttons,children }) => {
  // Sætter page title
  document.title = title

  // Sætter page description hvis der en
  if (description) {
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", description)
  }

  return (
    <ContentWrapperContainer>
      <section>
        <div>
          <h1>{title}</h1>
          {subtitle && <h3>{subtitle}</h3>}
        </div>
        <div>
          {buttons &&
            buttons.map((button, key) => {
              if (button.link) {
                // If it's a link button
                return (
                  <Link className="button" key={key} to={button.link}>
                    <button>{button.text}</button>
                  </Link>
                )
              } else if (button.event) {
                // If it's an event button
                return (
                  <button className="button" key={key} onClick={button.event}>
                    {button.text}
                  </button>
                )
              }
            })}
        </div>
      </section>
      <div>{children}</div>
    </ContentWrapperContainer>
  )
}
