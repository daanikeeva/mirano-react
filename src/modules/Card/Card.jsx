import classNames from "classnames";
import './card.scss'
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import { useState } from "react";


export const Card = ({
    className,
    id,
    img,
    title,
    dateDelivery,
    price
}) => {
  const dispatch = useDispatch();

  const handlerAddToCart = () => {
    dispatch(addItemToCart( {id, img, title, dateDelivery, price} ))
  }

const [isHover, setIsHover] = useState(false);

  return (
    <article className={classNames(className, "card")}>
      <img className="card__image"
        src={img}
        alt={title} />
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <div className="card__footer">
          <p className="card__date-delivery">{dateDelivery}</p>
          <button 
            className="card__button" 
            onClick={handlerAddToCart}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
          {isHover ? 'в корзину' : `${price} ₽`}
          </button>
        </div>
      </div>
      </article>
) }