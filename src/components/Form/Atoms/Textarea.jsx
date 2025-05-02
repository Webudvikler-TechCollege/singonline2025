export const Textarea = ({ id, value, onChange, ...rest}) => {
  return (
    <textarea 
        id={id} 
        value={value} 
        onChange={onChange}
        {...rest} 
    />
  )
}
