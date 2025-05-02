import { Input } from "../Atoms/Input"

export const SearchField = ({ label, name, register, rules, error, ...props }) => {  
  return (
    <Input 
      id={name} 
      placeholder="Search the songbook"
      {...props}>
    </Input>
  )
}
