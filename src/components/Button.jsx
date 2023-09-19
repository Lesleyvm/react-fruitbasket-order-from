function Button({buttonType = "button", buttonText, clickHandler}) {
    return (
        <>
            <button type={buttonType}
                    onClick={clickHandler}
            >
                {buttonText}
            </button>
        </>
    )
}
export default Button;