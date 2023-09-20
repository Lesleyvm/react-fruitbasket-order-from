function InputFields({id, labelText, type, name}) {
    return (
        <div>
            <label htmlFor={id}>{labelText}</label>
            <input type={type}
                   id={id}
                   name={name}
                   // value={}
                   // onChange={}
            />
        </div>
    )
}

export default InputFields;