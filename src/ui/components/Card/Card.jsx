import React from 'react'
import Wait from '../../../assets/img/wait.svg'

const Card = ({tarea}) => {
  return (
    <div className='card'>
        <img src={Wait} alt="" />
        <button className='card__deleteBtn'>X</button>
        <div className='card__top'>
            <p>{tarea.title}</p>
        </div>
        <div className='card__bottom'>
            <button className='card__bottom__btn card__bottom__btn--finish'>Finalizar</button>
        </div>
    </div>
  )
}

export default Card