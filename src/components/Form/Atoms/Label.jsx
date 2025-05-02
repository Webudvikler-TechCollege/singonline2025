export const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor}>{children}:</label>
  )
}
