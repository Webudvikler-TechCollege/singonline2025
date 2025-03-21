export const FormInput = ({ label, id, type, register, errors, value }) => {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}:</label>
            <input type={type} id={id} defaultValue={value} {...register(id, { required: true })} />
            {errors[id] && <span className="error">{label} can not be empty!</span>}
        </div>
    )
}