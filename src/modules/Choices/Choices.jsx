import { Children, useState } from 'react'
import './choices.scss'

export const Choices = ({ children, buttonLabel, className}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((oldIsOpen) => !oldIsOpen)
    }

    return (
    <div className="choices">
        <button className="choices__btn" type="button" onClick={handleToggle}>
            {buttonLabel}
        </button>
    {isOpen && <div className="choices__box filter__choices-box">{children}</div>}
</div>
)
}
