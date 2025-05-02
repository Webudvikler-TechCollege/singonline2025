export const Input = ({ id, type='text', value, onChange, ...rest}) => {
  return (
    <input 
        id={id} 
        type={type} 
        value={value} 
        onChange={onChange}
        {...rest} 
    />
  )
}
