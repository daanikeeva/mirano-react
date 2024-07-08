import './choices.scss'

export const Choices = ({ 
    children, 
    buttonLabel, 
    isOpen, 
    handleChoicesToggle
}) => {

    return (
    <div className="choices">
        <button className="choices__btn" type="button" onClick={handleChoicesToggle}>
            {buttonLabel}
        </button>
    {isOpen && <div className="choices__box filter__choices-box">{children}</div>}
</div>
)
}
