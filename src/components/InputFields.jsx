function InputFields({id, labelText, type, name, value, changeHandler}) {
    return (
        <div>
            <label htmlFor={id}>{labelText}</label>
            <input type={type}
                   id={id}
                   name={name}
                   value={value}
                   onChange={changeHandler}
            />
        </div>
    )
}

export default InputFields;