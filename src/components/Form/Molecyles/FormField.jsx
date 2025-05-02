import { Input } from "../Atoms/Input"
import { Textarea } from "../Atoms/Textarea"
import { Select } from "../Atoms/Select"
import { Label } from "../Atoms/Label"

const components = {
  input: Input,
  textarea: Textarea,
  select: Select,
}

export const FormField = ({
  label,
  name,
  register,
  rules,
  error,
  as = "input", // input | textarea | select
  options = [], // kun til select
  ...props
}) => {
  const Component = components[as] || Input;

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>

      {as === "select" ? (
        <Component id={name} {...register(name, rules)} {...props}>
          <option value="">Vælg...</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Component>
      ) : (
        <Component id={name} {...register(name, rules)} {...props} />
      )}

      {error && <span className="error">{error}</span>}
    </div>
  )
}
