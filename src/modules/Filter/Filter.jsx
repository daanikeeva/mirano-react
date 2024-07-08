import { useState } from 'react'
import './filter.scss'
import { Choices } from '../Choices/Choices'
import { useDispatch } from 'react-redux'
import { changeTypeGoods } from '../../redux/goodsSlice'

export const Filter = () => {
  const dispatch = useDispatch();
  const [openChoice, setOpenChoices] = useState(null);

  const handlerChoicesToggle = (index) => {
    setOpenChoices((openChoice === index) ? null : index);
  }

  const handlerChangeTypeGoods = (type) => {
    dispatch(changeTypeGoods(type))
  }

  return (
    <section className="filter">
    <h2 className="visually-hidden"></h2>
    <div className="container">
      <form className="filter__form">
        <fieldset className="filter__group">
          <input 
            className="filter__radio" 
            type="radio" 
            name="type"
            value="bouquets" 
            id="flower" 
            defaultChecked />
          <label 
            className="filter__label filter__label_flower" 
            htmlFor="flower"
            onClick={() => handlerChangeTypeGoods('bouquets')}
          >Цветы</label>
          <input 
            className="filter__radio" 
            type="radio" 
            name="type" 
            value="toys"
            id="toys" />
          <label 
            className="filter__label filter__label_toys"
            htmlFor="toys"
            onClick={() => handlerChangeTypeGoods('toys')}
            >Игрушки</label>
          <input 
            className="filter__radio" 
            type="radio" 
            name="type"
            value="postcards" 
            id="postcard" />
          <label 
            className="filter__label filter__label_postcard"
            htmlFor="postcard"
            onClick={() => handlerChangeTypeGoods('postcards')}
            >Открытки</label>
        </fieldset>

        <fieldset className="filter__group filter__group_choices"> 
          <Choices 
            buttonLabel='Цена' 
            isOpen={openChoice === 0} 
            handleChoicesToggle={() => handlerChoicesToggle(0)}>
            <fieldset className="filter__price">
              <input className="filter__input-price" type="text" name="minPrice" placeholder="от" />
              <input className="filter__input-price" type="text" name="maxPrice" placeholder="до" />
            </fieldset>
          </Choices>

          <Choices 
            buttonLabel='Тип товара'
            isOpen={openChoice === 1} 
            handleChoicesToggle={() => handlerChoicesToggle(1)}>
            <ul className="filter__type-list">
              <li className="filter__type-item">
                <button className="filter__type-button" type="button">Монобукеты</button>
              </li>
              <li className="filter__type-item">
                <button className="filter__type-button" type="button">Авторскиe букеты</button>
              </li>
              <li className="filter__type-item">
                <button className="filter__type-button" type="button">Цветы в коробке</button>
              </li>
              <li className="filter__type-item">
                <button className="filter__type-button" type="button">Цветы в корзине</button>
              </li>
              <li className="filter__type-item">
                <button className="filter__type-button" type="button">Букеты из сухоцветов</button>
              </li>
            </ul>
          </Choices>
        </fieldset>
      </form>
    </div>
  </section>
)}